import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import routes from "../../routes/routes";
import portfolio from "../../portfolio";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  subTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  seeMore: {
    color: theme.palette.primary.main,
  },
  spacing: {
    [theme.breakpoints.up("xl")]: {
      paddingLeft: theme.spacing(12),
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(1),
    },
  },
}));

function Projects() {
  const classes = useStyles();

  return (
    <div id="portfolio" className={classes.root}>
      <div className={classes.subTitle}>
        <Typography variant="h1">Portfolio</Typography>
      </div>
      <div className={classes.spacing}>
        <Grid container spacing={1}>
          {portfolio.map((project, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
              <Card className={classes.card}>
                <CardActionArea>
                  <Link
                    className={classes.seeMore}
                    to={routes.projectDetail({
                      projectId: project.project_id,
                    })}
                  >
                    <CardMedia
                      className={classes.media}
                      image={project.image}
                      title={project.title}
                    />
                  </Link>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h2"
                      style={{ textAlign: "left"}}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      component="p"
                      style={{ textAlign: "left", fontSize: "1rem" }}
                    >
                      {project.short_desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
