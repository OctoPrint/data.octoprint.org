import React, { useState } from "react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import moment from "moment";
import millify from "millify";

import Stats from "./Stats";
import StatPieChart from "./Piechart";

import { COLORS, dateFormatter, countFormatter, asPercentage } from "../util/charts";

const VERSION_COUNT = 10;

export default function InstanceStats(props) {
    const [ count, setCount ] = useState();
    const [ instancesData, setInstancesData ] = useState([]);
    const [ versionsData, setVersionsData ] = useState([]);

    const theme = useTheme();

    const onData = (d) => {
        let versions = [];
        const otherVersions = {
            version: "Others",
            count: 0
        };
        for (const version in d.versions) {
            if (versions.length < VERSION_COUNT - 1) {
                versions.push({
                    version: version,
                    count: d.versions[version]
                });
            } else {
                otherVersions.count += d.versions[version];
            }
        };
        versions.push(otherVersions);

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
    }

    const instanceTooltipLabelFormatter = (label) => {
        return dateFormatter(label);
    }

    const instanceTooltipFormatter = (value, name, props) => {
        return [countFormatter(value), name];
    }

    const versionLabelRenderer = (props) => {
        const {x, y, fill, textAnchor, name, percent} = props;
        const percentage = asPercentage(percent);
        return (
            <text x={x} y={y} fill={fill} alignmentBaseline="middle" textAnchor={textAnchor}>{name} ({percentage}%)</text>
        );
    }

    const versionLegendFormatter = (v, entry, index) => {
        const {value, name, percent} = entry.payload;
        const percentage = asPercentage(percent);
        return `${name}: ${percentage}% (${millify(value)})`;
    }

    const versionTooltipFormatter = (value, name, props) => {
        return [countFormatter(value), name];
    }

    return (
        <Stats title={`Instance stats (past ${props.days} days)`} stats={`instance_stats_${props.days}d.json`} onData={onData}>
            <p>Unique instances: {count}</p>

            <Typography variant="subtitle1">
                Unique instances per hour
            </Typography>

            <ResponsiveContainer height={400}>
                <AreaChart height={400} data={instancesData}>
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
                        label={{ value: "Instances", angle: -90, position: "insideLeft", fill: theme.palette.text.secondary }}
                        tickFormatter={countFormatter}
                        axisLine={{stroke: theme.palette.text.secondary}}
                        tickLine={{stroke: theme.palette.text.secondary}}
                        tick={{fill: theme.palette.text.secondary}}
                    />
                    <Tooltip 
                        labelFormatter={instanceTooltipLabelFormatter} 
                        formatter={instanceTooltipFormatter} 
                        contentStyle={{"background-color": theme.palette.background.paper, "color": theme.palette.text.primary}}
                    />
                    <Legend verticalAlign="top" />
                    <Area type="monotone" dataKey="count" stroke={COLORS[0]} fillOpacity={1} fill="url(#instanceGradient)" name="Instances" />
                </AreaChart>
            </ResponsiveContainer>

            <Typography variant="subtitle1">
                OctoPrint version distribution
            </Typography>

            <StatPieChart data={versionsData} nameKey="version" dataKey="count" id="octoprintVersions" />
        </Stats>
    );
}