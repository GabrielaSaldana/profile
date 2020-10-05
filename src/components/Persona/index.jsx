import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    padding: theme.spacing(5), // This padding is used to separate teh nav-bar from the content
  },
  description: {
    textAlign: "justify",
    fontSize: "1.1rem",
  },
  titleBox: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: "5rem",
    },
    fontSize: "2rem",
  },
  subtitle: {
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    fontSize: "1.2rem",
    fontStyle: "italic",
  },
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
        <b style={{ color: "#ff9100" }}>
          I’m passionate about knowledge in all forms
        </b>
        , especially when you combine technology and human behaviors. I like to
        design the way people and technology interact improving their daily
        experiences. I'm such an inquisitive and friendly person that wants to
        help people by collecting ideas from everything around me.
      </Typography>
      <Typography gutterBottom className={classes.description}>
        My daily work includes empathy, strategy, logic, and common sense and
        willingness to help people get their goals. I have a background in
        software engineering but I've been actively seeking new roles in my
        life.
      </Typography>
    </div>
  );
}

export default Persona;
