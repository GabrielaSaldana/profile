import React, { Suspense, lazy } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import theme from "./theme";
import routes from "./routes/routes";
import Persona from "./components/Persona";
import Index from "./components/Index";
import ProfileImage from "./components/ProfileImage";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

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
  },
  toolBar: {
    minHeight: theme.spacing(1)
  },
  back: {
    width: 235,
    padding: "2rem"
  }
}));

const SideBar = ({ classes }) => {
  let location = useLocation();
  const { pathname } = location;
  if (pathname.includes("projects")) {
    return (
      <div className={classes.back}>
        <ArrowBackOutlinedIcon fontSize="large" />
      </div>
    );
  } else {
    return (
      <div className={classes.paper}>
        <ProfileImage />
        <Index />
        <Persona />
      </div>
    );
  }
};

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Router basename="/">
        <div className={classes.root}>
          <Suspense fallback={<CircularProgress />}>
            <Grid container>
              <Grid item xs={2} className={classes.stickyMenu}>
                <SideBar classes={classes} />
              </Grid>
              <Grid item xs={10} className={classes.scrollableSide}>
                <Switch>
                  <Route
                    path={routes.projectDetail({ projectId: ":projectId" })}
                    exact
                    component={ProjectDetail}
                  />
                  <Route path={routes.home()} component={Main} />
                </Switch>
              </Grid>
              <ScrollToTop />
            </Grid>
          </Suspense>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
