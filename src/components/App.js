import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Route, Switch, MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";

import Home from "./Home";
import Asthma from "./Asthma";
import ChildhoodLead from "./ChildhoodLead";

import ErrorPage from "./ErrorPage";

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            MDH EPHT
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          <BrowserRouter>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" href="/" onClick={""}>
                Childhood Lead
              </Link>
              <Link
                color="inherit"
                href="/getting-started/installation/"
                onClick={""}
              >
                Testing Rates
              </Link>
              <Typography color="textPrimary">Breadcrumb</Typography>
            </Breadcrumbs>

            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path={`/asthma`} exact={true} component={Asthma} />
              <Route path={`/lead`} exact={true} component={ChildhoodLead} />
              <Route
                path={`/:lead/file`}
                render={(props) => <ChildhoodLead {...props} type="file" />}
                exact={true}
              />
              <Route
                render={() => (
                  <Grid item xs={12} justify="center" className={classes.paper}>
                    Sorry... nothing here.
                  </Grid>
                )}
              />
            </Switch>
          </BrowserRouter>
        </Grid>
      </main>
    </React.Fragment>
  );
}

export { App };

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    height: "3rem",
    padding: "0.5rem"
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    // content which is class of main needs to be flex and column direction
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  fixedHeight: {
    height: 240
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

/* eslint
"no-unused-vars": [
  "warn",
  {
    "argsIgnorePattern": "^_.+|^ignore.+",
    "varsIgnorePattern": "^_.+|^ignore.+",
    "args": "after-used"
  }
]
 */
