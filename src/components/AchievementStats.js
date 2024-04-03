import React, {useState} from "react";

import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts";

import GraphHeader from "./GraphHeader";
import Stats from "./Stats";
import {useDays} from "./DaysProvider";
import {COLORS, countFormatter} from "../util/charts";

// ----------------------------------------------------------------------------
// keep in sync via `python src/octoprint/plugins/achievements/achievements.py`
const ACHIEVEMENTS = {
    achievement_not_found: {
        name: "Achievement Not Found",
        hidden: true
    },
    adventurer: {
        name: "The Adventurer",
        hidden: false
    },
    all_beginnings_are_hard: {
        name: "All Beginnings Are Hard",
        hidden: false
    },
    better_safe_than_sorry: {
        name: "Better Safe Than Sorry",
        hidden: false
    },
    cant_get_enough: {
        name: "Can't Get Enough",
        hidden: false
    },
    clean_house_i: {
        name: "Clean House",
        hidden: true
    },
    clean_house_ii: {
        name: "Clean House II",
        hidden: true
    },
    clean_house_iii: {
        name: "Clean House III",
        hidden: true
    },
    crossover_episode: {
        name: "What Is This, A Crossover Episode?",
        hidden: true
    },
    early_bird: {
        name: "Early Bird",
        hidden: true
    },
    half_marathon: {
        name: "Half Marathon",
        hidden: false
    },
    hang_in_there: {
        name: "Hang In There!",
        hidden: true
    },
    happy_birthday_foosel: {
        name: "Happy Birthday, foosel",
        hidden: true
    },
    happy_birthday_octoprint: {
        name: "Happy Birthday, OctoPrint",
        hidden: true
    },
    heavy_chonker: {
        name: "Heavy Chonker",
        hidden: false
    },
    marathon: {
        name: "Marathon",
        hidden: false
    },
    mass_production: {
        name: "Mass Production",
        hidden: true
    },
    night_owl: {
        name: "Night Owl",
        hidden: true
    },
    one_of_those_days: {
        name: "Must Be One Of Those Days",
        hidden: true
    },
    one_small_step_for_man: {
        name: "That's One Small Step For Man",
        hidden: false
    },
    santas_little_helper: {
        name: "Santa's Little Helper",
        hidden: true
    },
    so_close: {
        name: "So Close",
        hidden: true
    },
    spooky: {
        name: "Spooky",
        hidden: true
    },
    sprint: {
        name: "Sprint",
        hidden: false
    },
    tgif: {
        name: "TGIF",
        hidden: false
    },
    the_collector_i: {
        name: "The Collector",
        hidden: true
    },
    the_collector_ii: {
        name: "The Collector II",
        hidden: true
    },
    the_collector_iii: {
        name: "The Collector III",
        hidden: true
    },
    the_manufacturer_i: {
        name: "The Manufacturer",
        hidden: false
    },
    the_manufacturer_ii: {
        name: "The Manufacturer II",
        hidden: true
    },
    the_manufacturer_iii: {
        name: "The Manufacturer III",
        hidden: true
    },
    the_organizer: {
        name: "The Organizer",
        hidden: true
    },
    the_wizard: {
        name: "The Wizard",
        hidden: false
    },
    tinkerer: {
        name: "The Tinkerer",
        hidden: false
    },
    weekend_warrior: {
        name: "Weekend Warrior",
        hidden: false
    },
    what_could_possibly_go_wrong: {
        name: "What Could Possibly Go Wrong?",
        hidden: true
    }
};
// ----------------------------------------------------------------------------

const MARGIN = 20;

const measureText = (text, font) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text).width;
};

export default function AchievementStats(props) {
    const [instanceCount, setInstanceCount] = useState(0);
    const [achievementData, setAchievementData] = useState([]);
    const [maxTextWidthLeft, setMaxTextWidthLeft] = useState(0);
    const [maxTextWidthRight, setMaxTextWidthRight] = useState(0);

    const {days} = useDays();

    const numberFormatter = (value) => {
        return (
            countFormatter(value) +
            " (" +
            Math.floor((value / instanceCount) * 100) +
            "%)"
        );
    };

    const tooltipFormatter = (value, name, props) => {
        return [numberFormatter(value), name];
    };

    const onData = (d) => {
        setInstanceCount(d.instances);
        setMaxTextWidthRight(
            measureText(numberFormatter(d.instances), "14px Helvetica Neue")
        );

        const data = [];
        for (const a in ACHIEVEMENTS) {
            const achievement = ACHIEVEMENTS[a];
            const name = achievement.hidden ? "(Hidden)" : achievement.name;
            if (d.unlocked[a]) {
                data.push({name: name, count: d.unlocked[a]});
            } else if (!achievement.hidden) {
                data.push({name: name, count: 0});
            }
        }
        data.sort((a, b) => b.count - a.count);

        const width = data.reduce((acc, cur) => {
            const value = cur["name"];
            const width = measureText(value.toLocaleString(), "14px Helvetica Neue");
            if (width > acc) {
                return width;
            }
            return acc;
        }, 0);
        setMaxTextWidthLeft(width);

        setAchievementData(data);
        console.log("Achievement data", data);
    };

    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Stats
            title={`Achievement stats (past ${days} days, OctoPrint 1.10.0+)`}
            stats={`achievements_stats_${days}d.json`}
            anchor="achievements"
            onData={onData}
        >
            <GraphHeader
                title="Globally unlocked achievements"
                anchor="unlocked_achievements"
            />
            <ResponsiveContainer
                width="100%"
                aspect={isSmallScreen ? 1 : 1.78}
                debounce={50}
            >
                <BarChart
                    data={achievementData}
                    layout="vertical"
                    margin={{left: MARGIN, right: MARGIN}}
                >
                    <XAxis type="number" domain={[0, instanceCount]} hide />
                    <YAxis
                        yAxisId={0}
                        dataKey="name"
                        type="category"
                        width={maxTextWidthLeft / 2 + MARGIN}
                        interval={0}
                    />
                    <YAxis
                        orientation="right"
                        yAxisId={1}
                        dataKey="count"
                        type="category"
                        tickline={false}
                        tickFormatter={numberFormatter}
                        width={maxTextWidthRight + MARGIN}
                    />
                    <Tooltip
                        formatter={tooltipFormatter}
                        contentStyle={{
                            backgroundColor: theme.palette.background.paper,
                            color: theme.palette.text.primary
                        }}
                    />

                    <Bar dataKey="count" fill={COLORS[0]} />
                </BarChart>
            </ResponsiveContainer>
        </Stats>
    );
}
