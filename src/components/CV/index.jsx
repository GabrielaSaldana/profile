import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    display: "flex",
    margin: theme.spacing(2),
    textAlign: "left"
  },
  anchor: {
    color: theme.extendedPalette.purpleContrast.main,
    paddingLeft: theme.spacing(1),
    textDecoration: "none",
    "&:hover": {
      color: theme.extendedPalette.greenContrast.main
    }
  },
  text: {
    wordWrap: "break-word",
    fontSize: "1.5rem"
  }
}));

function CV() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CloudDownloadOutlinedIcon fontSize="large" color="primary"/>
      <a
        href={process.env.PUBLIC_URL + "/files/cv.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        download
        className={classes.anchor}
      >
        <Typography className={classes.text}>
          Click here to download my CV !
        </Typography>
      </a>
    </Box>
  );
}

export default CV;
