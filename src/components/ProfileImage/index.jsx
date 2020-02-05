import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Gabs from "../../images/me.png";

const useStyles = makeStyles(theme => ({
  profileImg: {
    weight: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(1),
    backgroundColor: theme.extendedPalette.pinkContrast.main,
    padding: theme.spacing(0.5),
    borderRadius: 100
  }
}));

function ProfileImage() {
  const classes = useStyles();

  return <img id="me" className={classes.profileImg} src={Gabs} alt="Myself" />;
}

export default ProfileImage;
