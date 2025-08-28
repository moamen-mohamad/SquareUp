import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./SaTodaySquareUp.css";

const SaTodaySquareUp = ({ icon, title, subtitle, subtitleCta, highlightCta, linkTo, buttonText }) => {
  return (
    <motion.div
      className="SaTodaySquareUp lm_whitespacing_x"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="top-section">
        <div className="icon-box">
          <img src={icon} alt="SquareUp icon" />
        </div>
        <div className="text-box">
          <h3 className="title">{title}</h3>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="cta-bar">
        <p className="small-text">{subtitleCta}</p>
        <div className="countainer-highlight">
          <p className="highlight-text">{highlightCta}</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to={"/ContactUs"} className="cta-button">
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SaTodaySquareUp;