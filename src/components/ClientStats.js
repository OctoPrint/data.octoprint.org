import React, { useState } from "react";

import GraphHeader from "./GraphHeader";
import Stats from "./Stats";
import StatPieChart from "./Piechart";
import {useDays} from "./DaysProvider";

const COUNT = 10;

const BROWSER_COMPATIBLE = {
    "Chrome": 55,
    "Chromium": 55,
    "Chrome WebView": 55,
    "Firefox": 54,
    "Edge": 15,
    "Safari": 11,
    "Mobile Safari": 11,
    "Opera": 42,
    "Samsung Browser": 6,
    "QQBrowser": 13,

    // definitely unsupported
    "IE": 1000,
};

export default function ClientStats(props) {
    const [ browserTop10Data, setBrowserTop10Data ] = useState([]);
    const [ osTop10Data, setOsTop10Data ] = useState([]);
    const [ es8SupportData, setEs8SupportData ] = useState([]);

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

        let browserSupported = 0;
        let browserNotSupported = 0;
        let browserSupportUnknown = 0;
        for (const version in d.browser_version) {
            const instances = d.browser_version[version].instances;

            try {
                const [b, v] = version.split("/");
                const v_to_check = v.split(".")[0];
    
                if (!d.browser[b]) {
                    browserSupportUnknown += instances;
                    continue;
                }
    
                if (BROWSER_COMPATIBLE[b] === undefined) {
                    browserSupportUnknown += instances;
                } else if (v_to_check >= BROWSER_COMPATIBLE[b]) {
                    browserSupported += instances;
                } else {
                    browserNotSupported += instances;
                }
            } catch (e) {
                browserSupportUnknown += instances;
            };
        }
        let es8Support = [
            { name: "ES8 supported", count: browserSupported },
            { name: "ES8 unsupported", count: browserNotSupported },
            { name: "Unknown ES8 support", count: browserSupportUnknown }
        ]

        setBrowserTop10Data(browserTop10);
        setOsTop10Data(osTop10);
        setEs8SupportData(es8Support);
    }

    return (
        <Stats title={`Client Environment stats (past ${days} days)`} stats={`client_environment_stats_${days}d.json`} anchor="client" onData={onData}>
            <GraphHeader title="Browser family" anchor="client_browser" />
            <StatPieChart data={browserTop10Data} nameKey="name" dataKey="count" id="browserTop10" />
            <GraphHeader title="Browser ES8 support" anchor="client_es8" />
            <StatPieChart data={es8SupportData} nameKey="name" dataKey="count" />
            <GraphHeader title="Operating system" anchor="client_os" />
            <StatPieChart data={osTop10Data} nameKey="name" dataKey="count" id="osTop10" />
         </Stats>
    );
}