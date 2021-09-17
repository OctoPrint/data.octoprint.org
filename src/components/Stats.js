import React, { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import fetchStats from "../util/data";
import { Typography } from "@mui/material";

export default function Stats(props) {
    const [ loading, setLoading ] = useState(true);
    const [ since, setSince ] = useState();
    const [ lastUpdate, setLastUpdate ] = useState();

    useEffect(() => {
        fetchStats(props.stats).then((data) => {
            setSince(data._since);
            setLastUpdate(data._generated);
            props.onData(data);
            setLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.stats]);

    const Content = () => {
        if (loading) {
            return (
                <div style={{ display: "flex", justifyContent: "center", }}>
                    <CircularProgress />
                </div>
            )
        } else {
            return (
                <>
                    {props.children}
                    <Typography variant="caption">Based on usage data from {since} until {lastUpdate}</Typography>
                </>
            )
        }
    }

    return (
        <Card style={{}}>
            <CardHeader title={props.title} />
            <CardContent>
                <Content />
            </CardContent>
        </Card>
    );
}