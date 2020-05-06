import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(6),
  },
  description: {
    textAlign: "justify",
    padding: theme.spacing(2),
    fontSize: "1.1rem",
  },
  titleBox: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: "6rem",
    },
    fontSize: "2rem",
  },
  subtitle: {
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    fontSize: "1.2rem"
  }
}));

function Persona() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titleBox}>
        <Typography className={classes.title}>
          Hello, I am Gabriela. I enjoy helping people solving problems of all
          kinds trough my own learning.
          <span role="img" aria-label="nerd">
            🤓
          </span>
        </Typography>
        <Typography className={classes.subtitle}>
          Bachelor of Science degree in Computer Systems Engineering from ESCOM
          - Instituto Politecnico Nacional
        </Typography>
      </div>
      <Typography gutterBottom className={classes.description}>
        <b style={{ color: "#F780AB" }}>
          I’m passionate about knowledge in all forms
        </b>
        , especially when you combine technology and human behaviors. I like to design the way people
        and technology interact improving their daily experiences. I'm such an inquisitive and friendly
        person that wants to help people by collecting ideas from everything around me, understanding
        their culture, pain points, happiness, and traditions wherever I am. My
        daily work includes empathy, strategy, logic, strategy, and common sense
        and willingness to help people get their goals. I have a background in
        software engineering but I've been actively seeking new roles in my
        life.
        <b style={{ color: "#F780AB" }}>
          {" "}
          I'm just a problem solver who likes knowing the big picture, holistic
          is the only way to be inclusive from our own perspective.
        </b>
      </Typography>
    </div>
  );
}

export default Persona;
