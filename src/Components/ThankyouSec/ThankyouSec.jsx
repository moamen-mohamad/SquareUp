import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './ThankyouSec.css';

const ThankyouSec = ({ bgImage, image, title, subtitle, buttonText }) => {
    return (
        <div className="lm_whitespacing_x">
            <motion.div
                className="thankyou-images"
                style={{ "--bg-image": `url(${bgImage})` }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <div className="squr-image"></div>
                <div className="thankyou-content">
                    <img src={image} alt="Thank You Icon" className="thankyou-icon" />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {subtitle}
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link to="/ContactUs" className="thankyou-button">
                            {buttonText}
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default ThankyouSec;