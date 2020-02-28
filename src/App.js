import React, { Suspense, lazy } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import theme from "./theme";
import { Link } from "react-router-dom";
import routes from "./routes/routes";
import Index from "./components/Index";
import ProfileImage from "./components/ProfileImage";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

const ProjectDetail = lazy(() => import("./components/ProjectDetail"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

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
    [theme.breakpoints.up("md")]: {
      position: "fixed"
    },
    height: "100%",
    backgroundColor: "#F2F3F7"
  },
  scrollableSide: {
    [theme.breakpoints.between("lg", "xl")]: {
      marginLeft: "14%"
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: "25%"
    }
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
    padding: "2rem"
  },
  backlink: {
    color: "#9575cd",
    "&:hover": {
      color: "#00e676"
    }
  }
}));

const SideBar = ({ classes }) => {
  let location = useLocation();
  const { pathname } = location;
  if (pathname.includes("projects/")) {
    return (
      <div className={classes.back}>
        <Link className={classes.backlink} to={routes.projects()}>
          <ArrowBackOutlinedIcon fontSize="large" />
        </Link>
      </div>
    );
  } else {
    return (
      <div className={classes.paper}>
        <ProfileImage />
        <Index />
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
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                lg={2}
                xl={2}
                className={classes.stickyMenu}
              >
                <SideBar classes={classes} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={9}
                lg={10}
                xl={10}
                className={classes.scrollableSide}
              >
                <Switch>
                  <Route
                    path={routes.projectDetail({ projectId: ":projectId" })}
                    exact
                    component={ProjectDetail}
                  />
                  <Route exact path={routes.contact()} component={Contact} />
                  <Route exact path={routes.projects()} component={Projects} />
                  <Route path={routes.home()} component={About} />
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
