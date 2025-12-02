import React, {useState, useEffect} from "react";

import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {FormControlLabel, Checkbox} from "@mui/material";
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts";

import GraphHeader from "./GraphHeader";
import Stats from "./Stats";
import {useDays} from "./DaysProvider";
import {COLORS, countFormatter} from "../util/charts";

// keep in sync via `python src/octoprint/plugins/achievements/achievements.py`
import ACHIEVEMENTS from "../data/achievements.json";

const MARGIN = 10;
const FONTSIZE = 12;

const numberFormatter = (value, total) =>
    countFormatter(value) + " (" + Math.floor((value / total) * 100) + "%)";

const measureText = (text, font) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    context.font = font;
    return context.measureText(text).width;
};

export default function AchievementStats(props) {
    const [stats, setStats] = useState({});

    const [instanceCount, setInstanceCount] = useState(0);
    const [achievementData, setAchievementData] = useState([]);

    const [maxTextWidthLeft, setMaxTextWidthLeft] = useState(0);
    const [maxTextWidthRight, setMaxTextWidthRight] = useState(0);

    const [spoiler, setSpoiler] = useState(false);

    const {days} = useDays();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    const getDescriptionOf = (label) => {
        if (label === "(Hidden)") return "This achievement is hidden.";

        for (const a in ACHIEVEMENTS) {
            const achievement = ACHIEVEMENTS[a];
            if (label === achievement.name || label === `${achievement.name}*`)
                return achievement.description;
        }
        return "";
    };

    const AchievementTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length) {
            return (
                <div
                    className="achievement-tooltip"
                    style={{
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                        fontSize: FONTSIZE,
                        padding: "0 10px",
                        border: "1px solid white"
                    }}
                >
                    <p className="label">
                        <strong>
                            {label}: {numberFormatter(payload[0].value, instanceCount)}
                        </strong>
                    </p>
                    <p className="desc">{getDescriptionOf(label)}</p>
                </div>
            );
        }
        return null;
    };

    const onData = (d) => {
        setStats(d);
    };

    useEffect(() => {
        if (stats.instances === undefined || stats.unlocked === undefined) return;

        const font = `${FONTSIZE}px ${theme.typography.fontFamily}`;

        setInstanceCount(stats.instances);
        setMaxTextWidthRight(
            measureText(numberFormatter(stats.instances, stats.instances), font)
        );

        const data = [];
        for (const a in ACHIEVEMENTS) {
            const achievement = ACHIEVEMENTS[a];
            const name =
                achievement.hidden && !spoiler
                    ? "(Hidden)"
                    : `${achievement.name}${achievement.hidden ? "*" : ""}`;
            if (stats.unlocked[a]) {
                data.push({name: name, count: stats.unlocked[a]});
            } else if (!achievement.hidden) {
                data.push({name: name, count: 0});
            }
        }
        data.sort((a, b) => b.count - a.count);

        const width = data.reduce((acc, cur) => {
            const value = cur["name"];
            const width = measureText(value.toLocaleString(), font);
            if (width > acc) {
                return width;
            }
            return acc;
        }, 0);
        setMaxTextWidthLeft(width);

        setAchievementData(data);
        console.log("Achievement data", data);
    }, [stats, spoiler, theme.typography.fontFamily]);

    return (
        <Stats
            title={`Achievement stats (past ${days} days, OctoPrint 1.10.0+)`}
            stats={`achievements_stats_${days}d.json`}
            anchor="achievements"
            onData={onData}
        >
            <p>Instances tracking achievements: {instanceCount}</p>
            <GraphHeader
                title="Globally unlocked achievements"
                anchor="unlocked_achievements"
            />
            <ResponsiveContainer
                width="100%"
                aspect={isSmallScreen ? 0.3 : 1}
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
                        width={maxTextWidthLeft / 2 + 2 * MARGIN}
                        interval={0}
                        axisLine={{stroke: theme.palette.text.secondary}}
                        tickLine={{stroke: theme.palette.text.secondary}}
                        tick={{fill: theme.palette.text.secondary, fontSize: FONTSIZE}}
                    />
                    {!isSmallScreen && (
                        <YAxis
                            orientation="right"
                            yAxisId={1}
                            dataKey="count"
                            type="category"
                            width={maxTextWidthRight + 2 * MARGIN}
                            axisLine={{stroke: theme.palette.text.secondary}}
                            tickLine={{stroke: theme.palette.text.secondary}}
                            tick={{
                                fill: theme.palette.text.secondary,
                                fontSize: FONTSIZE
                            }}
                            tickFormatter={(v) => numberFormatter(v, instanceCount)}
                        />
                    )}
                    <Tooltip
                        content={<AchievementTooltip />}
                        contentStyle={{
                            backgroundColor: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            fontSize: FONTSIZE
                        }}
                    />

                    <Bar
                        dataKey="count"
                        fill={COLORS[0]}
                        background={{fill: theme.palette.text.secondary, opacity: 0.1}}
                        name="Instances"
                    />
                </BarChart>
            </ResponsiveContainer>
            <p>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={spoiler}
                            onChange={(e) => setSpoiler(e.target.checked)}
                            color="primary"
                        />
                    }
                    label="Show hidden achievements"
                />
            </p>
        </Stats>
    );
}
