import React from "react";

import { useTheme } from "@material-ui/core/styles";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { COLORS, piechartLegendFormatter, piechartLabelRenderer } from '../util/charts';

export default function Piechart(props) {
    const theme = useTheme();

    const outerRadius = props.half ? 100 : 150;

    return (
        <ResponsiveContainer height={400}>
            <PieChart>
                <Legend layout="vertical" align="right" verticalAlign="top" formatter={piechartLegendFormatter} />
                <Tooltip 
                    contentStyle={{"background-color": theme.palette.background.paper, "color": theme.palette.text.primary}}
                    itemStyle={{ "color": theme.palette.text.primary }}
                />
                <Pie
                    data={props.data}
                    label={piechartLabelRenderer}
                    startAngle={90}
                    endAngle={-270}
                    outerRadius={outerRadius}
                    innerRadius={outerRadius / 2}
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
