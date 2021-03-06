import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import portfolio from "../../portfolio";
import { Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Presentation from "../Presentation";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import FormatQuoteOutlinedIcon from "@material-ui/icons/FormatQuoteOutlined";
import IdeaIcon from "@material-ui/icons/EmojiObjects";
import ImpactIcon from "@material-ui/icons/EmojiPeople";
import Circle from "../../icons/circleIndex.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "12px",
    width: "auto",
    marginLeft: theme.spacing(1),
    color: theme.palette.text.primary,
  },
  mainImg: {
    minheight: theme.spacing(70),
    backgroundColor: theme.extendedPalette.redContrast.light,
  },
  redBackground: {
    [theme.breakpoints.up("lg")]: {
      padding: "100px !important",
    },
    [theme.breakpoints.only("md")]: {
      padding: "60px !important",
    },
    backgroundColor: theme.extendedPalette.redContrast.light,
  },
  textDescription: {
    textAlign: "left",
    fontSize: "1.2rem",
  },
  dotted: {
    borderStyle: "dotted",
    borderWidth: "1px",
    padding: theme.spacing(1),
    borderColor: "#9e9e9e",
  },
  circle: {
    backgroundImage: `url(${Circle})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    color: theme.palette.primary.main,
  },
}));

function ProjectContent() {
  const classes = useStyles();
  const { projectId } = useParams();

  const result = portfolio.find((obj) => {
    return obj.project_id === projectId;
  });

  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid
          id="mainImg"
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.mainImg}
        >
          <Grid item>
            <img
              src={result.image}
              alt={result.title}
              style={{ width: "100%", maxHeight: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid
          id="summary"
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.redBackground}
        >
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Typography variant="h1" gutterBottom style={{ height: "90px" }}>
              {result.title}
            </Typography>
            <Typography>YEAR</Typography>
            <Typography className={classes.textDescription} color="secondary">
              {result.year}
            </Typography>
            <List>
              <Typography>MY CONTRIBUTION</Typography>
              {result.my_role.map((role, index) => (
                <ListItem key={index}>
                  <Typography
                    className={classes.textDescription}
                    color="secondary"
                  >
                    {role}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <div>
              <Typography variant="h3" style={{ marginBottom: "16px" }}>
                About the company
              </Typography>
              <div className={classes.dotted}>
                <Typography
                  className={classes.textDescription}
                  color="textSecondary"
                >
                  {result.desc}
                </Typography>
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <Typography variant="h3" style={{ marginBottom: "16px" }}>
                The challenge
              </Typography>
              <div className={classes.dotted}>
                <Typography
                  className={classes.textDescription}
                  color="textSecondary"
                >
                  {result.problem}
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          id="goals"
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.redBackground}
          style={{ minheight: "380px" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Typography variant="h1" gutterBottom style={{ minheight: "90px" }}>
              Project Goals
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Grid container spacing={3}>
              {result.goals.map((goal, index) => (
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
                  <div className={classes.circle}>{index + 1}</div>
                  <br />
                  <Typography
                    className={classes.textDescription}
                    color="textSecondary"
                  >
                    {goal}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          id="research"
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.redBackground}
        >
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Typography
              variant="h1"
              style={{
                minheight: "90px",
              }}
            >
              Research
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <div className={classes.dotted} style={{ marginBottom: "2rem" }}>
              <Typography
                className={classes.textDescription}
                color="textSecondary"
              >
                {result.research_desc}
              </Typography>
            </div>
            <Grid container spacing={2}>
              {result.research.map((method, index) => (
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={index}>
                  {method.icon}
                  <Typography
                    className={classes.textDescription}
                    color="textSecondary"
                  >
                    {method.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.redBackground}
          style={{ height: "100%" }}
        >
          <Presentation projects={result.research_img} />
        </Grid>
        <Grid
          id="customer"
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.redBackground}
        >
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Typography variant="h1" gutterBottom style={{ minheight: "90px" }}>
              Opportunities Discovery
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Grid container spacing={2}>
              {result.customer.map((mindset, index) => (
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
                  <Typography
                    variant="h3"
                    style={{ marginBottom: "2rem" }}
                    color="secondary"
                  >
                    {mindset.title}
                  </Typography>
                  <Typography
                    className={classes.textDescription}
                    color="textSecondary"
                  >
                    {mindset.desc}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          id="solution"
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.redBackground}
          style={{ minheight: "300px" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h1" gutterBottom>
              Solution
              <IdeaIcon color="primary" />
            </Typography>
            <div
              className={classes.dotted}
              style={{ borderStyle: "dashed", borderColor: "#536dfe" }}
            >
              <Typography
                className={classes.textDescription}
                color="textSecondary"
              >
                {result.solution}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid
          id="prototyping"
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.redBackground}
          style={{ height: "100%" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <Typography variant="h1" gutterBottom style={{ minheight: "90px" }}>
              Development
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
            <Presentation projects={result.development} />
          </Grid>
        </Grid>
        <Grid
          id="impact"
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.redBackground}
          style={{ minheight: "200px" }}
        >
          <Grid
            id="impact"
            container
            item
            spacing={3}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Typography variant="h1" gutterBottom>
              Impact
              <ImpactIcon color="primary" />
            </Typography>
            <div>
              <ul>
                {result.impact.map((impact, index) => (
                  <li key={index}>
                    <Typography
                      className={classes.textDescription}
                      color="textSecondary"
                    >
                      {impact}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid>
        <Grid
          id="learnings"
          container
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          spacing={3}
          className={classes.redBackground}
        >
          <div style={{ display: "flex" }}>
            <Typography variant="h1">Takeaways</Typography>
            <MenuBookOutlinedIcon
              fontSize="large"
              color="primary"
              style={{ marginLeft: "1rem" }}
            />
          </div>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Grid container spacing={2}>
              {result.learnings.map((learning, index) => (
                <Grid item xs={12} sm={12} md={12} lg={4} xl={4} key={index}>
                  <div>
                    <div style={{ display: "flex" }}>
                      <FormatQuoteOutlinedIcon color="secondary" />
                      <Typography
                        className={classes.textDescription}
                        color="textSecondary"
                      >
                        {learning}
                      </Typography>
                      <FormatQuoteOutlinedIcon color="secondary" />
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectContent;
