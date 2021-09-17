import React, { useState } from "react";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

export default function DaysToggle(props) {
    const [days, setDays] = useState(props.days);

    const handleDaysToggle = () => {
        const newDays = days === 7 ? 30 : 7;
        props.onChange(newDays);
        setDays(newDays);
    };

    return (
        <Tooltip title="Switch between 30 and 7 days view">
            <Button color="inherit" onClick={handleDaysToggle}>{days === 30 ? "Switch to 7 days" : "Switch to 30 days"}</Button>
        </Tooltip>
    )
}