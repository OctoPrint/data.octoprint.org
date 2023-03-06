import React, { useState } from "react";

import GraphHeader from "./GraphHeader";
import Stats from "./Stats";
import StatPieChart from "./Piechart";
import {useDays} from "./DaysProvider";

const LOOKUP = {
    linux: "Linux",
    windows: "Windows",
    macos: "Mac",
    freebsd: "FreeBSD"
}

export default function ServerStats() {
    const [ coreData, setCoreData ] = useState([]);
    const [ osData, setOsData ] = useState([]);
    const [ bitsData, setBitsData ] = useState([]);

    const {days} = useDays()

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
        <Stats title={`Server Environment stats (past ${days} days)`} stats={`server_environment_stats_${days}d.json`} anchor="server" onData={onData}>
            <GraphHeader title="Operating system" anchor="server_os" />
            <StatPieChart data={osData} nameKey="name" dataKey="count" id="os" />
            <GraphHeader title="Bits" anchor="server_bits" />
            <StatPieChart data={bitsData} nameKey="name" dataKey="count" id="bits" />
            <GraphHeader title="Core count" anchor="server_cores" />
            <StatPieChart data={coreData} nameKey="name" dataKey="count" id="cores" />
         </Stats>
    );
}