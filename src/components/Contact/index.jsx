import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedinOutlineIcon from "../../icons/LinkedinOutlineIcon";
import MediumIcon from "../../icons/MediumIcon";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      padding: "12vh 10vh 10vh 10vh"
    },
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "4vh 1vh 1vh 1vh"
    }
  },
  anchor: {
    color: theme.extendedPalette.purpleContrast.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.extendedPalette.greenContrast.main
    }
  },
  text: {
    wordWrap: "break-word",
    fontSize: "1rem"
  },
  subTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.extendedPalette.pinkContrast.main
  }
}));

function Contact() {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.root}>
      <div>
        <Typography variant="h1" gutterBottom className={classes.subTitle}>
          SAY HELLO
        </Typography>
        <Typography gutterBottom style={{ fontSize: "1rem" }}>
          I really appriciate your time spent on me, if you want to contact me I
          leave you some places where you can find me.
        </Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <IconButton aria-label="Email" color="primary">
            <EmailOutlinedIcon fontSize="large" />
          </IconButton>
          <Typography vriant="h2" className={classes.text}>
            <a
              className={classes.anchor}
              href="mailto:gab.saldana95@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              gab.saldana95@gmail.com
            </a>
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <IconButton aria-label="Linkedin" color="primary">
            <LinkedinOutlineIcon />
          </IconButton>
          <Typography vriant="h3" className={classes.text}>
            <a
              className={classes.anchor}
              href="https://www.linkedin.com/in/gabriela-salda%C3%B1a-92a2b7b4"
            >
              My Linkedin
            </a>
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <IconButton
            className={classes.button}
            aria-label="Linkedin"
            color="primary"
          >
            <TwitterIcon />
          </IconButton>
          <Typography vriant="h4" className={classes.text}>
            <a className={classes.anchor} href="https://twitter.com/GSaldana95">
              GGSaldana
            </a>
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <IconButton aria-label="Medium" color="primary">
            <MediumIcon />
          </IconButton>
          <Typography vriant="h3" className={classes.text}>
            <a
              className={classes.anchor}
              href="https://medium.com/@gab.saldana95"
            >
              My Medium
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
