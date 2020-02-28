import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(6)
  },
  description: {
    textAlign: "justify",
    padding: theme.spacing(1),
    fontSize: "1.1rem",
  },
  subTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.extendedPalette.pinkContrast.main
  }
}));

function Persona() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.subTitle}>
        <Typography variant="h1">Gabriela Saldaña Aguilar</Typography>
        <Typography>
          Bachelor of Science degree in Computer Systems Engineering from ESCOM
          - Instituto Politecnico Nacional
        </Typography>
      </div>
      <Typography gutterBottom className={classes.description}>
        I’m passionate about design in all forms, specially when you combine
        technology and persons. I like to design the way people and technology
        interact improving their daily experiences. I'm such a inquisitive and
        friendly person that wants to help people by collecting ideas from
        everything around me, understanding their culture, pain points,
        happiness and traditions wherever I am. My daily work includes empathy,
        strategy, common sense and willness to help people get their goals.
      </Typography>
      <Typography gutterBottom className={classes.description}>
        I'm just a problem solver who likes knowing the big picture,holistic
        is the only way to be inclusive from our own perspective.
        </Typography>
    </div>
  );
}

export default Persona;
