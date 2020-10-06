import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    padding: theme.spacing(5), // This padding is used to separate teh nav-bar from the content
    textAlign: "justify",
    marginBottom: theme.spacing(6),
  },
  image: {
    width: "60%",
  },
  paper: {
    padding: theme.spacing(1),
  },
  textBox: {
    height: "fit-content",
    margin: theme.spacing(1),
    fontSize: "1.2rem",
  },
  gradient: {
    borderWidth: "3px",
    borderStyle: "solid",
    borderImage: "linear-gradient(to bottom, orange, rgba(0, 0, 0, 0)) 1 100%",
  },
  subTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <div className={classes.subTitle}>
        <Typography variant="h1">I define myself as...</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className={classes.paper}>
            <Typography className={classes.textBox}>
              Japanese culture and ramen lover!
            </Typography>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <span
                  role="img"
                  aria-label="ramen"
                  style={{ fontSize: "5rem" }}
                >
                  🍜
                </span>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className={classes.paper}>
            <Typography className={classes.textBox}>
              Curiosity is my second name
            </Typography>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <span
                  role="img"
                  aria-label="curious"
                  style={{ fontSize: "5rem" }}
                >
                  🚀
                </span>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <div className={classes.paper}>
            <Typography className={classes.textBox}>
              Nature lover, I have lots of plants
            </Typography>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <span
                  role="img"
                  aria-label="curious"
                  style={{ fontSize: "5rem" }}
                >
                  🌱
                </span>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
