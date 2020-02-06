import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Naruto from "../../images/naruto.jpg";
import Systems from "../../images/systems.png";
import Plants from "../../images/plants.png";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    borderTop: "1px solid",
    borderTopColor: theme.extendedPalette.yellowContrast.main,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: "justify"
  },
  image: {
    width: "100%",
    height: "68%",
    borderRadius: "4%",
  },
  paper: {
    padding: theme.spacing(1),
    height: theme.spacing(34)
  },
  textBox: {
    height: "30%"
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.textBox}>
              Many people know my addiction to anime, the japanese culture amaze
              me, the order they have, teh automation they have in their public
              services and their loyalty to their culture.
            </Typography>
            <img src={Naruto} className={classes.image} alt="Naruto" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.textBox}>
              I'm a Software Engineer by alma mater, but curious enough to be
              interested in design, management, processes and the Software
              environment as a whole.
            </Typography>
            <img src={Systems} className={classes.image} alt="Systems" />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.textBox}>
              If you can take care of a plant, then, you can take care of
              yourself. My hobby is to raise my plants.
            </Typography>
            <img src={Plants} className={classes.image} alt="Plants" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
