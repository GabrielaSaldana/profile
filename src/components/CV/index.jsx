import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    margin: theme.spacing(1),
    textAlign: "left"
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
  }
}));

function CV() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
        <Typography className={classes.text}>
          Download my CV !
        </Typography>
      </a>
    </Box>
  );
}

export default CV;
