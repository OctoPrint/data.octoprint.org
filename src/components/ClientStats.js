import React, { useState } from "react";

import Typography from "@mui/material/Typography";

import Stats from "./Stats";
import StatPieChart from "./Piechart";
import {useDays} from "./DaysProvider";

const COUNT = 10;

const ES6_COMPATIBLE = {
    "Chrome": 51,
    "Firefox": 54,
    "Edge": 15,
    "Safari": 10,
    "Mobile Safari": 10,
    "Opera": 38,
    "Samsung Browser": 5,
    "Chrome WebView": 101,
    "Android Browser": 101,
    "Waterfox": 54,
    "IE": 1000,
    "Opera Touch": 64,
    "QQBrowser": 10,
    "Chromium": 101,
    "terminator": 0
};

export default function ClientStats(props) {
    const [ browserTop10Data, setBrowserTop10Data ] = useState([]);
    const [ osTop10Data, setOsTop10Data ] = useState([]);
    const [ es6SupportData, setEs6SupportData ] = useState([]);

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

        let es6Supported = 0;
        let es6NotSupported = 0;
        let es6Unknown = 0;
        for (const version in d.browser_version) {
            const instances = d.browser_version[version].instances;

            try {
                console.log(version);
                const [b, v] = version.split("/");
                const v_to_check = v.split(".")[0];
                console.log(`Browser: ${b}, version: ${v}, version to check: ${v_to_check}, instances: ${instances}`);
    
                if (!d.browser[b]) {
                    es6Unknown += instances;
                    continue;
                }
    
                if (ES6_COMPATIBLE[b] === undefined) {
                    es6Unknown += instances;
                } else if (v_to_check >= ES6_COMPATIBLE[b]) {
                    es6Supported += instances;
                } else {
                    es6NotSupported += instances;
                }
            } catch (e) {
                console.log(e)
                es6Unknown += instances;
            };
        }
        let es6Support = [
            { name: "ES6 supported", count: es6Supported },
            { name: "ES6 unsupported", count: es6NotSupported },
            { name: "Unknown ES6 support", count: es6Unknown }
        ]

        setBrowserTop10Data(browserTop10);
        setOsTop10Data(osTop10);
        setEs6SupportData(es6Support);
    }

    return (
        <Stats title={`Client Environment stats (past ${days} days)`} stats={`client_environment_stats_${days}d.json`} onData={onData}>
            <Typography variant="subtitle1">
                Browser
            </Typography>
            <StatPieChart data={browserTop10Data} nameKey="name" dataKey="count" id="browserTop10" />
            <StatPieChart data={es6SupportData} nameKey="name" dataKey="count" id="browserEs6Support" />
            <Typography variant="subtitle1">
                Operating System
            </Typography>
            <StatPieChart data={osTop10Data} nameKey="name" dataKey="count" id="osTop10" />
         </Stats>
    );
}