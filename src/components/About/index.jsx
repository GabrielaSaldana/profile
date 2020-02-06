import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Naruto from "../../images/naruto.jpg";
import Systems from "../../images/systems.jpg";
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
  textImage: {
    width: "100%",
    marginTop: theme.spacing(2)
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div id="about" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography>
            Many people know my addiction to anime, the japanese culture amaze
            me, the order they have, teh automation they have in their public
            services and their loyalty to their culture.
          </Typography>
          <img src={Naruto} className={classes.textImage} alt="Naruto" />
        </Grid>
        <Grid item xs={4}>
          <Typography>
            I'm a Software Engineer by alma mater, but curious enough to be
            interested in design, management, processes and the Software
            environment as a whole. I'm amazed by the progress we as a human
            species have mad so far in the recent years.
          </Typography>
          <img src={Systems} className={classes.textImage} alt="Systems" />
        </Grid>
        <Grid item xs={4}>
          <Typography>
            If you can take care of a plant, then, you can take care of
            yourself. My hobby is to raise my plants.
          </Typography>
          <img src={Plants} className={classes.textImage} alt="Plants" />
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
