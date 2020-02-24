import React from "react";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import FileOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";

const portfolio = [
  {
    protected: true,
    project_id: "1",
    title: "Sun Power",
    year: "2019",
    short_desc: "Solar energy monitoring.",
    desc:
      "SunPower installs solar panels on condominiums and monitors it's solar energy production and consumption. They have designed the hardware and software that connects panels trough a smart box converting DC into AC and sending this data to their platform.",
    my_role: ["Ux Design", "Protoyping", "Front End Developer"],
    problem:
      "SunPower partnered with Wizeline to figure out a solution to migrate from the legacy version into a more intuitive interface as well as the addition of two new monitoring devices in the configuration flow. I started my process conducting in-depth stakeholder interviews to uncover the expectations they had of the project, as well as all the valuable information of the customer needs.",
    image: require("./images/solar/solar.jpg"),
    goals: [
      "Re design the solar devices discovery flow and UI to be understandable for installers.",
      "Integrate two new monitoring devices on the discovery flow.",
      "Establish trust and credibility through excellent service.",
      "Integrate the new design flow on the already existent."
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
      },
      {
        title: "On Site Visits",
        icon: <MapOutlinedIcon fontSize="large" color="primary" />
      }
    ],
    research_desc:
      "After having a deep sense of the way SunPower worked as a service model,and the goals SunPower as an organization wanted to accomplish (such as improving the customer service while installation), I decided to conduct collaborative sessions with my team and the stakeholders so everyone felt part of the solution. We decided to accompany the installers on siteto follow up they Journey Maps to identify potential pain points in the current experience.",
    research_img: [
      {
        title: "Reserach2",
        img: require("./images/solar/6.png")
      },
      {
        title: "Installation",
        img: require("./images/solar/7.png")
      }
    ],
    customer: [
      {
        title:
          "I don't know if every configuration change I made on the hardware is confirmed.",
        desc:
          " Confirmation messages and color codes were introduced to the existent UI."
      },
      {
        title: "I need assistance with the new devices.",
        desc:
          " The application had a step by step flow where I added the new two devices in order to don't break the well known installation flow."
      },
      {
        title: "I receive too many calls for UI assistance.",
        desc:
          "Sometimes the installer did not understand the UI of configuration flow and appeal to phone calls."
      }
    ],
    solution:
      "After exploring the problem space through different approaches, we started ideating in a collaborative way. The team decided to divide the experience into one perspective: Installers. We decided to improve the infromation architecture for the two new devices and the disposition of the interface elemnts in order to make them easier to use for installers, since they are the only users of the application, improving the installers experience meant improving customer experience.",
    prototyping: [
      {
        title: "Conectivity",
        img: require("./images/solar/4.png")
      },
      {
        title: "Configure Devices",
        img: require("./images/solar/2.png")
      },
      {
        title: "AC Modules",
        img: require("./images/solar/3.png")
      },
      {
        title: "Invision",
        img: require("./images/solar/5.png")
      }
    ],
    impact:
      "We improved the time Installer users would spend assigning and configuring devices for a solar monitoring system.",
    learnings: [
      "I learned how difficult is to design for systems that had hardware restrictions, in this case the smart box.",
      "Regularly Accompanying the installers on site is a task that needs to be done not only for user experience research but for measuring quality of service.",
      "There were problems that had to with the service design per se, after going to a digital solution first, we need to analyze the service."
    ]
  },
  {
    protected: false,
    project_id: "2",
    title: "TaxLab",
    year: "2019",
    short_desc: "Don't let your taxes drive you crazy.",
    desc:
      "Taxlab is a startup founded by attorneys at Bismark Tax, Inc., a law firm that specializes in tax resolution cases. The startup is simplifying tax preparation for small and medium sized businesses through an online platform that clasifies your incomes and expenses for you.",
    my_role: ["Ux Design", "Protoyping", "Front End Developer"],
    problem:
      "I joined the team as Software Engeenier, and one of my first endeavors consisted on designing the payment section to enable the business model monitization, the product owner had already an idea of how payment enrollment was going to work. I decided to start empathizing with the product owner, working closely with him to materialize his ideas.",
    image: require("./images/tax/tax.jpg"),
    goals: [
      "Create an honest taxes classification application.",
      "Integrate the new payments design flow on the already existent.",
      "Materialize the business model inside the application."
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
      },
      {
        title: "Market Research",
        icon: <FileOutlinedIcon fontSize="large" color="primary" />
      }
    ],
    research_desc:
      "After having a deep sense of the way TaxLab worked as a business model, the potential risks associated, and the goals TaxLab as an organization wanted, I decided to conduct collaborative next steps sessions with my team and the stakeholder. We decided to utilize the UX reserach made by the UX Lead and create the journey for selecting a plan. Taking into account that the feature required the most secure channel available we decided to integrate Stripe.",
    research_img: [
      {
        title: "Research1",
        img: require("./images/tax/5.png")
      },
      {
        title: "Reserach2",
        img: require("./images/tax/7.png")
      }
    ],
    customer: [
      {
        title:
          "I would like the users to use the basic features without charging them.",
        desc:
          "The users could subscribe without any charge, if they wanted further more they needed to purchase a plan."
      },
      {
        title:
          "How do I know when my plan ends? I don't want to be charged without noticing it.",
        desc:
          "A label describing the remaining days was displayed for user information."
      },
      {
        title: "I want to add my card information trough a secure site.",
        desc:
          "A Stripe integration was thought for securing the channel and integrate the payment flow."
      }
    ],
    solution:
      "The big challenge when designing a apayment page is nailing trust into users that their information is secure. What is the information the audience is expecting to see? What questions do they want to answer? How can we mitigate their uncertainty and encourage them to contract the plan?To answer these questions, the team conducted competitive analysis, and ideated different structures and sequence of information, until we finally agreed on providing the most relevant information.",
    prototyping: [
      {
        title: "Architecture",
        img: require("./images/tax/1.png")
      },
      {
        title: "Add Payment",
        img: require("./images/tax/2.png")
      },
      {
        title: "Socializing",
        img: require("./images/tax/3.png")
      },
      {
        title: "Payment Section",
        img: require("./images/tax/6.png")
      }
    ],
    impact:
      "Leveraging design as a way to better plan, help us speed the last part of the project to accomplish the MVP.",
    learnings: [
      "Working closely with the client is not an option, if you want to ensure your understanding on the business.",
      "Having a freemiun plan is always a good idea for let your product join the market.",
      "Integrations with well known services are best that redesigning the wheel from cero."
    ]
  },
  {
    protected: false,
    project_id: "3",
    title: "Rysh",
    year: "2018",
    short_desc: "Train's issues reporter.",
    desc:
      "Rysh Electronica is a national company that offers a report and repair service for trains 24/7. Their service works as follows; they send  a group of persons on site to repair electronical issues, this issues are wrote down into a paper report thta is sent to the manager on the central ofice.",
    my_role: [
      "UX Researcher",
      "Protoyping",
      "UX Design",
      "Data Architech",
      "Project Manager",
      "Full Stack Developer",
      "Technical Writer"
    ],
    problem:
      " The repairments happen at any time during the day, they are spontaneous, and some of them are between 8-10 hours distance from the office, since there is no control over the reports some get lost, others doesn’t arrive with the data needed and there is not enough space to store them this lead to misunderstandings.",
    image: require("./images/rysh/rysh.jpg"),
    goals: [
      "Manage the resources needed on each report.",
      "Decrease the time spent manually writing, sending and storing reports.",
      "Designing a simple but functional UI.",
      "Establish trust and credibility to client's customers."
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
      },
      {
        title: "Customer Journey",
        icon: <MapOutlinedIcon fontSize="large" color="primary" />
      },
      {
        title: "Persona",
        icon: <AssignmentIndOutlinedIcon fontSize="large" color="primary" />
      }
    ],
    research_desc:
      "I needed to understand the service as a whole, the actors involved. I made a service blueprint aalysis, without this I wouldn't have unterstood how can I digitalize the specific step of the service regarding reports. I decided to start analizing the user journey for reporting a train issue.",
    research_img: [
      {
        title: "Research1",
        img: require("./images/rysh/8.png")
      },
      {
        title: "Reserach2",
        img: require("./images/rysh/2.png")
      }
    ],
    customer: [
      {
        title: "I'm right now on Chihuahua right now.",
        desc:
          "The reporter is always out of office, the reporter just sends a photo of the paper report and some photos regarding the train issue. Digital creation of a report facilitate the job."
      },
      {
        title:
          "I don't know which reporters are out and where, there are many reports everyday.",
        desc:
          "Reporting wasn't the only problem their service was having, but also managing human resources. Adding the personnel to the database and providing information about them helped the manager to know which personrs were asigned to wich group and where."
      }
    ],
    solution:
      "After exploring the problem space through different approaches, we started ideating in a collaborative way. I decided to start defining the infromation architecture that also models the datbase in a way, after having the information architecture I started to define some user journeys trought he application to define the main flows and finally using the user flows diagrams I created the mocks for creating and socilizing a report.",
    prototyping: [
      {
        title: "Interview",
        img: require("./images/rysh/6.png")
      },
      {
        title: "Data",
        img: require("./images/rysh/4.png")
      },
      {
        title: "User Manual",
        img: require("./images/rysh/7.png")
      },
      {
        title: "Schedule",
        img: require("./images/rysh/5.png")
      }
    ],
    impact:
      "Having the ability to create reports in the site reduce half of the work and increased time spent on solving the actual issue.",
    learnings: [
      "Having legacy manual methods on a day to day job, generates a double work.",
      "Is difficult to measure efficiency when you have distributed workers and you don't have ways of managing them virtually. A good people management tool is a must nowadays.",
      "Having reports digitized was the best thing they have used until today."
    ]
  }
];

export default portfolio;
