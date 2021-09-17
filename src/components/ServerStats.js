import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

import Stats from "./Stats";
import StatPieChart from "./Piechart";

const LOOKUP = {
    linux: "Linux",
    windows: "Windows",
    macos: "Mac",
    freebsd: "FreeBSD"
}

export default function ServerStats(props) {
    const [ coreData, setCoreData ] = useState([]);
    const [ osData, setOsData ] = useState([]);
    const [ bitsData, setBitsData ] = useState([]);

    const onData = (d) => {
        let cores = [];
        let os = [];
        let bits = [];

        const otherCores = {
            name: "Other",
            count: 0
        };

        const coreStats = Object.keys(d.cores);
        coreStats.sort((a, b) => d.cores[b].instances - d.cores[a].instances);
        coreStats.forEach((entry) => {
            if (cores.length <= 10 && entry > 0) {
                cores.push({
                    name: entry,
                    count: d.cores[entry].instances
                })
            } else {
                otherCores.count += d.cores[entry].instances;
            }
        });
        if (otherCores.count > 0) {
            cores.push(otherCores);
        }

        for (const entry in d.os) {
            os.push({
                name: LOOKUP[entry],
                count: d.os[entry].instances
            });
        };

        for (const entry in d.bits) {
            bits.push({
                name: entry,
                count: d.bits[entry].instances
            })
        }

        setCoreData(cores);
        setOsData(os);
        setBitsData(bits);
    }

    return (
        <Stats title={`Server Environment stats (past ${props.days} days)`} stats={`server_environment_stats_${props.days}d.json`} onData={onData}>
            <Typography variant="subtitle1">
                Operating System
            </Typography>
            <StatPieChart data={osData} nameKey="name" dataKey="count" id="os" />
            <Typography variant="subtitle1">
                Bits
            </Typography>
            <StatPieChart data={bitsData} nameKey="name" dataKey="count" id="bits" />
            <Typography variant="subtitle1">
                Core count
            </Typography>
            <StatPieChart data={coreData} nameKey="name" dataKey="count" id="cores" />
         </Stats>
    );
}