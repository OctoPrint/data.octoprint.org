import React from "react";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { COLORS, piechartLegendFormatter, piechartLabelRenderer } from '../util/charts';

export default function Piechart(props) {
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const legendBelow = isSmallScreen || props.legendBelow;

    return (
        <ResponsiveContainer width="100%" aspect={isSmallScreen ? 1 : 1.78}>
            <PieChart>
                {legendBelow ? (
                    <Legend formatter={piechartLegendFormatter} />
                ) : (
                    <Legend layout="vertical" align="right" verticalAlign="top" formatter={piechartLegendFormatter} />
                )}
                <Tooltip 
                    contentStyle={{"backgroundColor": theme.palette.background.paper, "color": theme.palette.text.primary}}
                    itemStyle={{ "color": theme.palette.text.primary }}
                />
                <Pie
                    data={props.data}
                    label={isSmallScreen ? false : piechartLabelRenderer}
                    startAngle={90}
                    endAngle={-270}
                    outerRadius="70%"
                    innerRadius="35%"
                    stroke={theme.palette.background.paper}
                    nameKey={props.nameKey}
                    dataKey={props.dataKey}
                >
                    {props.data.map((entry, index) => (
                        <Cell key={`cell-${props.id}-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
