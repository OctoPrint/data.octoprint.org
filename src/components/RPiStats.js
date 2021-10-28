import React, { useState } from "react";

import Typography from "@mui/material/Typography";

import Stats from "./Stats";
import StatPieChart from "./Piechart";
import {useDays} from "./DaysProvider";

export default function RPiStats() {
    const [ modelData, setModelData ] = useState([]);
    const [ octopiData, setOctopiData ] = useState([]);

    const {days} = useDays()

    const onData = (d) => {
        const modelStats = Object.keys(d.models);
        modelStats.sort((a, b) => d.models[b].instances - d.models[a].instances);
        const models = modelStats.map((model) => {
            return {
                name: model
                    .replace("Raspberry Pi", "RPi")
                    .replace(/(\d) Model /, "$1")
                    .replace(" Model ", " 1")
                    .replace(" Plus ", "+ ")
                    .replace("Compute Module", "CM"),
                count: d.models[model].instances
            }
        });

        const octopiStats = Object.keys(d.octopi_versions);
        octopiStats.sort((a, b) => d.octopi_versions[b].instances - d.octopi_versions[a].instances);
        const octopi = octopiStats.map((octopi) => {
            return {
                name: octopi,
                count: d.octopi_versions[octopi].instances
            }
        });

        setModelData(models);
        setOctopiData(octopi);
    }

    return (
        <Stats title={`Raspberry Pi related stats (past ${days} days)`} stats={`rpi_stats_${days}d.json`} onData={onData}>
            <Typography variant="subtitle1">
                Raspberry Pi Model
            </Typography>
            <StatPieChart data={modelData} nameKey="name" dataKey="count" id="model" />
            <Typography variant="subtitle1">
                OctoPi Version
            </Typography>
            <StatPieChart data={octopiData} nameKey="name" dataKey="count" id="octopi" />
         </Stats>
    );
}