import React from "react";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";

const portfolio = [
  {
    project_id: "1",
    title: "Sun power",
    desc:
      "A project regarding generating energy through solar panels. The business of the company is installing solar panels on the roofs and monitoring solar energy production and consumption; in order to achieve this they have designed the hardware and software to connect panels trough a smart box that will convert DC to AC and send this data to their servers.",
    my_role: ["Protoyping", "Ux Design"],
    problem:
      "They had a webtool to install this smart box on the sites, this webtool conects trough wifi or the cellular network. The problem was that this app was a legacy design and it had a lot of patches under the hood, the UI wasn't clear to the installer and there were a lot of workflows and processes duplicated. ",
    image: require("./images/solar/solar.jpg"),
    goals: [
      "Re design the solar devices discovery flow and ui to be understandable for installers.",
      "Integrate two new devices on the discovery flow",
      "Integrate the new design flow on the already existent",
      "Establish trust and credibility through excellent service"
    ],
    research: [
      {
        title: "Customer interviews",
        icon: <GroupOutlinedIcon fontSize="large" color="primary" />
      },
      {
        title: "Prototype testing",
        icon: <PhoneIphoneOutlinedIcon fontSize="large" color="primary" />
      },
      {
        title: "Information Architecture",
        icon: <AccountTreeOutlinedIcon fontSize="large" color="primary" />
      }
    ],
    research_desc:
      "Without a clear idea of how does installers were currently interacting with the webtool on site, we didn't knew their pain points trough the journey of installing the monitoring system.",
    customer: [
      {
        title: "I don't have great connectivity from the smart box",
        desc:
          "Sometimes the smart box couldn't connect to the wifi as expected, this is where celular networks gets involved."
      },
      {
        title:
          "I don't know if every configuration change I made on the hardware is confirmed.",
        desc:
          " Confirmation messages and color codes were introduced to the existent UI."
      },
      {
        title: "I need assistance with the new devices.",
        desc:
          " The application had a step by step flow where I added the new two devices in order to don't break the installation flow."
      }
    ],
    prototyping: [
      {
        title: "Conectivity",
        img: require("./images/solar/1.png")
      },
      {
        title: "z",
        img: require("./images/solar/2.png")
      },
      {
        title: "x",
        img: require("./images/solar/3.png")
      }
    ],
    learnings: [
      "I learned how difficult is to design for systems that had hardware restrictions, in this case the smart box.",
      "Accompanying the installers is a task that needs to be done not only for user research but for measuring quality of service.",
      "There were problems that had to with the service design per se, after going to a digital solution first, we need to analyze the service."
    ]
  },
  {
    project_id: "1",
    title: "Sun power",
    desc:
      "A project regarding generating energy through solar panels. The business of the company is installing solar panels on the roofs and monitoring solar energy production and consumption; in order to achieve this they have designed the hardware and software to connect panels trough a smart box that will convert DC to AC and send this data to their servers.",
    my_role: ["Protoyping", "Ux Design"],
    problem:
      "They had a webtool to install this smart box on the sites, this webtool conects trough wifi or the cellular network. The problem was that this app was a legacy design and it had a lot of patches under the hood, the UI wasn't clear to the installer and there were a lot of workflows and processes duplicated. ",
    image: require("./images/solar/solar.jpg"),
    goals: [
      "Re design the solar devices discovery flow and ui to be understandable for installers.",
      "Integrate two new devices on the discovery flow",
      "Integrate the new design flow on the already existent",
      "Establish trust and credibility through excellent service"
    ],
    research: [
      {
        title: "Customer interviews",
        icon: <GroupOutlinedIcon fontSize="large" color="primary" />
      },
      {
        title: "Prototype testing",
        icon: <PhoneIphoneOutlinedIcon fontSize="large" color="primary" />
      },
      {
        title: "Information Architecture",
        icon: <AccountTreeOutlinedIcon fontSize="large" color="primary" />
      }
    ],
    research_desc:
      "Without a clear idea of how does installers were currently interacting with the webtool on site, we didn't knew their pain points trough the journey of installing the monitoring system.",
    customer: [
      {
        title: "I don't have great connectivity from the smart box",
        desc:
          "Sometimes the smart box couldn't connect to the wifi as expected, this is where celular networks gets involved."
      },
      {
        title:
          "I don't know if every configuration change I made on the hardware is confirmed.",
        desc:
          " Confirmation messages and color codes were introduced to the existent UI."
      },
      {
        title: "I need assistance with the new devices.",
        desc:
          " The application had a step by step flow where I added the new two devices in order to don't break the installation flow."
      }
    ],
    prototyping: [
      {
        title: "Conectivity",
        img: require("./images/solar/1.png")
      },
      {
        title: "z",
        img: require("./images/solar/2.png")
      },
      {
        title: "x",
        img: require("./images/solar/3.png")
      }
    ],
    learnings: [
      "I learned how difficult is to design for systems that had hardware restrictions, in this case the smart box.",
      "Accompanying the installers is a task that needs to be done not only for user research but for measuring quality of service.",
      "There were problems that had to with the service design per se, after going to a digital solution first, we need to analyze the service."
    ]
  },
  {
    project_id: "1",
    title: "Sun power",
    desc:
      "A project regarding generating energy through solar panels. The business of the company is installing solar panels on the roofs and monitoring solar energy production and consumption; in order to achieve this they have designed the hardware and software to connect panels trough a smart box that will convert DC to AC and send this data to their servers.",
    my_role: ["Protoyping", "Ux Design"],
    problem:
      "They had a webtool to install this smart box on the sites, this webtool conects trough wifi or the cellular network. The problem was that this app was a legacy design and it had a lot of patches under the hood, the UI wasn't clear to the installer and there were a lot of workflows and processes duplicated. ",
    image: require("./images/solar/solar.jpg"),
    goals: [
      "Re design the solar devices discovery flow and ui to be understandable for installers.",
      "Integrate two new devices on the discovery flow",
      "Integrate the new design flow on the already existent",
      "Establish trust and credibility through excellent service"
    ],
    research: [
      {
        title: "Customer interviews",
        icon: <FileCopyOutlinedIcon fontSize="large" color="primary" />
      },
      {
        title: "Prototype testing",
        icon: <MapOutlinedIcon fontSize="large" color="primary" />
      },
      {
        title: "Information Architecture",
        icon: <AssignmentIndOutlinedIcon fontSize="large" color="primary" />
      }
    ],
    research_desc:
      "Without a clear idea of how does installers were currently interacting with the webtool on site, we didn't knew their pain points trough the journey of installing the monitoring system.",
    customer: [
      {
        title: "I don't have great connectivity from the smart box",
        desc:
          "Sometimes the smart box couldn't connect to the wifi as expected, this is where celular networks gets involved."
      },
      {
        title:
          "I don't know if every configuration change I made on the hardware is confirmed.",
        desc:
          " Confirmation messages and color codes were introduced to the existent UI."
      },
      {
        title: "I need assistance with the new devices.",
        desc:
          " The application had a step by step flow where I added the new two devices in order to don't break the installation flow."
      }
    ],
    prototyping: [
      {
        title: "Conectivity",
        img: require("./images/solar/1.png")
      },
      {
        title: "z",
        img: require("./images/solar/2.png")
      },
      {
        title: "x",
        img: require("./images/solar/3.png")
      }
    ],
    learnings: [
      "I learned how difficult is to design for systems that had hardware restrictions, in this case the smart box.",
      "Accompanying the installers is a task that needs to be done not only for user research but for measuring quality of service.",
      "There were problems that had to with the service design per se, after going to a digital solution first, we need to analyze the service."
    ]
  }
];

export default portfolio;
