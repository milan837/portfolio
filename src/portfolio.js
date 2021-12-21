
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Milan Shrestha",
  title: "Hi there, I'm Milan Shrestha",
  subTitle: emoji("A passionate Software Design Engineer 🚀 having an experience of building (Mobile, Web & PC) software with (Java & Kotlin), JavaScript, Reactjs, Nodejs, React Native, MYSQL, MongoDB, AWS services and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/0ByIFnTjPbxe5cnJJOVNrOTJkWVNlN2tSdTJETTRPbGJ5VTZV/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/milan837",
  linkedin: "https://www.linkedin.com/in/milan-shrestha-545ba1145/",
  gmail: "milanshrestha837@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100005780642091",
  instagram:"https://www.instagram.com/anill_shrestha/",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section
const skillsSection = {
  title: "What i love to do",
  subTitle: "Crazy full stack (MOBILE & WEB) developer who wants to explore every tech stack.",
  skills: [
    emoji("⚡ Develop highly interactive mobile applications for Android (JAVA & Kotlin)"),
    emoji("⚡ Develop highly interactive mobile applications for both Android & IOS (REACT NATIVE)"),
    emoji("⚡ Develop highly interactive web applications (REACT Js)"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Develop Rest api using Node.js and MYSQL"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS ")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },,
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MYSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "XD",
      fontAwesomeClassname: "fab fa-adobe"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "R.R. Institute of Technology (Bangalore)",
      logo: require("./assets/images/rrrr.jpeg"),
      subHeader: "Bachelor in computer science engineering",
      duration: "2016 - 2019",
      desc: "",
      descBullets: [
        
      ]
    },
    {
      schoolName: "R.R. Institute of Technology (Bangalore)",
      logo: require("./assets/images/rrrr.jpeg"),
      subHeader: "Diploma in computer science & engineering",
      duration: "2013 - 2016",
      desc: "",
      descBullets: [
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React Native cross platform mobile app development (ANDROID & IOS)",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "AWS services (EC2, AWS Amplifiy, S3, Route 53, Simple Notification Service, Simple Email Service, CodeCommit, CodePipeline,Elastic Beanstalk,MQTT)",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Firebase services (Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Cloud Messaging.)",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Node js & MYSQL, mongoBD (Backend Development)",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "React js & (Ant Design, Material UI) (Web Development)",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },    {
      Stack: "UI/UX (Figma, Adobe XD, Framer )",  //Insert stack or technology you have experience in
      progressPercentage: "85%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "PHP & MYSQL (Slim framework) ",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "HTML, CSS, Jquery, AJAX, Javascript",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Agile software development",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    
  ]
};


// Your top 3 work experiences
const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      link:"https://iamalive.app/index.html",
      role: "Senior Mobile Application Engineer (Android & IOS)",
      company: "Alive",
      companylogo: "https://play-lh.googleusercontent.com/bHCMzLniUoSlUDtUZtGqzKdOg1IGTkjd0TX29HLe6Gzlxo0G_XhOkg9aV9oHF0BUpaQ=s360-rw",
      date: "Nov 2020 – June 2021",
      desc:"Alive is created for us to be more social, to have more fun, to spend more time with our friends."
    },
    {
      link:"https://bit.ly/smartshaalaa",
      role: "Founder & Developer",
      company: "Smartshaalaa",
      companylogo: "https://lh3.googleusercontent.com/eoT0s_3p-nX5Kco4IXf2ri9gJcnMyUPfo7fcpA6hS7mUf-uZxBvEE-1_UKWDxsYIEsgV=s360-rw",
      date: "July 2020 – Present",
      desc:"Smartshaalaa helps all retailers in managing (inventory management, invoicing, billing, storing them in the cloud for free) and helps to grow their business faster."
    },
    {
      // link:"https://bit.ly/mydukkan",
      link:"https://mydukanretailer.com/",
      role: "Mobile Application Developer",
      company: "MyDukan",
      companylogo: "https://lh3.googleusercontent.com/ObQkr9RqkijQO7N49XY7wJRxrVRq9yD25nov-Rgjly_f8DWL_WBUbFdYMO5eaC22ayNE=s360-rw",
      date: "July 2019 – July 2020",
      desc: "Digiretail provides technology first solutions to SMBs for efficient supply-chain management by making them market aware with data trends, CRM and Product lifecyle managemnet."
    },
    {
      link:"https://bit.ly/kloh1aa",
      role: "Software Engineer Intern",
      company: "Kloh",
      companylogo: "https://lh3.googleusercontent.com/4ABE8NjsPTdVMH5wc5-bdT_7IppgT6_6DyVUwiVMFcF2YUAUzUEVZxO60FV2QFaWSuU=s360-rw",
      date: "Jun 2018 – Aug 2018",
      desc: "KLOH is the easiest way to learn a new hobby class near you. From Salsa to Horse-Riding, from Swimming to Pottery, you can learn anything on Kloh."
    },
    {
      link:"https://bit.ly/voice-news",
      role: "Creator (Developer)",
      company: "Voice News",
      companylogo: "https://lh3.googleusercontent.com/0oLpzUXLY85MabiDuKq_OSYDOnkHYr7KBzhM8zQmUZ-SWSpXCk4Kbe03Lo1TPGM2oq8=s360-rw",
      date: "2018",
      desc: "Voice News is an android application that helps the peoples to surf the news in different way than the other application."
    },
    {
      link:"https://bit.ly/myoutfitsa",
      role: "Creator (Developer)",
      company: "My Outfits",
      companylogo:"https://lh3.googleusercontent.com/SSmb9Xrbb2VCMwsgCVv5UupOindB00gFC9uFX9siUqyE-pBdpG0ujSZlE0ZhQDkL39o=s360-rw",
      date: "2018",
      desc:"My Outfits app is an platform where user can make their fashion collection and save it online in different categories."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/smartshaalaa_icon.svg"),
      link: "http://smartshaalaa.com/",
      company: "Smartshaalaa",
      desc: "Inventory Management, Invoicing(Billing), & Online Store.",
      date: "",
      companylogo: require("./assets/images/smartshaalaa_icon.svg"),
      role: "Founder & Software developer",
      descBullets: []
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8050078113",
  email_address: "milanshrestha837@gmail.com"
};

//Twitter Section

const twitterDetails = {
  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
