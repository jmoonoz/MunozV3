import { v4 as uuidv4 } from "uuid";
import gonz9 from "../../Images/gonz9.png";
import PortfolioV1 from "../../Images/portfolioV1.png";
import PortfolioV2 from "../../Images/PortFolioV2.png";
import ToaStrength from "../../Images/ToaStrength.png";

const projects = [
  {
    id: uuidv4(),
    name: "Portfolio App V1",
    desc: "My first Personal portfolio application, ",
    link: "https://dreamy-mccarthy-16d697.netlify.app/",
    linkName: "Moonoz V1",
    projectLink: "https://github.com/jmoonoz/moonozProfile",
    img: PortfolioV1,
    tools: ["React", "JS", "CSS", "HTML", "Bootstrap"],
  },
  {
    id: uuidv4(),
    name: "Portfolio Web App V2",
    desc: "My revamp round attempt at creating a personal portfolio online.",
    link: "www.moonoz.co",
    linkName: "Moonoz V2",
    projectLink:
      "https://github.com/jmoonoz/website-profolio?tab=readme-ov-file",
    img: PortfolioV2,
    tools: ["React", "Photoshop", "CSS3", "HTML5", "Bootstrap5"],
  },
  {
    id: uuidv4(),
    name: "Gonz 9 Training",
    desc: "Designed and developed a professional website for a gym trainer using Wix Studio. The site features a sleek, modern layout with an intuitive navigation system, service offerings, client testimonials, and a contact form for easy booking. Implemented custom styling and animations to enhance user experience, ensuring a responsive and visually engaging design.",
    link: "https://www.gonz9training.com/",
    projectLink: "https://www.gonz9training.com/",
    linkName: "Gonz9training",
    img: gonz9,
    tools: ["wix", "photoshop", "lightroom"],
  },
  {
    id: uuidv4(),
    name: "Toa Strength",
    desc: "ToaStrength is a strength training high school camp website I designed to highlight an intensive training program for young athletes. Built using WIX, the site features a clean, modern design with an intuitive layout for easy navigation. I enhanced the visuals by editing all images in Photoshop, ensuring a professional and cohesive brand identity. This project showcases my ability to create engaging, functional websites that effectively communicate a program’s mission while delivering a seamless user experience.",
    link: "https://www.toastrength.org/",
    linkName: "Toa Strength",
    projectLink: "https://www.toastrength.org/",
    img: ToaStrength,
    tools: ["WIX", "Photoshop", "css", "html"],
  },
  {
    id: uuidv4(),
    name: "Google Gemini Clone",
    desc: "Google Gemini clone",
    link: "https://main--moonoz-google-gemini-clone.netlify.app/",
    linkName: "Toa Strength",
    projectLink: "https://github.com/jmoonoz/Gemini-Clone",
    img: "https://media.licdn.com/dms/image/v2/D5622AQHTSNbBB6_4Fw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726552525318?e=1745452800&v=beta&t=w4MnZsJIuAq931GAb6RPRc6SRG-VUcFa_negbxeIE1Y",
    tools: ["React", "Nelify", "use-local-storage", "css", "html"],
  },
];
export default projects;
