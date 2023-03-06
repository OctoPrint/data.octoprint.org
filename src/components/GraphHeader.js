import React from "react";

import { Typography, styled } from "@mui/material";

const OffsetLink = styled('a')(({theme}) => {
    const offset = theme.mixins.toolbar.minHeight + 16;
    return {
        display: "block",
        position: "relative",
        top: `-${offset}px`,
        visibility: "hidden"
    }
});
const AnchorLink = styled('a')(({theme}) => {
    return {
        color: theme.palette.text.secondary,
        textDecoration: "none",
    }
});

export default function GraphHeader(props) {

    return (
        <Typography variant="subtitle1">
            <OffsetLink id={props.anchor}></OffsetLink>
            {props.title} <AnchorLink href={`#${props.anchor}`}>#</AnchorLink>
        </Typography>
    );
}