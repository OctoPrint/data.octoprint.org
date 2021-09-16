import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

import Stats from "./Stats";
import StatPieChart from "./Piechart";

const FW_COUNT = 10;

export default function InstanceStats(props) {
    const [ firmwareTop10Data, setFirmwareTop10Data ] = useState([]);
    const [ notableFirmwareData, setNotableFirmwareData ] = useState([]);

    const onData = (d) => {
        let firmwareTop10 = [];
        const otherFw = {
            name: "Other",
            count: 0
        };

        const notable = [
            {
                name: "Prusa Marlin",
                matcher: name => name.startsWith("Prusa-Firmware"),
                count: 0
            },
            {
                name: "Creality Marlin",
                matcher: name => name.indexOf("Creality") !== -1,
                count: 0
            },
            {
                name: "TH3D Marlin",
                matcher: name => name.indexOf("TH3D") !== -1,
                count: 0
            },
            {
                name: "Marlin",
                matcher: name => name.startsWith("Marlin"),
                count: 0
            },
            {
                name: "Klipper",
                matcher: name => name.startsWith("Klipper"),
                count: 0
            },
            {
                name: "Repetier",
                matcher: name => name.startsWith("Repetier"),
                count: 0
            },
            {
                name: "Smoothieware",
                matcher: name => name.startsWith("Smoothieware"),
                count: 0
            },
            {
                name: "RepRapFirmware",
                matcher: name => name.startsWith("RepRapFirmware"),
                count: 0
            },
            {
                name: "Sailfish",
                matcher: name => name.startsWith("Sailfish"),
                count: 0
            },
            {
                name: "Malyan",
                matcher: name => name.startsWith("Malyan"),
                count: 0
            }, 
            {
                name: "ANET A8",
                matcher: name => name.startsWith("ANET_A8"),
                count: 0
            }, 
        ];
         
        for (const fw in d.names) {
            if (firmwareTop10.length < FW_COUNT - 1) {
                firmwareTop10.push({
                    name: fw,
                    count: d.names[fw].instances,
                });
            }
            for (const n of notable) {
                if (n.matcher(fw)) {
                    n.count += d.names[fw].instances;
                    break;
                }
            }
        }
        if (otherFw.count > 0) {
            firmwareTop10.push(otherFw);
        }

        notable.sort((a, b) => b.count - a.count);

        setFirmwareTop10Data(firmwareTop10);
        setNotableFirmwareData(notable);
    }

    return (
        <Stats title={`Firmware stats (past ${props.days} days)`} stats={`firmware_stats_${props.days}d.json`} onData={onData}>
            <Typography variant="subtitle1">
                Firmware top 10
            </Typography>
            <StatPieChart data={firmwareTop10Data} nameKey="name" dataKey="count" id="firmwareTop10" />
            <Typography variant="subtitle1">
                Notable firmware groups
            </Typography>
            <StatPieChart data={notableFirmwareData} nameKey="name" dataKey="count" id="notableFirmware" />
         </Stats>
    );
}