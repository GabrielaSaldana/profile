import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  imagePaper: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

function Presentation(props) {
  const classes = useStyles();
  const tileData = props.projects;
  console.log(tileData);

  return (
    <Grid container spacing={2}>
      {tileData.map((item, index) => (
        <Grid item xs={6} key={index}>
          <img src={item.img} alt={item.title} className={classes.imagePaper} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Presentation;
