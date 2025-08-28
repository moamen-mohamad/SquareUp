import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThankyouSec from "../../Components/ThankyouSec/ThankyouSec";
import SASquerup from "../../components/SASquerup/SASquerup";
import RDShowBtn from "../../components/RDShowBtn/RDShowBtn";
import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection";

const Process = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("cardsProcess")) || [];
    setCards(storedCards);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="lm_whitespacing_x">
        <MmHeadOfSection
          title="Process of Starting the Project"
          subtitle="At SquareUp, we value transparency, collaboration, and delivering exceptional results."
          bgImage="/SquareUp/assets/images/head-bg-6.png"
        />
      </div>

      <SASquerup
        title="At SquareUp"
        subtitle="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
        subtitleContainer="Here's an overview of our typical process:"
      />

      <div className="lm_whitespacing_x">
        <RDShowBtn initialCount={4} Cards={cards} />
      </div>

      <ThankyouSec
        bgImage="/SquareUp/assets/images/head-bg-3.png"
        image="/SquareUp/assets/images/Logo-colorfull.svg"
        title="Thank you for your Interest in SquareUp."
        subtitle="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        buttonText="Start Project"
        linkTo="/contact"
      />

      <Outlet />
    </motion.div>
  );
};

export default Process;