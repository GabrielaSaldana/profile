import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import LinkedinOutlineIcon from "../../icons/LinkedinOutlineIcon";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    margin: theme.spacing(1)
  },
  anchor: {
    color: theme.extendedPalette.purpleContrast.main,
    textDecoration: "none",
    "&:hover": {
      color: theme.extendedPalette.greenContrast.main
    }
  },
  text: {
    wordWrap: "break-word"
  }
}));

function Contact() {
  const classes = useStyles();

  return (
    <div id="contact" className={classes.root}>
      <Grid container>
        <Grid item md={3} lg={3} xl={3}>
          <IconButton aria-label="Download CV" color="primary">
            <CloudDownloadOutlinedIcon fontSize="large" />
          </IconButton>
          <a
            href={process.env.PUBLIC_URL + "/files/cv.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            download
            className={classes.anchor}
          >
            <Typography vriant="h3" className={classes.text}>Download my CV !</Typography>
          </a>
        </Grid>
        <Grid item md={3} lg={3} xl={3}>
          <IconButton aria-label="Email" color="primary">
            <EmailOutlinedIcon fontSize="large" />
          </IconButton>
          <Typography vriant="h3" className={classes.text}>gab.saldana95@gmail.com</Typography>
        </Grid>
        <Grid item md={3} lg={3} xl={3}>
          <IconButton aria-label="Linkedin" color="primary">
            <LinkedinOutlineIcon />
          </IconButton>
          <a
            className={classes.anchor}
            href="https://www.linkedin.com/in/gabriela-salda%C3%B1a-92a2b7b4"
          >
            <Typography vriant="h3" className={classes.text}>My Linkedin</Typography>
          </a>
        </Grid>
        <Grid item md={3} lg={3} xl={3}>
          <IconButton
            className={classes.button}
            aria-label="Linkedin"
            color="primary"
          >
            <PhoneAndroidOutlinedIcon />
          </IconButton>
          <Typography vriant="h3" className={classes.text}>+52 5548811040</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
