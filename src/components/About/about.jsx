import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Bamboo from "../../images/bamboo.png";
import Terrace from "../../images/terrace.png";
import Plant from "../../images/plant.png";
import Naruto from "../../images/naruto.png";
import Ninja from "../../images/ninja.png";
import Ramen from "../../images/ramen.png";
import Worldwide from "../../images/planet.png";
import Data from "../../images/data.png";
import Execution from "../../images/execution.png";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    textAlign: "justify",
    marginBottom: theme.spacing(6)
  },
  image: {
    width: "60%"
  },
  paper: {
    padding: theme.spacing(1)
  },
  textBox: {
    height: "fit-content",
    margin: theme.spacing(1),
    fontSize: "1rem",
  },
  gradient: {
    borderWidth: "3px",
    borderStyle: "solid",
    borderImage: "linear-gradient(to bottom, orange, rgba(0, 0, 0, 0)) 1 100%"
  },
  subTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.extendedPalette.pinkContrast.main
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <div className={classes.subTitle}>
        <Typography variant="h1">WHAT I LIKE</Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.textBox}>
              Few people know about my addiction to anime, the japanese culture
              amaze me, the automation they have in their public services and
              their loyalty.
            </Typography>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img src={Naruto} className={classes.image} alt="naruto" />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img src={Ninja} className={classes.image} alt="ninja" />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img src={Ramen} className={classes.image} alt="ramen" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.textBox}>
              I'm a Software Engineer by alma mater, but curious enough to be
              interested in design, management, processes and the Software
              Systems as a whole.
            </Typography>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img
                  src={Execution}
                  className={classes.image}
                  alt="execution"
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img src={Data} className={classes.image} alt="data" />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img
                  src={Worldwide}
                  className={classes.image}
                  alt="worldwide"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.textBox}>
              If you can take care of a plant, you can take care of yourself. My
              hobby is to raise my plants. If you want one I'll be glad of give
              it to you, just email me .
            </Typography>
            <Grid container style={{ alignItems: "center" }}>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img src={Bamboo} className={classes.image} alt="bamboo" />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img src={Plant} className={classes.image} alt="plant" />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <img src={Terrace} className={classes.image} alt="terrace" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
