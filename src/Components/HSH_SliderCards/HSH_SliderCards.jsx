import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HSH_SliderCards.css";

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

const HSH_SliderCards = () => {
    const [cards, setCards] = useState(() => {
        const stored = localStorage.getItem("sliderCards");
        if (stored) return JSON.parse(stored);
        localStorage.setItem("sliderCards", JSON.stringify(defaultCards));
        return defaultCards;
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerSlide, setItemsPerSlide] = useState(2);

    useEffect(() => {
        const updateItems = () => setItemsPerSlide(window.innerWidth <= 992 ? 1 : 2);
        updateItems();
        window.addEventListener("resize", updateItems);
        return () => window.removeEventListener("resize", updateItems);
    }, []);

    const totalSlides = Math.ceil(cards.length / itemsPerSlide);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    const goToSlide = (index) => setCurrentIndex(index);
    const startIndex = currentIndex * itemsPerSlide;
    let slideItems = cards.slice(startIndex, startIndex + itemsPerSlide);
    if (slideItems.length < itemsPerSlide) {
        slideItems = [...slideItems, ...cards.slice(0, itemsPerSlide - slideItems.length)];
    }

    return (
        <section className="HSH_CardsContainer">
            <div className="HSH_Slider">
                <motion.button className="HSH_NavButton left" onClick={prevSlide} whileTap={{ scale: 0.9 }}>
                    &#10094;
                </motion.button>

                <div className={`HSH_Slide items-${itemsPerSlide}`}>
                    <AnimatePresence mode="wait">
                        {slideItems.map((card) => (
                            <motion.div
                                key={card.id}
                                className="HSH_Card"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                                <div className="HSH_CardContent">
                                    {card.image && (
                                        <motion.img
                                            src={card.image}
                                            alt={card.name}
                                            className="HSH_ClientImg"
                                            whileHover={{ scale: 1.1, rotate: 2 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        />
                                    )}
                                    <div className="HSH_Info">
                                        <h3>{card.name}</h3>
                                        <p>{card.job}</p>
                                    </div>
                                    {card.url && (
                                        <motion.a
                                            href={card.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="HSH_Button"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            View website
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <motion.button className="HSH_NavButton right" onClick={nextSlide} whileTap={{ scale: 0.9 }}>
                    &#10095;
                </motion.button>
            </div>

            <div className="HSH_Dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <span
                        key={index}
                        className={`HSH_Dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default HSH_SliderCards;