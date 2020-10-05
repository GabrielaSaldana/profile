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
          After being a developer I decided to changed my career path to UX
          Designer, I wanted to learn how to design for developers and users,
          keeping a balance between each other. I have taken courses of service
          design, ux design, and have participated in the "Gender jam" an event
          aimed for solving gender problematics in our society.
        </Typography>
      ),
    },
    {
      title: "Developing at Wizeline",
      date: "2018-2020",
      desc: (
        <Typography className={classes.textContent}>
          I started my career at Wizeline as a Software Engineer thanks to a
          trainee program, they trained me on the nowadays ways of designing,
          creating and delivering software using agile methodologies, I worked
          as full-stack developer for a year and a half, mainly on the front end
          using React.
        </Typography>
      ),
    },
    {
      title: "Freelancing",
      date: "2017-2018",
      desc: (
        <Typography className={classes.textContent}>
          After getting my Bachelor in Science on Systems Engineering degree, I
          decided to look for a job and meanwhile freelance myself, I designed
          and developed a web Application for an train management enterprise, I
          created a management tool for their train's reports.
        </Typography>
      ),
    },
    {
      title: "Undergraduation at IPN-ESCOM",
      date: "2014-2018",
      desc: (
        <Typography className={classes.textContent}>
          I am pursuing my under-graduation studies with major in Systems
          Engineering at the Instituto Politecnico Nacional. I was parto of the
          algorith club studying mainly competitive programming, I joined a
          course of IT management and risk management, finally I decided to get
          into deep on front end development and REST APIs.
        </Typography>
      ),
    },
  ];

  return (
    <div id="timeline" className={classes.root}>
      <div className={classes.subTitle}>
        <Typography variant="h1">Timeline</Typography>
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
