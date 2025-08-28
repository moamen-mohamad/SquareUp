import './MmHeadOfSection.css';
import { motion } from "framer-motion";

const MmHeadOfSection = ({ title, subtitle, bgImage }) => {
    return (
        <div
            className="head-of-section"
            style={{ "--bg-image": `url(${bgImage})` }}
        >
            <div className="content">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            </div>
        </div>
    );
};

export default MmHeadOfSection;