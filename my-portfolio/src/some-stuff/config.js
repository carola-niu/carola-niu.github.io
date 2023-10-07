// Navigation Bar SECTION
const navBar = {
    show: true,
  };
  
  // Main Body SECTION
  const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Yiyi",
    middleName: "",
    lastName: "Niu",
    message: " making the world a better place ",
    icons: [
      {
        image: "fa-github",
        url: "https://github.com/carola-niu",
      },
      {
        image: "fa-instagram",
        url: "https://www.instagram.com/zigeunerfeder_/",
      },
      {
        image: "fa-linkedin",
        url: "https://www.linkedin.com/in/yiyi-n-6a8252200/",
      },
      {
        image: "fa-twitter",
        url: "https://twitter.com/tautologiefeder/",
      },
    ],
  };
  
  // ABOUT SECTION
  // If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
  //a) your Instagram username
  //      i.e:profilePictureLink:"johnDoe123",
  //b) a link to an hosted image
  //      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
  //c) image in "editable-stuff" directory and use require("") to import here,
  //      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
  //d) If you do not want any picture to be displayed, just leave it empty :)
  //      i.e: profilePictureLink: "",
  // For Resume either provide link to your resume or import from "editable-stuff" directory
  //     i.e resume: require("../editable-stuff/resume.pdf"),
  //         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
  
  const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../some-stuff/Yiyi.jpeg"),
    imageSize: 375,
    message:
      "My name is Yiyi Niu, you can call me Yiyi. I am a final year student at Ludwig Maximilian University of Munich, majoring in Computer Science and Statistics. I am passionate about web development and data science. I am currently looking for a working student position in software engineering.In my free time I would like to kill time by working out.",
    resume: require("../some-stuff/resume_EN_new.pdf"),
  };
  
  // PROJECTS SECTION
  // Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
  //      i.e: reposLength: 0,
  // If you want to display specfic projects, add the repository names,
  //      i.e ["repository-1", "repo-2"]
  const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "carola-niu", //i.e."johnDoe12Gh"
    reposLength: 4,
    specificRepos: [],
  };

  
  // SKILLS SECTION
  const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
      { name: "Python", value: 80 },
      { name: "Java", value: 80 },
      { name: "JavaScript", value: 70 },
      { name: "React", value: 50 },
      { name: "HTML/CSS", value: 50 },
      { name: "MySQL", value: 70 },
      { name: "Git", value: 70 },
      { name: "Docker", value: 50 },
      { name: "Linux", value: 60 },
    ],
    softSkills: [
      { name: "Goal-Oriented", value: 80 },
      { name: "Collaboration", value: 90 },
      { name: "Positivity", value: 75 },
      { name: "Adaptability", value: 85 },
      { name: "Problem Solving", value: 75 },
      { name: "Empathy", value: 90 },
      { name: "Organization", value: 70 },
      { name: "Creativity", value: 90 },
    ],
  };
  
  // GET IN TOUCH SECTION
  const reachOut = {
    show: true,
    heading: "Reach Out to Me",
    message:
      "I'm currently looking for Software Engineering working student opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to mail me at",
    email: "yiyi.niu@campus.lmu.de",
  };
  
  
  // Blog SECTION
  // const blog = {
  //   show: false,
  // };
  
  export { navBar, mainBody, about, repos, skills, reachOut };