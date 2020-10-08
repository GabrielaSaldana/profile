import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PlaceIcon from "@material-ui/icons/Place";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    padding: theme.spacing(5), // This padding is used to separate teh nav-bar from the content
    textAlign: "left",
  },
  timeLineContainer: {
    display: "flex",
  },
  lineBox: {
    height: theme.spacing(20),
    marginLeft: theme.spacing(2.7),
    width: "3px",
    backgroundImage: "linear-gradient(to bottom, #F2F3F7, #F2F3F7)",
  },
  timeItem: {
    height: "fit-content",
    width: "80%",
    backgroundColor: theme.extendedPalette.greyContrast.main,
    marginLeft: theme.spacing(3),
    padding: theme.spacing(2),
  },
  checkPoint: {
    color: theme.palette.primary.main,
    backgroundColor: "#ffffff",
    borderStyle: "solid",
    borderWidth: "3px",
    borderColor: theme.extendedPalette.greyContrast.main,
  },
  date: {
    padding: "6px",
    marginLeft: theme.spacing(3),
  },
  subTitle: {
    textAlign: "left",
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  textContent: {
    fontSize: "1.1rem !important",
  },
}));

function TimeLine() {
  const classes = useStyles();

  const historyCheckpoints = [
    {
      title: "Designing at Wizeline",
      date: "2020-present",
      desc: (
        <Typography className={classes.textContent}>
          After being a developer I decided to change my career path to UX
          Desig, since I wanted to learn product design. I have applied my dev
          knowledge to syncronize better designers and developers efforts, while
          keeping user in the center. I have taken courses in Service design, UX
          design, , Product management, UI design, and have participated in the
          "Gender jam" an event aimed for solving gender problems in our
          society.
        </Typography>
      ),
    },
    {
      title: "Developing at Wizeline",
      date: "2018-2020",
      desc: (
        <Typography className={classes.textContent}>
          I started my career at Wizeline as a Software Engineer trainee.
          Wizeline trained me on the nowadays ways of designing, developing,
          managing, and delivering software using agile methodologies. I worked
          as full-stack developer for 1.6 years, mainly on the front end using
          React. During my developer time, I worked on 5 different projects
          developing on many verticals such as: Automotive, Renewable Energy,
          Finantial, Sports, and Transportation.
        </Typography>
      ),
    },
    {
      title: "Freelancing",
      date: "2017-2018",
      desc: (
        <Typography className={classes.textContent}>
          After getting my Bachelor in Science in Systems Engineering degree, I
          decided to look for my first job, this was a freelance. I designed and
          developed a web application for a train management enterprise with
          help of my brother. I created a management tool for their internal
          reports; they could create reports right on site and send them via
          internet to their direct managers in this way they avoided using the
          old fashioned paper way, they incremented data veracity, and
          decremented time spent on managing phisical reports.
        </Typography>
      ),
    },
    {
      title: "Undergraduation at IPN-ESCOM",
      date: "2014-2018",
      desc: (
        <Typography className={classes.textContent}>
          I pursued my BS in Systems Engineering at the Instituto Politecnico
          Nacional (ESCOM). I was part of the algorithm club studying mainly
          competitive programming. I like to study management so I joined a
          course of IT management and risk management. For my tesis project I
          created a tele-medicine health-monitor application. This app monitored
          the vital signs of an elder person and gave alerts to their primary
          care physician via internet.
        </Typography>
      ),
    },
  ];

  return (
    <div id="timeline" className={classes.root}>
      <div className={classes.subTitle}>
        <Typography variant="h1">Experience</Typography>
      </div>
      {historyCheckpoints.map((checkpoint, index) => (
        <div key={index}>
          <Avatar className={classes.checkPoint}>
            <PlaceIcon />
          </Avatar>
          <div className={classes.timeLineContainer}>
            <div className={classes.lineBox} />
            <div className={classes.timeItem}>
              <div style={{ display: "flex" }}>
                <Typography variant="h2">{checkpoint.title}</Typography>
                <Typography className={classes.date} color="secondary">
                  {checkpoint.date}
                </Typography>
              </div>
              <div>{checkpoint.desc}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimeLine;
