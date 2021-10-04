import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {styled} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import DarkModeToggle from "./components/DarkModeToggle";
import DaysToggle from "./components/DaysToggle";
import InstanceStats from "./components/InstanceStats";
import PrintingStats from "./components/PrintingStats";
import PythonStats from "./components/PythonStats";
import ServerStats from "./components/ServerStats";
import ClientStats from "./components/ClientStats";
import FirmwareStats from "./components/FirmwareStats";
import useLocalStorage from "./hooks/useLocalStorage";
import DaysProvider from "./components/DaysProvider";

// We have a sticky AppBar, so offset the content by using the CSS applied to the toolbar
const Offset = styled('div')(({theme})=> theme.mixins.toolbar)

export default function App(props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useLocalStorage("enableDarkMode", prefersDarkMode);

    const palette = darkMode ? "dark" : "light";
    const darkModeTheme = createTheme({
        palette: {
            mode: palette
        }
    })

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    }

    return (

        <ThemeProvider theme={darkModeTheme}>
            <DaysProvider>
                <Main darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
            </DaysProvider>
        </ThemeProvider>
    );
}

function Main ({darkMode, handleDarkModeToggle}) {
    const Navbar = () => {
        return (
            <AppBar>
                <Toolbar sx={{flexWrap: 'wrap'}}>
                    <Box display={"flex"} flexGrow={1}>
                        data.octoprint.org
                    </Box>
                    <DaysToggle />
                    <DarkModeToggle darkMode={darkMode} onChange={handleDarkModeToggle} />
                </Toolbar>
            </AppBar>
        )
    }

    return (
        <>
            <CssBaseline />
            <Navbar />
            <Offset />
            <Container component={"main"} maxWidth="lg" sx={{mt: {lg: 4}, mb: 4, "& > *": {my: 2}}}>
                <InstanceStats />
                <PrintingStats />
                <PythonStats />
                <ServerStats />
                <ClientStats />
                <FirmwareStats />
            </Container>
            <Box component={"footer"} sx={{textAlign: "center", p: "1em"}}>
                © 2021 <Link href="https://octoprint.org" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">OctoPrint</Link> &middot; <Link href="https://octoprint.org/imprint/" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">Imprint</Link> &middot; <Link href="https://octoprint.org/privacy/" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">Privacy Policy</Link><br />
                Based on tracking data from the Anonymous Usage Tracking plugin, refer to <Link href="https://tracking.octoprint.org" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">tracking.octoprint.org</Link> for details.
            </Box>
        </>
    )
}
