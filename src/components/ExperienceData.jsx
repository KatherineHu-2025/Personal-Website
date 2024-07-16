import Lablogo from "../assets/lab_logo.png"; 
import gameImage from "../assets/MyLife.png"
import DavidsonLogo from "../assets/Davidson.png"
import Music from "../assets/music.svg"
import AslLogo from "../assets/ASL.svg"
import iFory from "../assets/iFory.jpg"

const experiences = [
    {
        id: 1,
        title: "Davidson Data Visualization Lab",
        image: Lablogo,
        role: "Student Researcher",
        duration: "May 2024 - Present",
        detailsLink: "Davidson Data Visualization Lab",
        category: "Internship",
        githubLink: "https://github.com/Davidson-Data-Vis-Lab/Serendipitious-Events",
        projectPage: "https://davidson-data-vis-lab.github.io/Serendipitious-Events/",
        description: "I'm working on serendipitous search on live events by designing different visualization tools.",
        technologies: ["D3.js","Leaflet","JavaScript","SQL"]
    },
    {
        id: 2,
        title: "My Life: A 2D Platformer Reflecting Real-Life Choices and Growth",
        image: gameImage,
        role: "Game Developer",
        duration: "Feb 2024 - May 2024",
        detailsLink: "My Life: A 2D Platformer Reflecting Real-Life Choices and Growth",
        githubLink: "https://github.com/KatherineHu-2025/Final-Project-2D-Platform-Game",
        projectPage: "https://play.unity.com/en/games/2cae49f9-0df5-4818-b2c0-94a33557b61b/my-life",
        category: "Project",
        description: "Have you ever imagined that you can choose a different path?",
        technologies: ["C#", "Unity"]
    },
    {
        id: 3,
        title: "Center for Teaching and Learning",
        image: DavidsonLogo,
        role: "Computer Science Tutor & Chinese Tutor",
        duration: "September 2021 - December 2023",
        detailsLink: "Center for Teaching and Learning",
        category: "Experience",
        description: "Embedded Tutor for CSC121: Programming & Problem Solving, CSC321: Analysis of Algorithm",
        technologies: ["Python", "Algorithm","Debugging"]
    },
    {
        id: 4,
        title: "Designing a Classical Music Search and Review Website",
        image: Music,
        role: "Project Lead",
        duration: "November 2023 - December 2023",
        detailsLink: "Designing a Classical Music Search and Review Website",
        githubLink: "https://github.com/KatherineHu-2025/Classcial-Music-Concert-Search-Map-with-Review",
        category: "Project",
        description: "We build a classical music concerts search & review website.",
        technologies: ["SQL", "HTML","CSS","JavaScript","Node.js"],
    },
    {
        id: 5,
        title: "Davidson Research Initiative Summer Research Fellowship",
        image: DavidsonLogo,
        role: "Research Assistant",
        duration: "June 2023 - September 2023",
        detailsLink: "Davidson Research Initiative Summer Research Fellowship",
        category: "Internship",
        description: "We designed a concurrent bucket with lock-free insertion, deletion, and containment operations.",
        technologies: ["Java", "Concurrent Programming"],
    },
    {
        id: 6,
        title: "Recognizing American Signs Language Alphabets Using Machine Learning",
        image: AslLogo,
        role: "Project Lead",
        duration: "April 2023 - May 2023",
        detailsLink: "Recognizing American Signs Language Alphabets Using Machine Learning",
        githubLink: "https://github.com/KatherineHu-2025/Recognizing-ASL-letters-",
        category: "Project",
        description: "We trained k-NN, SVM, and CNN models to recognize American Sign Language.",
        technologies: ["Python", "Scikit-Learn","Keras", "Convolutional Neuron Network"],
    },
    {
        id: 7,
        title: "iFory Inc.",
        image: iFory,
        role: "Data Analyst Intern",
        duration: "May 2022 - August 2022",
        detailsLink: "iFory Inc.",
        category: "Internship",
        description: "I worked as a market analyst to clean, validate, and visualize market data and develop competitor analysis report.",
        technologies: ["Python", "Pandas","Matplotlib"],
    }
];

export default experiences;