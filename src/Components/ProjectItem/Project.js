import { v4 as uuidv4 } from "uuid";
import gonz9 from "../../Images/gonz9.png";
import PortfolioV1 from "../../Images/portfolioV1.png";
import PortfolioV2 from "../../Images/PortFolioV2.png";
import ToaStrength from "../../Images/ToaStrength.png";
import Netflix from "../../Images/Netflix-Clone.png";

const projects = [
  {
    id: uuidv4(),
    name: "Portfolio App V1",
    desc: "This was the first version of my personal portfolio, designed to introduce myself as a front-end developer and showcase my initial projects. Built using HTML5, CSS3, and JavaScript, the site focused on clean layout, simple navigation, and responsive design principles. It served as my starting point for learning how to build and structure websites from scratch, while also helping me get comfortable with deploying projects and building a personal brand online. Although basic in design compared to my current work, this portfolio represents the foundation of my growth as a developer and highlights my early commitment to learning and improving.",
    link: "https://dreamy-mccarthy-16d697.netlify.app/",
    linkName: "Moonoz V1",
    projectLink: "https://github.com/jmoonoz/moonozProfile",
    img: PortfolioV1,
    tools: ["React", "JS", "CSS", "HTML", "Bootstrap"],
  },
  {
    id: uuidv4(),
    name: "Portfolio Web App V2",
    desc: "This second version of my personal portfolio was created to reflect my growth and the new front-end skills I’ve acquired. I rebuilt the site from the ground up using React for dynamic components, HTML5 and CSS3 for clean structure and custom styling, and React-Bootstrap to speed up development with responsive UI elements. I focused on improving the user experience through smoother navigation, better layout structure, and mobile-first design.The project showcases my ability to design and develop a modern, professional website, while also highlighting my most recent work and projects. It’s fully deployed on Netlify for fast performance and continuous deployment.",
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
    tools: ["wix", "photoshop", "lightroom "],
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
    desc: "This mock website is a front-end recreation of Google’s Gemini AI platform, developed to demonstrate my ability to convert a complex, modern user interface into functional, production-quality web code. I used React to structure the site with reusable components, ensuring clean architecture and scalability. The layout and styling were built with HTML5, CSS3, and Bootstrap, allowing for a responsive and visually accurate replica of the original Gemini design. To enhance interactivity, I integrated Google’s API, simulating real-time responses and demonstrating my experience with asynchronous data handling and third-party API integration in React. Every detail was carefully crafted to align with the original UI, from smooth component transitions to consistent spacing and typography. The site is fully mobile-friendly, designed with a mobile-first approach and tested across various screen sizes to ensure a seamless user experience on all devices. Hosted on Netlify, it benefits from fast performance, continuous deployment, and global accessibility. This project highlights my ability to interpret and recreate professional-grade UI/UX, integrate external APIs, and deliver polished, responsive web experiences—making it a key piece in showcasing my front-end development capabilities.",
    link: "https://main--moonoz-google-gemini-clone.netlify.app/",
    linkName: "Gemini Clone App",
    projectLink: "https://github.com/jmoonoz/Gemini-Clone",
    img: "https://media.licdn.com/dms/image/v2/D5622AQHTSNbBB6_4Fw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1726552525318?e=1745452800&v=beta&t=w4MnZsJIuAq931GAb6RPRc6SRG-VUcFa_negbxeIE1Y",
    tools: ["React", "Nelify", "use-local-storage", "css", "html"],
  },
  {
    id: uuidv4(),
    name: "Netflix Clone app",
    desc: "",
    link: "https://munoz-movie-clone.netlify.app/",
    linkName: "Netflix clone App",
    projectLink: "https://github.com/jmoonoz/Netflix-Clone",
    img: Netflix,
    tools: ["CSS3", "Nelify", "HTML5", "AXIOS", "REACT", "react-youtube"],
  },
];
export default projects;
