import profilePic from '../../images/profile.png';

export const homeObjOne = {
  id: "home",
  lightBg: false,
  primary: true,
  imgStart: "",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "About Me",
  link: "#aboutme",
  description:
    "Known as a creative problem solver and supporting team member, I eagerly approach each project with a focus on mobile first design and brand image.",
  headline: "Dylan Rotich",
  lightText: true,
  topLine: "Full-Stack Web Developer",
  img: profilePic,
  alt: "Image of Dylan Rotich",
  start: "",
};

export const homeObjTwo = {
  id: "aboutme",
  lightBg: true,
  primary: false,
  imgStart: "start",
  lightTopLine: false,
  lightTextDesc: false,
  buttonLabel: "View My Projects",
  link: "#projects",
  description:
    "Full-Stack Web Developer incorporating experience in project contribution rooted in archival research from a History background. Quick learner, who earned a certificate in Full-Stack Development from the UC Berkeley Extension, with skills in Responsive Web Design and creating RESTful APIs utilizing the MERN stack.",
  headline: "About Me",
  lightText: false,
  topLine: "Dylan Rotich",
  img: require("../../images/developer.svg").default,
  alt: "Image",
  start: "",
};

export const featuredProjectObj = {
  id: "featured-project",
  lightBg: true,
  lightTopLine: false,
  lightTextDesc: false,
  headline: "Featured Project",
  description: `This Front-End Web application allows users to search songs and create playlists using the Spotify API.
  While the app is live and public, Spotify API access is limited to 25 spotify accounts (Developer Mode). Some functionality will not work unless I manually add your Spotify Account to the approved users list. Please see Demo Video for demonstration`,
  topLine: "Playlist Creator for Spotify",
  imgStart: "",
  buttonLabel: 'More Info',
  link: '#projects'
}

export const projectsObj = {
  id: "projects",
  lightBg: false,
  lightText: false,
};

export const homeObjContact = {
  id: "contact",
  lightBg: true,
  primary: false,
  imgStart: "",
  lightTopLine: false,
  lightTextDesc: false,
  buttonLabel: "Send Message",
  headline: "Contact Me",
  lightText: false,
  topLine: "Social Platforms",
  img: require("../../images/profile.svg").default,
  alt: "Image",
  start: "",
};

export const homeObjResume = {
  id: "resume",
  lightBg: false,
  primary: true,
  imgStart: "start",
  lightTopLine: true,
  lightTextDesc: true,
  buttonLabel: "View Full Resume",
  link: "https://docdro.id/7wTEpU2",
  description:
    "From the Back-End to the Front-End I utilize the MERN stack to build attactive yet functional web applications. I'm always learning new technologies so click the button below to view an up-to-date copy of my resume.",
  headline: "Resume",
  lightText: true,
  topLine: "",
  img: require("../../images/clickHere.svg").default,
  alt: "Image",
  start: "",
};

