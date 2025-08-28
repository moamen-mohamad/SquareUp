import { motion } from "framer-motion";
import './SASquerup.css'

const SASquerup = ({ title, subtitle, subtitleContainer }) => {
  return (
    <div className="lm_whitespacing_x">
      <motion.section
        className="squerup"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="squerup-content">
          <h1 className="squerup-title">{title}</h1>
          <p className="squerup-subtitle">{subtitle}</p>
        </div>
        <div className="squerup-container">
          <p className="container-subtitle">{subtitleContainer}</p>
        </div>
      </motion.section>
    </div>
  );
};

export default SASquerup;