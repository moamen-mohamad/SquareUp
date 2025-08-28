
import "./AboutUS.css";
import { useEffect, useState } from "react";
import RDContainer from "../../components/RDContainer/RDContainer";
import { Outlet } from "react-router-dom";
import SaTodaySquareUp from "../../components/SaTodaySquareUp/SaTodaySquareUp";
import SaAboutSquareUp from "../../Components/SaAboutSquareUp/SaAboutSquareUp";
import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection";
import { motion } from "framer-motion";

const defaultAbout = [
    {
        id: 1,
        number: "01",
        title: "Design",
        description:
            "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.",
    },
    {
        id: 2,
        number: "02",
        title: "Engineering",
        description:
            "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.",
    },
    {
        id: 3,
        number: "03",
        title: "Project Management",
        description:
            "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.",
    },
    {
        id: 4,
        number: "04",
        title: "Collaboration",
        description:
            "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.",
    },
    {
        id: 5,
        number: "05",
        title: "Client-Centric Approach",
        description:
            "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.",
    },
    {
        id: 6,
        number: "06",
        title: "Driving Success",
        description:
            "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.",
    },
];

const About = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("cardsAbout");
        if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed.length > 0) {
                setCards(parsed);
                return;
            }
        }
        setCards(defaultAbout);
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="lm_whitespacing_x"
        >
            <MmHeadOfSection
                title="About Us"
                subtitle="Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
                bgImage="/SquareUp/assets/images/head-bg-1.jpg"
            />

            <SaAboutSquareUp
                title="About SquareUp"
                subtitle="SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
                bgImage="/SquareUp/assets/images/head-bg-5-bw.png"
                icone="/SquareUp/assets/images/Logo-colorfull.svg"
                line1="/SquareUp/assets/images/line-left.svg"
                line2="/SquareUp/assets/images/line-right.svg"
                line3="/SquareUp/assets/images/line-up.svg"
                line4="/SquareUp/assets/images/Line-down.svg"
            />

            <div>
                <h1 className="ourStory">Our story</h1>
            </div>

            <RDContainer Cards={cards} titleColor="var(--CardTitleGreenColor)" />

            <Outlet />

            <SaTodaySquareUp
                icon="/SquareUp/assets/images/Logo.svg"
                title="Today, SquareUp Continues to Thrive as a Leading Digital Product Agency....."
                subtitle="Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life."
                subtitleCta="Welcome to SquareUp"
                highlightCta="Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation."
                linkTo="/contact"
                buttonText="Start Project"
            />
        </motion.div>
    );
};

export default About;