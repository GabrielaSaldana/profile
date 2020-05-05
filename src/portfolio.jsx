import React from "react";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import FileOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import LaptopIcon from "@material-ui/icons/Laptop";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";

const portfolio = [
  {
    protected: true,
    project_id: "1",
    title: "Betternet 3.0",
    company: "Betterware",
    year: "2020",
    short_desc: `A blind jump into a 3m deep swimming pool.`,
    desc: `This company is dedicated to sales through the catalog market, they have lots of people
     selling innovative Chinese made products of good quality. Their rapid growth left them into a
     big problem, a legacy problem; how might they keep growing if they are dragging a legacy system
     that due to the always-changing technology world had become from an innovative idea into a hard
     to maintain silo?`,
    my_role: ["Ux Designer", "Protoyping"],
    problem: `They wanted to migrate to the microservices paradigm and break the monolithic user experience into the different
      types of users. To estimate the effort this took, I will add some numbers: We were a group of 6 designers that
      audited 40% of the platform, we optimize the 10 main processes, I made some redesigning of the information
      architecture and we ended up with a development/migration plan of more or less 450 user stories in 8 weeks
      applying the design thinking model.
      The challenge was big enough that 8 weeks weren't enough.`,
    image: require("./images/better/betterware.png"),
    goals: [
      "Design the user experience and make it personalized to each type of user defined by personas.",
      "Integrate their previous research with our vision to balance business and user needs.",
      "Make the design plan actionable for the microservices migration plan.",
      "Try to cover as much as posible with the given timeframe.",
    ],
    research_desc: `Certainly we needed to first understand the business thus we conducted a series of workshops with the client to understand the magnitude of the challenge. I participated in the brand distillation,
      the customer journey mapping, the user and stakeholders interviews, the experience canvas mapping, project canvas,
      and the risk analysis. Initially, we were assisting on-site the first weeks, unfortunately, the COVID-19 outbreak
      lead us to remote which give us an extra level of difficulty.`,
    research: [
      {
        title: "Customer and stakeholders interviews",
        icon: <GroupOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Information Architecture",
        icon: <AccountTreeOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "On Site Visits and remote sessions",
        icon: <MapOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Concept testing",
        icon: <PhoneIphoneOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Remote sessions",
        icon: <LaptopIcon fontSize="large" color="primary" />,
      },
    ],
    research_img: [
      {
        title: "Project canvas from Atlassian",
        img: require("./images/better/6.png"),
      },
      {
        title: "Brand destillation",
        img: require("./images/better/7.png"),
      },
    ],
    customer: [
      {
        title:
          "My cellphone doesn't support the application and I don't have money for buying another one.",
        desc: `The main user belongs to the low society and sees the business as a way to buy cheap
          ware for their homes.`,
      },
      {
        title: "I want to grow my income and independence.",
        desc: `Some of the users see their sales as their main job and follow an established growth path,
          that is why they need a custom robust experience.`,
      },
      {
        title: `I need an up to date version of the information on the application to not get
        into trouble when it comes to bill.`,
        desc: `This is why the whole environment is going to be migrated to microservices to disengage dependencies,
            and parallelize processes.`,
      },
    ],
    solution: `After exploring the problem space through different approaches, we started ideating in a collaborative way.
      The team decided to divide the experience into three perspectives: Associate, Distributor, and Director. This three experiences will map to each type of user as well,
      they will have access to specifically optimized processes of the platform depending on their needs, in contrast to what they originally had:
      One single experience for all kinds of users. I lead the SiteMap to be effort, this gave us a holistic path to the final product. With this map in mind, 
      we divided efforts by flows and stater working with them, introducing the user perspective on each one. Finally,
      we validate them with developers and stakeholders to start prototyping and estimating the effort into stories.`,
    prototyping: [
      {
        title: "Experience and Journey mapping",
        img: require("./images/better/1.png"),
      },
      {
        title: "Proto-personas",
        img: require("./images/better/2.png"),
      },
      {
        title: "User interview script",
        img: require("./images/better/3.png"),
      },
      {
        title: "Remote concept testing due to COVID-19",
        img: require("./images/better/4.png"),
      },
      {
        title: "Wireframing",
        img: require("./images/better/5.png"),
      },
    ],
    impact: `We improved the whole experience of each user, breaking into three the whole information architecture 
    and reutilizing the microservices defined by development. This helps the user to exploit what they like to do
      and provides custom help to bottlenecks.`,
    learnings: [
      "I learned how difficult is to design and estimate for systems that are enormous and legacy.",
      "This is my first project as a user experience designer, so I learned everything you need to know as UXer but it was great!.",
      "There were problems that had to with the service design per se, after going to a digital solution first, we need to analyze the service.",
    ],
  },
  {
    protected: false,
    project_id: "2",
    title: "TaxLab",
    year: "2019",
    company: "ThinkBooks",
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
      "Materialize the business model inside the application.",
    ],
    research: [
      {
        title: "Customer interviews",
        icon: <GroupOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Prototype testing",
        icon: <PhoneIphoneOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Information Architecture",
        icon: <AccountTreeOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Market Research",
        icon: <FileOutlinedIcon fontSize="large" color="primary" />,
      },
    ],
    research_desc:
      "After having a deep sense of the way TaxLab worked as a business model, the potential risks associated, and the goals TaxLab as an organization wanted, I decided to conduct collaborative next steps sessions with my team and the stakeholder. We decided to utilize the UX reserach made by the UX Lead and create the journey for selecting a plan. Taking into account that the feature required the most secure channel available we decided to integrate Stripe.",
    research_img: [
      {
        title: "Designing the billing model ",
        img: require("./images/tax/5.png"),
      },
      {
        title: "Online payment ntegration",
        img: require("./images/tax/7.png"),
      },
    ],
    customer: [
      {
        title:
          "I would like the users to use the basic features without charging them.",
        desc:
          "The users could subscribe without any charge, if they wanted further more they needed to purchase a plan.",
      },
      {
        title:
          "How do I know when my plan ends? I don't want to be charged without noticing it.",
        desc:
          "A label describing the remaining days was displayed for user information.",
      },
      {
        title: "I want to add my card information trough a secure site.",
        desc:
          "A Stripe integration was thought for securing the channel and integrate the payment flow.",
      },
    ],
    solution:
      "The big challenge when designing a apayment page is nailing trust into users that their information is secure. What is the information the audience is expecting to see? What questions do they want to answer? How can we mitigate their uncertainty and encourage them to contract the plan?To answer these questions, the team conducted competitive analysis, and ideated different structures and sequence of information, until we finally agreed on providing the most relevant information.",
    prototyping: [
      {
        title: "Software architecture",
        img: require("./images/tax/1.png"),
      },
      {
        title: "Add a payment method",
        img: require("./images/tax/2.png"),
      },
      {
        title: "Socializing designs with stakeholders",
        img: require("./images/tax/3.png"),
      },
      {
        title: "Begining of the user journey",
        img: require("./images/tax/6.png"),
      },
    ],
    impact:
      "Leveraging design as a way to better plan, help us speed the last part of the project to accomplish the MVP.",
    learnings: [
      "Working closely with the client is not an option, if you want to ensure your understanding on the business.",
      "Having a freemiun plan is always a good idea for let your product join the market.",
      "Integrations with well known services are best that redesigning the wheel from cero.",
    ],
  },
  {
    protected: false,
    project_id: "3",
    title: "Rysh",
    year: "2018",
    company: "Rysh Electronics",
    short_desc: "Freelancing lkie a unicorn of unicorn's.",
    desc:
      "Rysh Electronica is a national company that offers a report and repair service for trains 24/7. Their service works as follows; they send  a group of persons on site to repair electronical issues, this issues are wrote down into a paper report thta is sent to the manager on the central ofice.",
    my_role: [
      "UX Researcher",
      "Protoyping",
      "UX Design",
      "Data Architech",
      "Project Manager",
      "Full Stack Developer",
      "Technical Writer",
    ],
    problem:
      " The repairments happen at any time during the day, they are spontaneous, and some of them are between 8-10 hours distance from the office, since there is no control over the reports some get lost, others doesn’t arrive with the data needed and there is not enough space to store them this lead to misunderstandings.",
    image: require("./images/rysh/rysh.jpg"),
    goals: [
      "Manage the resources needed on each report.",
      "Decrease the time spent manually writing, sending and storing reports.",
      "Designing a simple but functional UI.",
      "Establish trust and credibility to client's customers.",
    ],
    research: [
      {
        title: "Customer interviews",
        icon: <GroupOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Prototype testing",
        icon: <PhoneIphoneOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Information Architecture",
        icon: <AccountTreeOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Customer Journey",
        icon: <MapOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Persona",
        icon: <AssignmentIndOutlinedIcon fontSize="large" color="primary" />,
      },
    ],
    research_desc:
      "I needed to understand the service as a whole, the actors involved. I made a service blueprint aalysis, without this I wouldn't have unterstood how can I digitalize the specific step of the service regarding reports. I decided to start analizing the user journey for reporting a train issue.",
    research_img: [
      {
        title: "",
        img: require("./images/rysh/8.png"),
      },
      {
        title: "List of possible issues and their acronyms",
        img: require("./images/rysh/2.png"),
      },
    ],
    customer: [
      {
        title: "I'm right now on Chihuahua right now.",
        desc:
          "The reporter is always out of office, the reporter just sends a photo of the paper report and some photos regarding the train issue. Digital creation of a report facilitate the job.",
      },
      {
        title:
          "I don't know which reporters are out and where, there are many reports everyday.",
        desc:
          "Reporting wasn't the only problem their service was having, but also managing human resources. Adding the personnel to the database and providing information about them helped the manager to know which personrs were asigned to wich group and where.",
      },
    ],
    solution:
      "After exploring the problem space through different approaches, we started ideating in a collaborative way. I decided to start defining the infromation architecture that also models the datbase in a way, after having the information architecture I started to define some user journeys trought he application to define the main flows and finally using the user flows diagrams I created the mocks for creating and socilizing a report.",
    prototyping: [
      {
        title: "Final deliverable with user's guide",
        img: require("./images/rysh/6.png"),
      },
      {
        title: "Admin user's dashboard",
        img: require("./images/rysh/4.png"),
      },
      {
        title: "Example of an email with a report included",
        img: require("./images/rysh/7.png"),
      },
      {
        title: "Creating a report",
        img: require("./images/rysh/5.png"),
      },
    ],
    impact:
      "Having the ability to create reports in the site reduce half of the work and increased time spent on solving the actual issue.",
    learnings: [
      "Having legacy manual methods on a day to day job, generates a double work.",
      "Is difficult to measure efficiency when you have distributed workers and you don't have ways of managing them virtually. A good people management tool is a must nowadays.",
      "Having reports digitized was the best thing they have used until today.",
    ],
  },
];

export default portfolio;
