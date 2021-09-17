import React, { useState } from "react";

import { Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles'; 
import { useMediaQuery } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import moment from "moment";

import Stats from "./Stats";
import StatPieChart from "./Piechart";

import { COLORS, dateFormatter, countFormatter } from "../util/charts";

const VERSION_COUNT = 10;

export default function InstanceStats(props) {
    const [ instancesData, setInstancesData ] = useState([]);
    const [ versionsData, setVersionsData ] = useState([]);
    const [ py2VersionsData, setPy2VersionsData ] = useState([]);
    const [ py3VersionsData, setPy3VersionsData ] = useState([]);
    const [ py2vs3Data, setPy2vs3Data ] = useState([]);

    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    const onData = (d) => {
        let versions = [];
        const otherVersions = {
            version: "Others",
            count: 0
        };
        let py2 = 0;
        let py3 = 0;
        let py2Versions = [];
        let py3Versions = [];
        const otherPy2Versions = {
            version: "Others",
            count: 0
        };
        const otherPy3Versions = {
            version: "Others",
            count: 0
        };

        for (const version in d.versions) {
            if (versions.length < VERSION_COUNT - 1) {
                versions.push({
                    version: version,
                    count: d.versions[version].instances
                });
            } else {
                otherVersions.count += d.versions[version].instances;
            }

            if (version.startsWith("2.")) {
                py2 += d.versions[version].instances;
                if (py2Versions.length < VERSION_COUNT - 1) {
                    py2Versions.push({
                        version: version,
                        count: d.versions[version].instances
                    });
                } else {
                    otherPy2Versions.count += d.versions[version].instances;
                }
            } else if (version.startsWith("3.")) {
                py3 += d.versions[version].instances;
                if (py3Versions.length < VERSION_COUNT - 1) {
                    py3Versions.push({
                        version: version,
                        count: d.versions[version].instances
                    });
                } else {
                    otherPy3Versions.count += d.versions[version].instances;
                }
            }
        };
        if (otherVersions.count > 0) {
            versions.push(otherVersions);
        }
        if (py2Versions.length > 0) {
            py2Versions.push(otherPy2Versions);
        }
        if (py3Versions.length > 0) {
            py3Versions.push(otherPy3Versions);
        }

        let instances = [];
        for (const entry of d.histogram.slice(1, -1)) {
            const start = moment(entry.start).valueOf();
            instances.push({
                start: start,
                python2: entry.python2,
                python3: entry.python3,
            });
        }

        setVersionsData(versions);
        setPy2VersionsData(py2Versions);
        setPy3VersionsData(py3Versions);
        setPy2vs3Data([
            {
                version: "Python 2",
                count: py2
            },
            {
                version: "Python 3",
                count: py3
            }
        ]);
        setInstancesData(instances);
    }

    const instanceTooltipLabelFormatter = (label) => {
        return dateFormatter(label);
    }

    const instanceTooltipFormatter = (value, name, props) => {
        return [countFormatter(value), name];
    }

    return (
        <Stats title={`Python stats (past ${props.days} days)`} stats={`python_stats_${props.days}d.json`} onData={onData}>
            <Typography variant="subtitle1">
                Python 2 vs 3
            </Typography>

            <Grid container>
                <Grid item xs={12} md={5}>
                    <StatPieChart data={py2vs3Data} nameKey="version" dataKey="count" id="py2vs3" legendBelow />
                </Grid>
                <Grid item xs={12} md={7}>
                    <ResponsiveContainer width="100%" aspect={isSmallScreen ? 1 : 1.78}>
                        <LineChart width={400} height={400} data={instancesData}>
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
                            <Line dataKey="python2" dot={false} strokeWidth={2} stroke={COLORS[0]} name="Python 2" />
                            <Line dataKey="python3" dot={false} strokeWidth={2} stroke={COLORS[1]} name="Python 3" />
                        </LineChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>

            <Typography variant="subtitle1">
                Python version distribution
            </Typography>

            <StatPieChart data={versionsData} nameKey="version" dataKey="count" id="pythonVersions" />

            <Typography variant="subtitle1">
                Individual Python version distribution for 2.x and 3.x
            </Typography>

            <Grid container>
                <Grid item xs={12} md={6}>
                    <StatPieChart data={py2VersionsData} nameKey="version" dataKey="count" id="python2Versions" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StatPieChart data={py3VersionsData} nameKey="version" dataKey="count" id="python3Versions" />
                </Grid>
            </Grid>
        </Stats>
    );
}