import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `I'm Atharva Chauhan, studying Information Technology at Babu Banarasi Das Institute of Technology, set to graduate in 2025. I'm skilled in C, C++, Javascript Data Structures, and Algorithms. I'm also passionate about Amazon Web Services.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges.In addition to my web development skills, I have a strong foundation in Data Structures and Algorithms (DSA).I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2023 - Aug 2023",
    role: "Contributor",
    company: "GirlScript Summer of Code.",
    description: `I contributed to the GirlScript Summer of Code as a part-time, remote participant for 4 months. During this open-source program, I worked on various web development projects, utilizing technologies like jQuery, Bootstrap, HTML, CSS, JavaScript, and React.js. This experience allowed me to collaborate with other developers, enhance my technical skills, and contribute to meaningful projects in the open-source community.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Next.js", "Bootstrap"],
  },

];

export const PROJECTS = [
  {
    title: "Hirrd",
    image: project1,
    description:
      "Developed Hirrd, a full-stack job portal application, enabling recruiters to post jobs and candidates to apply and track applications. Implemented secure authentication using Google and custom email/password via Clerk. Built using ReactJS, Shad CN UI, Supabase, and deployed on Vercel.",
    technologies: ["React","Shadcn UI","Clerk","Supabase"],
    link: "https://hirrd-three.vercel.app/"
  },
  {
    title: "Keeper App",
    image: project2,
    description:
      "Keeper is a web-based application that replicates the core functionalities of Google Keep, designed for users who want to efficiently organize their notes, reminders, and tasks. Built using modern web technologies, the app offers a clean and intuitive interface where users can create, edit, and delete notes with ease.",
    technologies: ["HTML", "CSS", "React"],
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
    title: "Visualize Data using Amazon QuickSight",
    image: project5,
    description:
      "In this project, I created dynamic visualizations by analyzing a dataset of best-selling books from Amazon.com. The data was stored in Amazon S3, and I used Amazon QuickSight to generate visualizations and dashboards. Key tools and technologies include Amazon S3 for cloud storage, Amazon QuickSight for analytics, and CSV and manifest.json files for dataset configuration.",
    technologies: ["AWS S3", "AWS Quicksight"],
    link: "https://github.com/ImAtharva4907/best-selling-books-aws"
  },
  {
    title: "TinDog",
    image: project4,
    description:
      "Tindog is a website that helps dog owners find compatible matches for their pets. It is inspired by the popular dating app Tinder, but designed for dogs. I used HTML, CSS and Bootstrap to create this website.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "https://imatharva4907.github.io/Tindog/"
  },
  {
    title: "Portfolio",
    image: project6,
    description:
      "This is my old portfolio which I have created in my 2nd year of college.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "https://imatharva4907.github.io/My-PORTFOLIO/"
  },
];


export const CONTACT = {
  address: " Lucknow,U.P ",
  phoneNo: "+91 8299752388 ",
  email: "akashsingh4907@gmail.com",
};
