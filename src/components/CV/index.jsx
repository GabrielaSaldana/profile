import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    display: "flex",
    paddingLeft: theme.spacing(5), // This padding is used to separate teh nav-bar from the content
    textAlign: "left",
  },
  anchor: {
    color: theme.palette.text.primary,
    paddingLeft: theme.spacing(1),
    textDecoration: "none",
    "&:hover": {
      color: theme.extendedPalette.cyanContrast.main,
    },
  },
  text: {
    wordWrap: "break-word",
    fontSize: "1.5rem",
    color: theme.palette.primary.main,
  },
}));

function CV() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CloudDownloadIcon fontSize="large" />
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
