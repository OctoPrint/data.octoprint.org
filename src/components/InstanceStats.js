import React, { useState } from "react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Typography, Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import moment from "moment";

import Stats from "./Stats";
import StatPieChart from "./Piechart";

import { COLORS, dateFormatter, countFormatter } from "../util/charts";

const VERSION_COUNT = 10;

export default function InstanceStats(props) {
    const [ count, setCount ] = useState();
    const [ instancesData, setInstancesData ] = useState([]);
    const [ versionsData, setVersionsData ] = useState([]);
    const [ stableVersionsData, setStableVersionsData ] = useState([]);
    const [ rcVersionsData, setRcVersionsData ] = useState([]);

    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const onData = (d) => {
        let versions = [];
        let stableVersions = [];
        let rcVersions = [];
        const otherVersions = {
            version: "Others",
            count: 0
        };
        const otherStableVersions = {
            version: "Others",
            count: 0
        };;
        const otherRcVersions = {
            version: "Others",
            count: 0
        };;
        for (const version in d.versions) {
            const entry = {
                version: version,
                count: d.versions[version]
            }
            if (versions.length < VERSION_COUNT - 1) {
                versions.push(entry);
            } else {
                otherVersions.count += d.versions[version];
            }

            if (version.includes("rc")) {
                if (rcVersions.length < VERSION_COUNT - 1) {
                    rcVersions.push(entry);
                } else {
                    otherRcVersions.count += d.versions[version];
                }
            } else {
                if (stableVersions.length < VERSION_COUNT - 1) {
                    stableVersions.push(entry);
                } else {
                    otherStableVersions.count += d.versions[version];
                }
            }
        };

        if (otherVersions.count > 0) {
            versions.push(otherVersions);
        }
        if (otherRcVersions.count > 0) {
            rcVersions.push(otherRcVersions);
        }
        if (otherStableVersions.count > 0) {
            stableVersions.push(otherStableVersions);
        }

        let instances = [];
        for (const entry of d.histogram.slice(1, -1)) {
            const start = moment(entry.start).valueOf();
            instances.push({
                start: start,
                count: entry.count
            });
        }

        setCount(d.count);
        setInstancesData(instances);
        setVersionsData(versions);
        setStableVersionsData(stableVersions);
        setRcVersionsData(rcVersions);
    }

    const instanceTooltipLabelFormatter = (label) => {
        return dateFormatter(label);
    }

    const instanceTooltipFormatter = (value, name, props) => {
        return [countFormatter(value), name];
    }

    return (
        <Stats title={`Instance stats (past ${props.days} days)`} stats={`instance_stats_${props.days}d.json`} onData={onData}>
            <p>Total unique instances: {count}</p>

            <Typography variant="subtitle1">
                Unique instances per hour
            </Typography>

            <ResponsiveContainer width="100%" aspect={isSmallScreen ? 1 : 1.78}>
                <AreaChart data={instancesData}>
                    <defs>
                        <linearGradient id="instanceGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={COLORS[0]} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={COLORS[0]} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDashArray="3 3" />
                    <XAxis 
                        dataKey="start" 
                        angle="-60" 
                        textAnchor="end"
                        interval="preserveStartAndEnd"
                        domain={["dataMin", "dataMax"]}
                        scale="time" 
                        type="number" 
                        tickFormatter={dateFormatter} 
                        height={150}
                        axisLine={{stroke: theme.palette.text.secondary}}
                        tickLine={{stroke: theme.palette.text.secondary}}
                        tick={{fill: theme.palette.text.secondary}}
                    />
                    <YAxis 
                        tickFormatter={countFormatter}
                        axisLine={{stroke: theme.palette.text.secondary}}
                        tickLine={{stroke: theme.palette.text.secondary}}
                        tick={{fill: theme.palette.text.secondary}}
                    />
                    <Tooltip 
                        labelFormatter={instanceTooltipLabelFormatter} 
                        formatter={instanceTooltipFormatter} 
                        contentStyle={{"backgroundColor": theme.palette.background.paper, "color": theme.palette.text.primary}}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="count" stroke={COLORS[0]} fillOpacity={1} fill="url(#instanceGradient)" name="Instances" />
                </AreaChart>
            </ResponsiveContainer>

            <Typography variant="subtitle1">
                OctoPrint version distribution
            </Typography>

            <StatPieChart data={versionsData} nameKey="version" dataKey="count" id="octoprintVersions" />

            <Typography variant="subtitle2">
                ... stable vs release candidates
            </Typography>

            <Grid container>
                <Grid item xs={12} md={6}>
                    <StatPieChart data={stableVersionsData} nameKey="version" dataKey="count" id="octoprintStableVersions" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StatPieChart data={rcVersionsData} nameKey="version" dataKey="count" id="octoprintRcVersions" />
                </Grid>
            </Grid>

        </Stats>
    );
}