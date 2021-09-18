import React from "react";

import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import {useDays} from "./DaysProvider";

export default function DaysToggle() {
    const {days, setDays} = useDays()

    const handleDaysToggle = () => {
        const newDays = days === 7 ? 30 : 7;
        setDays(newDays);
    };

    return (
        <Tooltip title="Switch between 30 and 7 days view">
            <Button color="inherit" onClick={handleDaysToggle}>{days === 30 ? "Switch to 7 days" : "Switch to 30 days"}</Button>
        </Tooltip>
    )
}