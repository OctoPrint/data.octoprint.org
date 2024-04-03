import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme, createTheme, ThemeProvider} from "@mui/material/styles";
import {styled} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import DarkModeToggle from "./components/DarkModeToggle";
import DaysToggle from "./components/DaysToggle";
import InstanceStats from "./components/InstanceStats";
import PrintingStats from "./components/PrintingStats";
import PythonStats from "./components/PythonStats";
import ServerStats from "./components/ServerStats";
import ClientStats from "./components/ClientStats";
import RPiStats from "./components/RPiStats";
import FirmwareStats from "./components/FirmwareStats";
import AchievementStats from "./components/AchievementStats";

import useLocalStorage from "./hooks/useLocalStorage";
import DaysProvider from "./components/DaysProvider";
import HashScroll from "./components/HashScroll";

// We have a sticky AppBar, so offset the content by using the CSS applied to the toolbar
const Offset = styled("div")(({theme}) => theme.mixins.toolbar);

export default function App(props) {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
        noSsr: true
    });
    const [darkMode, setDarkMode] = useLocalStorage("enableDarkMode", prefersDarkMode);

    const palette = darkMode ? "dark" : "light";
    const darkModeTheme = createTheme({
        palette: {
            mode: palette
        }
    });

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <HashScroll>
            <ThemeProvider theme={darkModeTheme}>
                <DaysProvider>
                    <Main
                        darkMode={darkMode}
                        handleDarkModeToggle={handleDarkModeToggle}
                    />
                </DaysProvider>
            </ThemeProvider>
        </HashScroll>
    );
}

function Main({darkMode, handleDarkModeToggle}) {
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    const year = new Date().getFullYear();

    const NavItems = [
        {name: "Instance Stats", link: "#instances"},
        {name: "Printing Stats", link: "#printing"},
        {name: "Python Stats", link: "#python"},
        {name: "Server Stats", link: "#server"},
        {name: "Client Stats", link: "#client"},
        {name: "RPi Stats", link: "#rpi"},
        {name: "Firmware Stats", link: "#firmware"},
        {name: "Achievement Stats", link: "#achievements"}
    ];

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation">
            <List>
                {NavItems.map((item, index) => (
                    <ListItem key={"drawer-item-" + index} disablePadding>
                        <ListItemButton href={item.link}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const Navbar = () => {
        return (
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar sx={{flexWrap: "wrap"}}>
                    <Box display="flex" flexGrow={1}>
                        {!isSmallScreen ? "data.octoprint.org" : " "}
                    </Box>
                    <DaysToggle />
                    <DarkModeToggle darkMode={darkMode} onChange={handleDarkModeToggle} />
                </Toolbar>
            </AppBar>
        );
    };

    return (
        <>
            <CssBaseline />
            <Navbar />
            {!isSmallScreen && (
                <Drawer variant="permanent">
                    <Offset />
                    {DrawerList}
                </Drawer>
            )}
            <Offset />
            <Container
                component={"main"}
                maxWidth="lg"
                sx={{
                    "mt": {lg: 4},
                    "mb": 4,
                    "& > *": {my: 2}
                }}
            >
                <InstanceStats />
                <PrintingStats />
                <PythonStats />
                <ServerStats />
                <ClientStats />
                <RPiStats />
                <FirmwareStats />
                <AchievementStats />
            </Container>
            <Box component={"footer"} sx={{textAlign: "center", p: "1em"}}>
                © 2021-{year}{" "}
                <Link
                    href="https://octoprint.org"
                    target="_blank"
                    rel="noreferrer noopener"
                    color="inherit"
                    underline="always"
                >
                    OctoPrint
                </Link>{" "}
                &middot;{" "}
                <Link
                    href="https://octoprint.org/imprint/"
                    target="_blank"
                    rel="noreferrer noopener"
                    color="inherit"
                    underline="always"
                >
                    Imprint
                </Link>{" "}
                &middot;{" "}
                <Link
                    href="https://octoprint.org/privacy/"
                    target="_blank"
                    rel="noreferrer noopener"
                    color="inherit"
                    underline="always"
                >
                    Privacy Policy
                </Link>
                <br />
                Based on tracking data from the Anonymous Usage Tracking plugin, refer to{" "}
                <Link
                    href="https://tracking.octoprint.org"
                    target="_blank"
                    rel="noreferrer noopener"
                    color="inherit"
                    underline="always"
                >
                    tracking.octoprint.org
                </Link>{" "}
                for details.
            </Box>
        </>
    );
}
