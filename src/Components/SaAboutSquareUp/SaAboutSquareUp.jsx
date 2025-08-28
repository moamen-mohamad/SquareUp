import { motion } from "framer-motion";
import "./SaAboutSquareUp.css";

const SaAboutSquareUp = ({ title, subtitle, bgImage, icone }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.3 } },
  };
  return (
    <div className="SaAboutSquareUp lm_whitespacing_x">
      <motion.div
        className="about-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariants}
      >
        <h2 className="about-title">{title}</h2>
        <p className="about-subtitle">{subtitle}</p>
      </motion.div>
      <motion.div
        className="about-image"
        style={{ "--bg-image": `url(${ bgImage || "/SquareUp/assets/images/head-bg-5.png"})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageVariants}
      >
        <div className="lines-container">
          <div className="line line-0"></div>
          <div className="line line-90"></div>
          <div className="line line-180"></div>
          <div className="line line-270"></div>
        </div>
        <div className="icon-wrapper">
          <img src={icone} alt="About SquareUp icon" className="about-icon" />
        </div>
      </motion.div>
    </div>
  );
};

export default SaAboutSquareUp;