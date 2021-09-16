import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import DarkModeToggle from "./components/DarkModeToggle";
import DaysToggle from "./components/DaysToggle";
import InstanceStats from "./components/InstanceStats";
import PrintingStats from "./components/PrintingStats";
import PythonStats from "./components/PythonStats";
import FirmwareStats from "./components/FirmwareStats";
import ClientStats from "./components/ClientStats";

import useLocalStorage from "./hooks/useLocalStorage";

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
      [theme.breakpoints.down('md')]: {
        "justify-content": "flex-end",
        "flex-wrap": "wrap",
      }
    },
    urlbar: {
      flexGrow: 1,
      [theme.breakpoints.down('md')]: {
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
      [theme.breakpoints.down('md')]: {
        "padding-top": theme.mixins.toolbar.minHeight * 2,
      }
    },
    container: {
      paddingTop: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
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
    const [days, setDays] = useLocalStorage("days", 30);

    const palette = darkMode ? "dark" : "light";
    const darkModeTheme = createMuiTheme({
        palette: {
            type: palette
        }
    });

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    }

    const handleDaysToggle = () => {
        setDays(days === 7 ? 30 : 7);
    }

    const classes = useStyles();

    const Navbar = () => {
      return (
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
              <div className={classes.grow}>
                data.octoprint.org
              </div>
              <DaysToggle days={days} onChange={handleDaysToggle} />
              <DarkModeToggle darkMode={darkMode} onChange={handleDarkModeToggle} />
          </Toolbar>
        </AppBar>
      )
    }

    return (
        <ThemeProvider theme={darkModeTheme}>
          <div className={classes.root} style={{display: "flex", minHeight: "100vh", flexDirection: "column"}}>
              <CssBaseline />
              <Navbar />
              <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                  <InstanceStats days={days} />
                  <PrintingStats days={days} />
                  <PythonStats days={days} />
                  <FirmwareStats days={days} />
                  <ClientStats days={days} />
                </Container>
              </main>
              <footer className={classes.footer}>
                © 2021 <Link href="https://octoprint.org" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">OctoPrint</Link> &middot; <Link href="https://octoprint.org/imprint/" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">Imprint</Link> &middot; <Link href="https://octoprint.org/privacy/" target="_blank" rel="noreferrer noopener" color="inherit" underline="always">Privacy Policy</Link>
              </footer>
          </div>
        </ThemeProvider>
    )
}
