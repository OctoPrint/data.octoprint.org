import React, { useState } from "react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import moment from "moment";

import GraphHeader from "./GraphHeader";
import Stats from "./Stats";

import { COLORS, dateFormatter, durationFormatter } from "../util/charts";
import {useDays} from "./DaysProvider";

export default function PrintingStats() {
    const [ total, setTotal ] = useState();
    const [ printingData, setPrintingData ] = useState([]);

    const theme = useTheme();
    const {days} = useDays()

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

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
        <Stats title={`Printing stats (past ${days} days)`} stats={`printing_stats_${days}d.json`} anchor="printing" onData={onData}>
            <p>Total duration of all prints: {moment.duration(total * 1000).humanize()}</p>

            <GraphHeader title="Printing duration per hour" anchor="printing_per_hour" />

            <ResponsiveContainer width="100%" aspect={isSmallScreen ? 1 : 1.78}>
                <AreaChart data={printingData}>
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
                        tickFormatter={durationFormatter}
                        axisLine={{stroke: theme.palette.text.secondary}}
                        tickLine={{stroke: theme.palette.text.secondary}}
                        tick={{fill: theme.palette.text.secondary}}
                    />
                    <Tooltip 
                        labelFormatter={histogramTooltipLabelFormatter} 
                        formatter={histogramTooltipFormatter} 
                        contentStyle={{"backgroundColor": theme.palette.background.paper, "color": theme.palette.text.primary}}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="count" stroke={COLORS[0]} fillOpacity={1} fill="url(#printingGradient)" name="Printing Duration" />
                </AreaChart>
            </ResponsiveContainer>
        </Stats>
    );
}