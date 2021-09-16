import React, { useState } from "react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import moment from "moment";

import Stats from "./Stats";

import { COLORS, dateFormatter, durationFormatter } from "../util/charts";

export default function PrintingStats(props) {
    const [ total, setTotal ] = useState();
    const [ printingData, setPrintingData ] = useState([]);

    const theme = useTheme();

    const onData = (d) => {
        let totals = [];
        for (const entry of d.histogram.slice(1, -1)) {
            const start = moment(entry.start).valueOf();
            totals.push({
                start: start,
                count: entry.count
            });
        }

        setTotal(d.total);
        setPrintingData(totals);
    }

    const histogramTooltipLabelFormatter = (label) => {
        return dateFormatter(label);
    }

    const histogramTooltipFormatter = (value, name, props) => {
        return [durationFormatter(value), name];
    }

    return (
        <Stats title={`Printing stats (past ${props.days} days)`} stats={`printing_stats_${props.days}d.json`} onData={onData}>
            <p>Total duration: {moment.duration(total * 1000).humanize()}</p>

            <Typography variant="subtitle1">
                Printing duration per hour
            </Typography>

            <ResponsiveContainer height={400}>
                <AreaChart height={400} data={printingData}>
                    <defs>
                        <linearGradient id="printingGradient" x1="0" y1="0" x2="0" y2="1">
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
                        tickFormatter={durationFormatter}
                        axisLine={{stroke: theme.palette.text.secondary}}
                        tickLine={{stroke: theme.palette.text.secondary}}
                        tick={{fill: theme.palette.text.secondary}}
                    />
                    <Tooltip 
                        labelFormatter={histogramTooltipLabelFormatter} 
                        formatter={histogramTooltipFormatter} 
                        contentStyle={{"background-color": theme.palette.background.paper, "color": theme.palette.text.primary}}
                    />
                    <Legend verticalAlign="top" />
                    <Area type="monotone" dataKey="count" stroke={COLORS[0]} fillOpacity={1} fill="url(#printingGradient)" name="Printing Duration" />
                </AreaChart>
            </ResponsiveContainer>
        </Stats>
    );
}