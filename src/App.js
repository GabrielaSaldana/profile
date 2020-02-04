import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import theme from "./theme";
import About from "./components/About";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Paper className={classes.paper}><About /></Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>xs=9</Paper>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
