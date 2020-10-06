import React from "react";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import FileOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import LaptopIcon from "@material-ui/icons/Laptop";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import CloudIcon from "@material-ui/icons/Cloud";

const portfolio = [
  {
    protected: true,
    project_id: "1",
    title: "Better Processes",
    company: "Betterware",
    image: require("./images/better/betterware.png"),
    year: "2020",
    short_desc: `A blind jump into a 3m deep swimming pool.`,
    desc: `The company is dedicated to do sales through a catalog, they have thousands of people selling innovative Chinese made products and it is growth velocity is amazing. Their rapid growth left them into a
     big problem, a legacy problem; how might they keep growing if they are dragging a legacy system
     that due to the always-changing technology world had become from an innovative idea into a hard
     to innovate system?`,
    my_role: [
      "Ux Design",
      "Prototyping",
      "UX Research",
      "Usability Testing",
      "UI Design",
      "Information Architecture",
    ],
    problem: `They wanted to migrate to the microservices paradigm and break the monolithic user experience into the different
      types of users. To estimate the magnitude of this effort I will add some numbers: We were a group of 6 designers that
      audited 40% of the platform, we optimize the 10 main processes and we ended up with approximately 500 user stories to develop. 
      We only were staffed for 8 weeks, time framed our challenge.`,
    goals: [
      "Design the user experience and make it personalized to each type of user defined by personas.",
      "Integrate their previous research with our vision to balance business and user needs.",
      "Make the design plan actionable for the microservices migration plan.",
      "Try to cover as much as posible with the given timeframe.",
    ],
    research_desc: `Certainly we needed to first understand the business model nad the previous customer research made by marketing, thus, we conducted a series of workshops with the client to understand the magnitude of the challenge. I participated from the brand distillation,
      the customer journey mapping, the user and stakeholders interviews, till the prioritization of features. Initially, we were assisting on-site the first weeks, unfortunately, the COVID-19 outbreak
      lead us to remote which give us an extra level of difficulty.`,
    research: [
      {
        title: "Customer and stakeholders interviews",
        icon: <GroupOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "On Site Visits and remote sessions",
        icon: <MapOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Concept testing",
        icon: <CloudIcon fontSize="large" color="primary" />,
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
          that is why they need a custom ROBUST experience.`,
      },
      {
        title: `I need an up to date version of the information on the application to not get
        into trouble when it comes to bill.`,
        desc: `This is why the whole environment is going to be migrated to microservices to disengage dependencies,
            and parallelize processes in real-time.`,
      },
    ],
    solution: `After exploring the problem space through different approaches, we started ideating in a collaborative way.
      The team decided to divide the experience into three perspectives: Associate, Distributor, and Director. This three experiences will map to each type of user as well,
      they will have access to specifically optimized processes of the platform depending on their needs, in contrast to what they originally had:
      One single experience for all kinds of users. I lead the SiteMap To-Be effort, this gave us a holistic path to the final product. With this map in mind, 
      we divided efforts by flows and stater working with them, introducing the user perspective on each one. Finally,
      we validate them with developers and stakeholders to start prototyping and estimating the effort into stories.`,
    development: [
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
    impact: [
      `We improved the whole experience of each user, breaking into three the whole information architecture 
    and reutilizing the microservices architecture defined by development. This helps the user to exploit what they like to do
      and provides custom help to bottlenecks.`,
      "With the parallelization of processes and the distributed architecture, we achieved increasing the confidence of the system the user-perceived as low.",
      "We set the foundations for a bigger growth to come for the company",
    ],
    learnings: [
      "I learned how difficult is to design and estimate for systems that are enormous and legacy.",
      "This is my first project as a former user experience designer, so I learned the day to day as a designer.",
      "There were problems that had to do with the service design per se, after going to a digital solution first, we need to analyze the service.",
    ],
  },
  {
    protected: false,
    project_id: "2",
    title: "Think better bookkeeping",
    year: "2019",
    company: "TaxLab",
    image: require("./images/tax/tax.jpg"),
    short_desc: "Being a designer without being actually a designer.",
    desc:
      "TaxLab is a company founded by attorneys at Bismark Tax, Inc., a law firm that specializes in tax resolution cases. The startup is simplifying tax preparation for small and medium sized businesses through an online platform that clasifies your incomes and expenses for you.",
    my_role: [
      "UI Design",
      "Prototyping",
      "Front End Developer",
      "Information Architecture",
    ],
    problem:
      "I joined the team as Software Engeenier, but formally, this was my first design job becasue one of my endeavors consisted on designing the payment section to enable the business model monitization. The product owner had already an idea of how payment enrollment was going to work, with this in mind, I decided to start empathizing with the product owner, take a deep dive into the UX documentation, and to work closely with the PO to materialize his ideas.",
    goals: [
      "Create a practical and trasnparent payment section.",
      "Integrate Stripe as part of the new payment user flow.",
      "Materialize the business model inside the application.",
      "Achieve this whotout being a formal designer.",
    ],
    research_desc:
      "After having a deep sense of the business model TaxLab had, the potential risks associated, and the goals TaxLab was pursuing, I decided to utilize the UX research left by the UX Lead and create the journey for selecting a subscription plan. Taking into account that the feature required the most secure channel available we decided to integrate Stripe and delegate the payment process to this third party. In this way, the complexity of my task decreased considerably to just designing the payment methods section.",
    research: [
      {
        title: "Stakeholder interview",
        icon: <GroupOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Information Architecture",
        icon: <AccountTreeOutlinedIcon fontSize="large" color="primary" />,
      },
      {
        title: "Business Model Research",
        icon: <FileOutlinedIcon fontSize="large" color="primary" />,
      },
    ],
    research_img: [
      {
        title: "Designing the billing model ",
        img: require("./images/tax/5.png"),
      },
      {
        title: "Stripe integration",
        img: require("./images/tax/7.png"),
      },
    ],
    customer: [
      {
        title: "Freemium + Subscription model?",
        desc:
          "The users could subscribe without any charge, if they wanted further more they needed to purchase a plan.",
      },
      {
        title: "I don't want to be charged without noticing it.",
        desc:
          "There was a major worry from the user side to be charged without noticing it. A label describing the free days remaining was displayed for user information.",
      },
      {
        title: "I want to add my card information trough a secure site.",
        desc:
          "A Stripe integration was thought for securing the channel and integrate the payment flow.",
      },
    ],
    solution:
      "The big challenge when designing a payment page is nailing trust into users that their information is secure and that they will be charged for what they wanted to. What is the information the audience is expecting to see? What questions do they want to answer? How can we mitigate their uncertainty and encourage them to contract the plan?. To answer these questions, the team conducted a competitive analysis, and ideated different structures of information, until we finally agreed on providing the most relevant information and integrate Stripe.",
    development: [
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
    impact: [
      "Simplify Bookkeeping and Taxes for SMBs",
      "The ThynkBooks AI was found to be 92% accurate in correctly classifying transactions.",
      "Initial testing showed that the software reduced the time spent completing tax forms from an average of 14 hours to 20 minutes",
    ],
    learnings: [
      "Working closely with the client is not an option, if you want to ensure your understanding on the business.",
      "Having a freemiun plan is always a good idea to let your product join the market.",
      "Sometimes integrations with well known services are best that redesigning the wheel from cero.",
    ],
  },
  {
    protected: false,
    project_id: "3",
    title: "My first job",
    year: "2018",
    company: "Rysh Electronics",
    short_desc: "Freelancing like a unicorn of unicorn's.",
    desc:
      "Rysh Electronica is a national company that offers a report and repair service for trains' ILPAC(semaphores) 24/7. Their service works as follows; they send  a group of persons on-site to repair electronic issues, these issues are written down into a paper report that is sent to the manager via WhatsApp photo.",
    my_role: [
      "Design",
      "Data Architecture",
      "Project Management",
      "Full Stack Development",
      "Technical Writer",
    ],
    problem:
      "The repairments happen at any time during the day, they are spontaneous, and some of them are between 8-10 hours distance from the office. Since there is no control over the reports and repairment personnel some data get lost, others don’t arrive with the data needed or verified and paper is not the best practice to store valuable assets this lead to misunderstandings and profit loss.",
    image: require("./images/rysh/rysh.jpg"),
    goals: [
      "Avoid misunderstandings regarding the veracity of data.",
      "Decrease the time spent manually writing, sending and storing reports by automating these chores.",
      "Designing a simple but functional user interface.",
      "Establish trust and credibility to our client's customers.",
    ],
    research_desc:
      "I needed to understand the service as a whole. I made a service blueprint analysis, without this I wouldn't have understood how can I digitalize the specific step of the service regarding reports. This blueprint lead us to get the user journey we needed and ideate from there the solution.",
    research: [
      {
        title: "Customer/Stakeholder interviews",
        icon: <GroupOutlinedIcon fontSize="large" color="primary" />,
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
        title:
          "Sorry I can't print another report, I'm right now on Chihuahua and I haven't lunched.",
        desc:
          "The reporter is always out of office, the reporter just sends a photo of the paper report and some photos regarding the train issue, they don't have a formal training to know what to do on risky situations. Digital creation of a report facilitate the job.",
      },
      {
        title:
          "I don't know which reporters are out and where we sent many reporter's every day at different places through the Mexican Republic.",
        desc:
          "Reporting wasn't the only problem their service was having, but also managing human resources. Adding the personnel to the database and providing information about them helped the manager to know which personrs were asigned to wich group and where.",
      },
    ],
    solution:
      "After exploring the problem space through different approaches, we started ideating in a collaborative way. I decided to start defining the information architecture that also models the database. After having the information architecture, I started to define some personas and user journeys through the application to define the main user flows and finally using the user flows to translate them into mocks for creating and socializing the application with the stakeholders.",
    development: [
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
    impact: [
      "Having the ability to create reports in the site reduce half of the work and increased time spent on solving the actual issue.",
      "We gave people the opportunity to correct and a door to exit from dead ends commonly encountered for using paper reports",
    ],
    learnings: [
      "Having manual methods on a day to day job generates a double work and encounters dead ends more frequently than the non-manual ones.",
      "Is difficult to measure efficiency when you have distributed workers and you don't have ways of managing them remotely. A good people management tool is a must nowadays.",
      "Having reports digitized was the best thing they have used until today.",
      "For me, was the trigger for a learning curve on how to do product design and management that I keep learning on nowadays",
    ],
  },
  {
    protected: false,
    project_id: "4",
    title: "Machine learning taking over",
    year: "2020",
    company: "FactSet",
    short_desc: "A story of humans in the loop.",
    desc:
      "FactSet is a data-driven company. They generate custom solutions using the financial, market, companies, and trending data. Their job is to curate raw data, process it, and generate structured data that is the input of their solutions with the help of machine learning algorithms.",
    my_role: [
      "UX Research",
      "Prototyping",
      "UI Design",
      "UX Design",
      "Usability Testing",
      "MVP Development",
      "Information Architecture",
      "Content Design",
      "Frontend - Design proxy",
    ],
    problem:
      "Since they are adopting machine learning technology for their daily job, there is a need to know: How to scale this migration in all human-powered departments and still have humans in the loop?. Our job as designers was to generate a scalable enough interface that contemplates machine learning on its way but still has humans to increment the ML data confidence.",
    image: require("./images/factset/factset.png"),
    goals: [
      "Designing a generic enough interface that could be replicable on different content teams.",
      "Leading with a short time scope to come with a scalable solution yet productive.",
      "Designing a process that contemplates humans by now, but considers getting rid of it in the future.",
      "Establish trust and credibility with highly technical stakeholders.",
    ],
    research_desc:
      "It was a complex environment in which the solution must live. We needed to balance scalability, feasibility, viability, and desirability. In order to make sure this solution was going to be used by the end-user we were tackling desirability as the main goal and scalability as the second. We did interviews with the product owner, the content director, and the data reviewers. We found two principal personas and 2 secondary personas. We focused on the first two in order to generate a productive solution that the company could launch, this ensured the company progression to scalability but without the need for pausing business.",
    research: [
      {
        title: "Customer/Stakeholder interviews",
        icon: <GroupOutlinedIcon fontSize="large" color="primary" />,
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
    research_img: [
      {
        title: "Persona and Scenario",
        img: require("./images/factset/1.png"),
      },
      {
        title:
          "The user journey of a content collector, and their emotional map",
        img: require("./images/factset/2.png"),
      },
    ],
    customer: [
      {
        title: "I don't want to lose my job.",
        desc:
          "When you are facing the fact machine learning can do your job, even if you are the top performer you feel endangered. We needed to make the user feel he is still an important part of the cycle, given that without the user the ML data confidence couldn't get better.",
      },
      {
        title: "The process stills pretty much manual to be scalable.",
        desc:
          "The evolution of the content reviewer would be the content curator, this is, people now didn't have to worry to go collect data and make assertions on whether it is relevant or correct. They now focus on verifying that the assertion made by the ML algorithm is indeed correct.",
      },
    ],
    solution:
      "Once we have evaluated your possibilities and limitations, we came up with 2 solutions one for the short term and one for the long term, the strategy behind this is that the short term solution could be obtained using the long term solution, in this way, efforts wouldn't be wasted. The long-term solution involved an internal app generator, in this way you automate the rapid creation of interfaces for hundreds of small content teams while the short-term solution was a future output of that big solution. The short term solution was just one of the most immediate content team interface that needed to be changed to include ML inputs. Due to the budget, the client decided to go for the short-term goal and go for the long term sequentially.",
    development: [
      {
        title: "Content Model",
        img: require("./images/factset/6.png"),
      },
      {
        title: "Documented Design System",
        img: require("./images/factset/4.png"),
      },
      {
        title: "MVP Development",
        img: require("./images/factset/7.png"),
      },
      {
        title: "Userflows and Wireframming",
        img: require("./images/factset/5.png"),
      },
    ],
    impact: [
      "Having a plan for scaling while not losing user desirability by including humans in the loop.",
      "Incredible positive reaction from users when they tested the application.",
      "What’s the best form of customer feedback? Renewals and expansion projects!",
    ],
    learnings: [
      "Even when projects look heavily inclined to the machine side, there is always a human part that is involved and you need to take care of it.",
      "Sometimes you have to pivot very quickly responding to customers' feedback. This is to be agile.",
      "Having an honest but clear customer is the best thing you can encounter in your job. You can avoid wasting time and misunderstandings.",
    ],
  },
  {
    protected: false,
    project_id: "5",
    title: "My soap brand",
    year: "2020",
    company: "Gabs",
    short_desc: "Freelancing like a unicorn of unicorn's.",
    desc:
      "Rysh Electronica is a national company that offers a report and repair service for trains 24/7. Their service works as follows; they send  a group of persons on site to repair electronical issues, this issues are wrote down into a paper report thta is sent to the manager on the central ofice.",
    my_role: [
      "UX Researcher",
      "Prototyping",
      "UX Design",
      "Data Architecture",
      "Project Manager",
      "Full Stack Developer",
      "Technical Writer",
    ],
    problem:
      " The repairments happen at any time during the day, they are spontaneous, and some of them are between 8-10 hours distance from the office, since there is no control over the reports some get lost, others doesn’t arrive with the data needed and there is not enough space to store them this lead to misunderstandings.",
    image: require("./images/soaps/soaps.jpg"),
    goals: [
      "Manage the resources needed on each report.",
      "Decrease the time spent manually writing, sending and storing reports.",
      "Designing a simple but functional UI.",
      "Establish trust and credibility to client's customers.",
    ],
    research_desc:
      "It was a complex environment in which the solution must live. We needed to balance scalability, feasibility, viability, and desirability. In order to make sure we were tackling desirability and scalability to ensure this solution was going to be used by the end-user, we did interviews with the product owner, the content director, and the data reviewers. We found two principal personas and 2 secondary personas. We focused on the first two in order to generate a productive solution that the company could launch, this ensured the company progression to scalability but without the need for pausing business.",
    research: [
      {
        title: "Customer/Stakeholder interviews",
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
    research_img: [
      {
        title: "List of possible issues and their acronyms",
        img: require("./images/soaps/2.jpg"),
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
    development: [
      {
        title: "Final deliverable with user's guide",
        img: require("./images/soaps/6.jpg"),
      },
      {
        title: "Admin user's dashboard",
        img: require("./images/soaps/4.jpg"),
      },
      {
        title: "Example of an email with a report included",
        img: require("./images/soaps/7.jpg"),
      },
      {
        title: "Creating a report",
        img: require("./images/soaps/5.jpg"),
      },
    ],
    impact: [
      "Having the ability to create reports in the site reduce half of the work and increased time spent on solving the actual issue.",
    ],
    learnings: [
      "Having legacy manual methods on a day to day job, generates a double work.",
      "Is difficult to measure efficiency when you have distributed workers and you don't have ways of managing them virtually. A good people management tool is a must nowadays.",
      "Having reports digitized was the best thing they have used until today.",
    ],
  },
];

export default portfolio;
