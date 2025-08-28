// src/Components/MmFAQCards/MmFAQCards.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import "./MmFAQCards.css";

const MmFAQCards = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    const leftColumn = faqData.filter((_, i) => i % 2 === 0);
    const rightColumn = faqData.filter((_, i) => i % 2 !== 0);

    const renderColumn = (items, colOffset = 0) =>
        items.map((item, index) => {
            const realIndex = index * 2 + colOffset;
            return (
                <motion.div
                    className="card"
                    key={realIndex}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div
                        className="question-container"
                        onClick={() => toggleAnswer(realIndex)}
                    >
                        <div className="question">
                            <span>{String(realIndex + 1).padStart(2, "0")}</span>
                            <h4>{item.question}</h4>
                        </div>
                        <img
                            src={
                                activeIndex === realIndex
                                    ? "/SquareUp/assets/images/asterisk.svg"
                                    : "/SquareUp/assets/images/plus.svg"
                            }
                            alt="toggle"
                        />
                    </div>

                    <p className={activeIndex === realIndex ? "answer open" : "answer"}>
                        {item.answer}
                    </p>
                </motion.div>
            );
        });

    return (
        <div className="questions">
            <div className="column">{renderColumn(leftColumn, 0)}</div>
            <div className="column">{renderColumn(rightColumn, 1)}</div>
        </div>
    );
};

export default MmFAQCards;