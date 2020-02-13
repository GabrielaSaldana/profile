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
import routes from "../../routes/routes";
import portfolio from "../../portfolio";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  description: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.main
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
  },
  spacing: {
    [theme.breakpoints.up("xl")]: {
      paddingLeft: theme.spacing(12)
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(1)
    }
  }
}));

function Projects() {
  const classes = useStyles();

  return (
    <div id="portfolio" className={classes.root}>
      <div className={classes.description}>
        <Typography>HIGHLIGHT</Typography>
        <Typography variant="h2">PROJECTS</Typography>
      </div>
      <div className={classes.spacing}>
        <Grid container spacing={1}>
          {portfolio.map((project, index) => (
            <Grid item xs={4} key={index}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={project.image}
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
                      {project.short_desc}
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
    </div>
  );
}

export default Projects;
