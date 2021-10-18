import React, { useState } from "react";

import Typography from "@mui/material/Typography";

import Stats from "./Stats";
import StatPieChart from "./Piechart";
import {useDays} from "./DaysProvider";

const COUNT = 10;

export default function ClientStats(props) {
    const [ browserTop10Data, setBrowserTop10Data ] = useState([]);
    const [ osTop10Data, setOsTop10Data ] = useState([]);

    const {days} = useDays()

    const onData = (d) => {
        let browserTop10 = [], osTop10 = [];

        const otherBrowser = {
            name: "Other",
            count: 0
        };
        const otherOs = {
            name: "Other",
            count: 0
        };

        for (const browser in d.browser) {
            if (browserTop10.length < COUNT) {
                browserTop10.push({
                    name: browser,
                    count: d.browser[browser].instances
                });
            } else {
                otherBrowser.count += d.browser[browser].instances;
            }
        };
        if (otherBrowser.count > 0) {
            browserTop10.push(otherBrowser);
        }

        for (const os in d.os) {
            if (osTop10.length < COUNT) {
                osTop10.push({
                    name: os,
                    count: d.os[os].instances
                });
            } else {
                otherOs.count += d.os[os].instances;
            }
        };
        if (otherOs.count > 0) {
            osTop10.push(otherOs);
        };

        setBrowserTop10Data(browserTop10);
        setOsTop10Data(osTop10);
    }

    return (
        <Stats title={`Client Environment stats (past ${days} days)`} stats={`client_environment_stats_${days}d.json`} onData={onData}>
            <Typography variant="subtitle1">
                Browser
            </Typography>
            <StatPieChart data={browserTop10Data} nameKey="name" dataKey="count" id="browserTop10" />
            <Typography variant="subtitle1">
                Operating System
            </Typography>
            <StatPieChart data={osTop10Data} nameKey="name" dataKey="count" id="osTop10" />
         </Stats>
    );
}