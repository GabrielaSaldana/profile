import React, { Suspense, lazy } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import theme from "./theme";
import routes from "./routes/routes";
import Persona from "./components/Persona";
import Index from "./components/Index";
import ProfileImage from "./components/ProfileImage";

const Main = lazy(() => import("./components/Main"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.primary
  },
  upButton: {
    paddingLeft: theme.spacing(1.2)
  },
  stickyMenu: {
    position: "fixed",
    height: "100%",
    backgroundColor: "#F2F3F7"
  },
  scrollableSide: {
    marginLeft: "18%"
  },
  fab: {
    margin: theme.spacing(1)
  },
  linkButton: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "1.5rem"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Router basename="/">
        <div className={classes.root}>
          <Suspense fallback={<CircularProgress />}>
            <Grid container>
              <Grid item xs={2} className={classes.stickyMenu}>
                <div className={classes.paper}>
                  <ProfileImage />
                  <Index />
                  <Persona />
                </div>
              </Grid>
              <Grid item xs={10} className={classes.scrollableSide}>
                <Switch>
                  <Route exact path={routes.home()} component={Main} />
                  <Route
                    path={routes.projectDetail({ projectId: ":projectId" })}
                    component={ProjectDetail}
                  />
                </Switch>
              </Grid>
              <div>
                <Fab
                  color="secondary"
                  aria-label="go to the top"
                  className={classes.fab}
                >
                  <a href="#back-to-top-anchor" className={classes.linkButton}>
                    ^
                  </a>
                </Fab>
              </div>
            </Grid>
          </Suspense>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
