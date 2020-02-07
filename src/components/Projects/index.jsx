import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Palm from "../../images/palms.jpg";
import routes from "../../routes/routes";

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
  },
  seeMore: {
    color: theme.extendedPalette.purpleContrast.main,
    "&:hover": {
      color: theme.extendedPalette.greenContrast.main
    }
  }
}));

const portfolio = [
  {
    project_id: "1",
    title: "Project 1",
    desc: "This project is regarding payments"
  },
  {
    project_id: "2",
    title: "Project 2",
    desc: "This project is regarding payments"
  },
  {
    project_id: "3",
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
                <Link
                  className={classes.seeMore}
                  to={routes.projectDetail({
                    projectId: project.project_id
                  })}
                >
                  <VisibilityOutlinedIcon fontSize="large" />
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
