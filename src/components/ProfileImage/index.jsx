import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Gabs from "../../images/me.png";

const useStyles = makeStyles(theme => ({
  profileImg: {
    height: "8rem",
    margin: theme.spacing(1),
    backgroundColor: theme.extendedPalette.pinkContrast.main,
    borderRadius: 100,
    padding: theme.spacing(0.5)
  },
  container: {
    padding: theme.spacing(0.5)
  }
}));

function ProfileImage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img className={classes.profileImg} id="me" src={Gabs} alt="Myself" />
    </div>
  );
}

export default ProfileImage;
