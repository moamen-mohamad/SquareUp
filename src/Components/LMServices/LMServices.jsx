import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./LMServices.css";

const LMServices = ({
    image,
    title,
    paragraph,
    btn,
    showButton = true,
    horizontal = false,
}) => {
    return (
        <motion.div
            className="lm-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className={`lm-container ${horizontal ? "horizontal" : ""}`}>
                <div className="lm-card-img">
                    <motion.img
                        src={image}
                        alt="icon"
                        className="lm-img"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    />
                </div>
                <h3 className="lm-card-title">{title}</h3>
            </div>

            <p className="lm-card-paragraph">{paragraph}</p>

            {showButton && (
                <div className="lm-card-button">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link to="/Work" className="lm-link">
                            {btn}
                        </Link>
                    </motion.div>
                </div>
            )}
        </motion.div>
    );
};

export default LMServices;