import './DashBoard.css'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LMServicesCrad from "../../Components/LMServicesCrad/LMServicesCrad"
import LMWhyChooseCrad from "../../Components/LMWhyChooseCrad/LMWhyChooseCrad"
import RDProcessPageCrud from '../../components/RDProcessPageCrud/RDProcessPageCrud'
import RDAboutPageCrud from '../../Components/RDAboutPageCrud/RDAboutPageCrud'
import MmContactUsDashboard from "../../Components/MmContactUsDashbord/MmContactUsDashboard"
import MmWorkDashboard from "../../Components/MmWorkDashboard/MmWorkDashboard"
import HSH_CardCRUD from "../../Components/HSH_CardCRUD/HSH_CardCRUD";
import HSH_FAQCRUD from "../../Components/HSH_FAQCRUD/HSH_FAQCRUD";


const defaultFAQ = [
    {
        question: "What services does SquareUp provide",
        answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
        question: "How can SquareUp help my business?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "What industries does SquareUp work with?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "How long does it take to complete a project with SquareUp?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "Do you offer ongoing support and maintenance after the project is completed?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "Can you work with existing design or development frameworks?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "How involved will I be in the project development process?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    },
    {
        question: "Can you help with website or app maintenance and updates?",
        answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
    }
];

const defaultCards = [
    {
        id: 1,
        title: "SquareUp has been Instrumental in Transforming our Online Presence.",
        description:
            "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",

        image: "/SquareUp/assets/images/John.jpg",
        name: "John Smith",
        job: "CEO of Chic Boutique",
        url: "https://focal-x.com/",
    },
    {
        id: 2,
        title: "Working with SquareUp was a breeze.",
        description:
            "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
        image: "/SquareUp/assets/images/Sarah.png",
        name: "Sarah Johnson",
        job: "Founder of HungryBites.",
        url: "https://focal-x.com/",
    },
    {
        id: 3,
        title:
            "SquareUp developed a comprehensive booking and reservation system for our event management company",
        description:
            "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
        image: "/SquareUp/assets/images/Mark.png",
        name: "Mark Thompson",
        job: "CEO of EventMasters",
        url: "https://focal-x.com/",
    },
    {
        id: 4,
        title: "ProTech Solutions turned to SquareUp to automate our workflow",
        description:
            "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
        image: "/SquareUp/assets/images/Laura.png",
        name: "Laura Adams",
        job: "COO of ProTech Solutions.",
        url: "https://focal-x.com/",
    },
    {
        id: 5,
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        description:
            "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        image: "/SquareUp/assets/images/Michael.png",
        name: "Michael Anderson",
        job: "Founder of Dream Homes Realty.",
        url: "https://focal-x.com/",
    },
    {
        id: 6,
        title:
            "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        description:
            "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        image: "/SquareUp/assets/images/Emily.png",
        name: "Emily Turner",
        job: "CEO of FitLife Tracker",
        url: "https://focal-x.com/",
    },
];
const defaultProcessCards = [
    { id: 1, number: "01", title: "Discovery", description: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy." },
    { id: 2, number: "02", title: "Planning and Strategy", description: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision." },
    { id: 3, number: "03", title:"Design", description: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel."},
    { id: 4, number: "04", title: "Development", description: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns." },
    { id: 5, number: "05", title: "Testing and Quality Assurance", description: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability." },
    { id: 6, number: "06", title: "Deployment and Launch", description: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations." },
    { id: 7, number: "07", title: "Post-Launch Support", description: "Our commitment to your success doesn’t end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support." },
    { id: 8, number: "08", title: "Continuous Improvement", description: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve." },
];
const defaultAbout = [
    { id: 1, number: "01", title: "Design", description: "Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression." },
    { id: 2, number: "02", title: "Engineering", description: "Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible." },
    { id: 3, number: "03", title: "Project Management", description: "In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget." },
    { id: 4, number: "04", title: "Collaboration", description: "At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations." },
    { id: 5, number: "05", title: "Client-Centric Approach", description: "SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey." },
    { id: 6, number: "06", title: "Driving Success", description: "With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world." },
];
const DashBoard = () => {
    const [faqData, setFaqData] = useState(() => {
        const storedFAQ = localStorage.getItem("faqData");
        return storedFAQ ? JSON.parse(storedFAQ) : defaultFAQ;
    });
    const [cards, setCards] = useState(() => {
        const storedCards = localStorage.getItem("cardsData") || localStorage.getItem("cards");
        return storedCards ? JSON.parse(storedCards) : defaultCards;
    });
    const [aboutCards, setAboutCards] = useState(() => {
        const stored = localStorage.getItem("cardsAbout");
        return stored ? JSON.parse(stored) : defaultAbout;
    });

    useEffect(() => {
        localStorage.setItem("faqData", JSON.stringify(faqData));
    }, [faqData]);

    useEffect(() => {
        localStorage.setItem("cardsData", JSON.stringify(cards));
        localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        localStorage.setItem("cardsAbout", JSON.stringify(aboutCards));
    }, [aboutCards]);

    useEffect(() => {
        const storedProcessCards = JSON.parse(localStorage.getItem("cardsProcess"));
        if (!storedProcessCards || storedProcessCards.length === 0) {
            localStorage.setItem("cardsProcess", JSON.stringify(defaultProcessCards));
        }
    }, []);

    return (
        <motion.div
            className="lm-section-crud lm_whitespacing_x"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <h2 className="lm-dashboard-title">Our Services</h2>
            <LMServicesCrad />
            
            <h2 className="lm-dashboard-title">Why Choose SquareUp?</h2>
            <LMWhyChooseCrad />
            
            <HSH_CardCRUD cards={cards} setCards={setCards} />

            <HSH_FAQCRUD faqData={faqData} setFaqData={setFaqData} />

            <MmWorkDashboard />

            <h2>At SquareUp Crud</h2>
            <RDProcessPageCrud />

            <h2>Our Story Crud</h2>
            <RDAboutPageCrud cards={aboutCards} setCards={setAboutCards} />

            <div className='lm-dash-contact'>
                <MmContactUsDashboard/>
            </div>

            
        </motion.div>
    );
};

export default DashBoard;