import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { adaptV4Theme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
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
import {DaysProvider} from "./components/DaysProvider";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        overflow: "auto"
    },
    grow: {
      flexGrow: 1
    },

    appBar: {
    },
    toolbar: {
      [theme.breakpoints.down('lg')]: {
        "justify-content": "flex-end",
        "flex-wrap": "wrap",
      }
    },
    urlbar: {
      flexGrow: 1,
      [theme.breakpoints.down('lg')]: {
        "flex-basis": "100%",
        order: 99,
        paddingBottom: theme.spacing(2)
      },
    },
    title: {
      "justify-item": "left",
    },

    offset: theme.mixins.toolbar,

    content: {
      //flexGrow: 1,
      "padding-top": theme.mixins.toolbar.minHeight,
      [theme.breakpoints.down('lg')]: {
        "padding-top": theme.mixins.toolbar.minHeight * 2,
      }
    },
    container: {
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down('lg')]: {
        paddingTop: 0,
      },
      paddingBottom: theme.spacing(4),
      flexGrow: 1,
      "& > *": {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
    },
    footer: {
      textAlign: "center",
      padding: "1em",
    }
}));

export default function App(props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useLocalStorage("enableDarkMode", prefersDarkMode);

    const palette = darkMode ? "dark" : "light";
    const darkModeTheme = createTheme(adaptV4Theme({
        palette: {
            mode: palette
        }
    }));

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    }

    return (
        <StyledEngineProvider injectFirst>
            {/* StyledEngineProvider can be removed once we remove @mui/styles / JSS */}
            <ThemeProvider theme={darkModeTheme}>
                <DaysProvider>
                    <Main darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
                </DaysProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

function Main ({darkMode, handleDarkModeToggle}) {
    const classes = useStyles();

    const Navbar = () => {
        return (
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.grow}>
                        data.octoprint.org
                    </div>
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
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <InstanceStats />
                    <PrintingStats />
                    <PythonStats />
                    <ServerStats />
                    <ClientStats />
                    <FirmwareStats />
                </Container>
            </main>
            <footer className={classes.footer}>
                © 2021 <Link href="https://octoprint.org" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">OctoPrint</Link> &middot; <Link href="https://octoprint.org/imprint/" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">Imprint</Link> &middot; <Link href="https://octoprint.org/privacy/" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">Privacy Policy</Link><br />
                Based on tracking data from the Anonymous Usage Tracking plugin, refer to <Link href="https://tracking.octoprint.org" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">tracking.octoprint.org</Link> for details.

            </footer>
        </>
    )
}
