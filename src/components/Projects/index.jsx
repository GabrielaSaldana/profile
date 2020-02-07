import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import IconButton from "@material-ui/core/IconButton";
import Palm from "../../images/palms.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
}));

const portfolio = [
  {
    title: "Project 1",
    desc: "This project is regarding payments"
  },
  {
    title: "Project 2",
    desc: "This project is regarding payments"
  },
  {
    title: "Project 3",
    desc: "This project is regarding payments"
  }
];

function Projects() {
  const classes = useStyles();

  return (
    <div id="projects" className={classes.root}>
      <Grid container>
        {portfolio.map((project, index) => (
          <Grid item xs={4} key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Palm}
                  title={project.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h2"
                    style={{ textAlign: "left" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography component="p" style={{ textAlign: "left" }}>
                    {project.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton aria-label="see more" color="primary">
                  <VisibilityOutlinedIcon fontSize="large" />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
