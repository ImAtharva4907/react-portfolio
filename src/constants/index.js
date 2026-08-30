import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/algoReview.jpg";
import pd1Img from "../assets/Certifications/PD1.jpeg";


export const HERO_CONTENT = `I'm Atharva Chauhan, currently working at cccinfotech, where I build solutions on the Salesforce platform with a focus on development, automation, and integrations. I work with Apex, SOQL, Lightning Web Components, Salesforce Flow, and REST APIs to develop scalable solutions, automate business processes, and connect Salesforce with external systems. I'm also expanding my expertise in Salesforce Agentforce and AI-powered automation to build smarter business solutions.`;


export const ABOUT_TEXT = `My journey in technology began with a curiosity about how things work and a passion for building solutions from scratch. I started with programming, web development, and Data Structures & Algorithms, exploring technologies such as C++, JavaScript, React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. Over time, my interests led me into the Salesforce ecosystem, where I found an opportunity to combine programming, problem-solving, and business requirements to create practical solutions.
I enjoy taking on challenging problems, learning new technologies, and continuously improving my skills. I’m particularly interested in exploring how emerging technologies like AI and Agentforce can transform the way businesses work. Outside of coding, I enjoy staying active, exploring new ideas, and keeping up with technology.`;

export const EXPERIENCES = [
  {
    year: "Apr 2025 - Present",
    company: "cccinfotech",
    location: "Lucknow, Uttar Pradesh, India · On-site",
    roles: [
      {
        title: "Software Engineer",
        period: "Oct 2025 – Present",
        description:
          "Working on Salesforce development across Sales Cloud and Service Cloud, delivering end-to-end solutions based on business requirements. Developing scalable backend logic using Apex Classes, Triggers, and Asynchronous Apex including Batch, Queueable, and Future methods. Building responsive and reusable Lightning Web Components (LWC) integrated with Apex controllers. Also working on REST API integrations and Salesforce configuration including Flows, Validation Rules, Approval Processes, Reports, Dashboards, Profiles, and Permission Sets.",
      },
      {
        title: "Software Engineer Trainee",
        period: "Apr 2025 – Sep 2025 · 6 mos",
        description:
          "Developed a strong foundation in Salesforce development and administration through hands-on learning, practical implementation, and exposure to real-world business requirements. Worked with Salesforce automation, Apex, SOQL, LWC, data management, and platform configuration while gaining experience in understanding and implementing Salesforce-based solutions.",
      },
    ],
    technologies: [
      "Salesforce",
      "Apex",
      "SOQL",
      "LWC",
      "Sales Cloud",
      "Service Cloud",
      "Salesforce Flow",
      "REST API",
      "Asynchronous Apex",
    ],
  },
  {
    year: "May 2023 - Aug 2023",
    role: "Contributor",
    company: "GirlScript Summer of Code.",
    description: `I contributed to the GirlScript Summer of Code as a part-time, remote participant for 4 months. During this open-source program, I worked on various web development projects, utilizing technologies like jQuery, Bootstrap, HTML, CSS, JavaScript, and React.js. This experience allowed me to collaborate with other developers, enhance my technical skills, and contribute to meaningful projects in the open-source community.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Next.js", "Bootstrap"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    date: "July 27, 2026",
    credentialId: "7970403",
    image: pd1Img,
    description:
      "Demonstrates proficiency in Salesforce programmatic development, including Apex, SOQL, data modeling, platform logic, testing, and Lightning development.",
    skills: ["Apex", "SOQL", "LWC", "Data Modeling", "Platform Logic", "Unit Testing"],
    verificationLink:
      "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=6aNcv+uWGI3lw7lQ4iM5m6WUZVUeawP+qvA72GJEUG4Q0Wj52O+7ZeWYteBpWCe1",
  },
];

export const PROJECTS = [
  {
    title: "Hirrd",
    image: project1,
    description:
      "Developed Hirrd, a full-stack job portal application, enabling recruiters to post jobs and candidates to apply and track applications. Implemented secure authentication using Google and custom email/password via Clerk. Built using ReactJS, Shad CN UI, Supabase, and deployed on Vercel.",
    technologies: ["React.js", "Shadcn UI", "Clerk", "Supabase"],
    link: "https://hirrd-three.vercel.app/"
  },
  {
    title: "Keeper App",
    image: project2,
    description:
      "Keeper is a web-based application that replicates the core functionalities of Google Keep, designed for users who want to efficiently organize their notes, reminders, and tasks. Built using modern web technologies, the app offers a clean and intuitive interface where users can create, edit, and delete notes with ease.",
    technologies: ["HTML", "CSS", "React.js"],
    link: "https://atharvakeeper.netlify.app/"
  },
  {
    title: "Voicemaker",
    image: project3,
    description:
      "Developed a web app that converts text into natural-sounding speech using AWS Polly. In Phase 1, I built the core functionality with React.js, enabling text input, speech generation, playback, and audio download. In Phase 2, I hosted the app on AWS S3, using IAM for access control, and deployed it as a static website accessible via an S3 endpoint URL.",
    technologies: ["React.js", "AWS Polly", "AWS S3", "IAM"],
    link: "https://github.com/ImAtharva4907/ImAtharva4907-Text-To-Speech-aws-hosting"
  },
  {
    title: "Algoreview",
    image: project6,
    description:
      "Algo-Genius is an AI-powered code review tool that helps developers analyze code, optimize algorithms, and understand time-space complexity. Powered by Google's Gemini Model Flash 2.0, it enhances AI-driven analysis with memory, reasoning, and planning for efficient task completion.",
    technologies: ["React.js", "Shadcn UI", "Gemini 2.0 Flash", "Node.js", "Express.js"],
    link: "https://algo-genius.vercel.app/"
  },
  {
    title: "Visualize Data using Amazon QuickSight",
    image: project5,
    description:
      "In this project, I created dynamic visualizations by analyzing a dataset of best-selling books from Amazon.com. The data was stored in Amazon S3, and I used Amazon QuickSight to generate visualizations and dashboards. Key tools and technologies include Amazon S3 for cloud storage, Amazon QuickSight for analytics, and CSV and manifest.json files for dataset configuration.",
    technologies: ["AWS S3", "AWS Quicksight"],
    link: "https://github.com/ImAtharva4907/best-selling-books-aws"
  },

];


export const CONTACT = {
  address: "Lucknow, U.P",
  email: "akashsingh4907@gmail.com",
};

