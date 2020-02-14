import React from "react";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import FileOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";

const portfolio = [
  {
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
      "Integrate two new devices on the discovery flow.",
      "Integrate the new design flow on the already existent.",
      "Establish trust and credibility through excellent service."
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
      "After exploring the problem space through different approaches, so we started ideating in a collaborative way. The team decided to divide the experience into one perspective: Installers. We decided to improve the infromation architecture for the two new devices and the disposition of the interface elemnts in order to make them easier to use for installers, since they are the only users of the application, improving the installers experience meant improving customer experience.",
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
    project_id: "2",
    title: "TaxLab",
    year: "2019",
    short_desc: "Don't let your taxes drive you crazy.",
    desc:
      "Taxlab is a startup founded by attorneys at Bismark Tax, Inc., a law firm that specializes in tax resolution cases. The startup is simplifying tax preparation for small and medium sized businesses through an online platform that clasifies your incomes and expenses for you.",
    my_role: ["Ux Design", "Protoyping", "Front End Developer"],
    problem:
      "The product owner had an idea regarding monetizing the application, I designed this payment section.",
    image: require("./images/tax/tax.jpg"),
    goals: [
      "Add the payments section.",
      "Add three posible payments plans including a freemiun one.",
      "Integrate the new design flow on the already existent"
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
      "Having a clear understanding of the business model helped me on the design of the payment section, working closely with the product owner was the key.",
    research_img: [
      {
        title: "Research1",
        img: require("./images/tax/5.png")
      },
      {
        title: "Reserach2",
        img: require("./images/tax/6.png")
      }
    ],
    customer: [
      {
        title:
          "I would like the users to use the basic features without charging them.",
        desc:
          "This was the freemium model, the users could subscribe without any charge, if they wanted further more they needed to purchase a plan."
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
          "A Stripe integration was thought for securing the channel and integrate the payment flow. Some UI integration was made up on this."
      }
    ],
    solution:
      "After exploring the problem space through different approaches, so we started ideating in a collaborative way. The team decided to divide the experience into one perspective: Installers. We decided to improve the infromation architecture for the two new devices and the disposition of the interface elemnts in order to make them easier to use for installers, since they are the only users of the application, improving the installers experience meant improving customer experience.",
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
        img: require("./images/tax/4.png")
      }
    ],
    impact:
      "We improved the time Installer users would spend assigning and configuring devices for a solar monitoring system.",
    learnings: [
      "Working closely with the client is not an option, if you want to ensure your understanding on the business.",
      "Having a freemiun plan is always a good idea for let your product join the market.",
      "Integrations with well known services are best that redesigning the wheel from cero."
    ]
  },
  {
    project_id: "3",
    title: "Rysh",
    year: "2018",
    short_desc: "Train's issues reporter.",
    desc:
      "Rysh Electronica offer a report and repair service for trains. Most reports are on paper. The repairments happen at any time during the day, they are spontaneous, and some of them are between 8-10 hours distance from the office.",
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
      "Since there is no control over the reports some get lost, others doesn’t arrive with the data needed, there is not enough space to store them in an ordered way, this lead to misunderstandings between the business owner and the installers that went on-site to repair the train.",
    image: require("./images/rysh/rysh.jpg"),
    goals: [
      "Manage the resources needed on each report (including human resources).",
      "Decrease the time spent manually writing, sending and storing reports.",
      "The UI design must be simple, easy to use and undestand.",
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
      "I needed to understand the service as a whole, the actors involved. I made a service blueprint aalysis, without this I wouldn't have unterstood how can I digitalize the specific step of the service regarding reports. I decided just to design for solving the reporting problem.",
    research_img: [
      {
        title: "Research1",
        img: require("./images/rysh/1.png")
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
          "Sometimes the reporter may be in the office in two days, the person just sends a photo of the paper report and some photos regarding the train issue, a person manually needs to write down the report once the information has arrived by WhatsApp. Digital creation of a report facilitate the job."
      },
      {
        title:
          "I don't know which reporters are out and where, there are many reports everyday.",
        desc:
          "As I could see, reporting wasn't the only problem their service was having, but also managing human resources. Adding reportes to the database and providing information about them helped the manager to know which personrs were asigned to wich group and where."
      },
      {
        title: "I don't know where I left that report!",
        desc:
          "People needed to look for it on a heap of papers. This why the reported got digitalized and automatic emails were sent on every creation and edition."
      }
    ],
    solution:
      "After exploring the problem space through different approaches, so we started ideating in a collaborative way. The team decided to divide the experience into one perspective: Installers. We decided to improve the infromation architecture for the two new devices and the disposition of the interface elemnts in order to make them easier to use for installers, since they are the only users of the application, improving the installers experience meant improving customer experience.",
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
      "We improved the time Installer users would spend assigning and configuring devices for a solar monitoring system.",
    learnings: [
      "Having legacy manual methods on a day to day job, generates a double work.",
      "Is difficult to measure efficiency when you have distributed workers and you don't have ways of managing them virtually. A good people management tool is a must nowadays.",
      "Having reports digitized was the best thing they have used until today."
    ]
  }
];

export default portfolio;
