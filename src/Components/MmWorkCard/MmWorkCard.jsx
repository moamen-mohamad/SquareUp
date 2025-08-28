import './MmWorkCard.css';
import { motion } from "framer-motion";

const MmWorkCard = ({ title, image, webName, urlWeb, description }) => {
    return (
        <motion.div
            className="work-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <h3>{title}</h3>
            <img className="project-photo" src={image} alt={title} />
            <span>{webName}</span>
            <div>
                <a href={urlWeb} target="_blank" rel="noopener noreferrer">{urlWeb}</a>
                <a href={urlWeb} className='slanted-arrow' target="_blank">
                    <img src="/SquareUp/assets/images/Slanted-arrow.svg" alt="" />
                </a>
            </div>
            <p>{description}</p>
        </motion.div>
    );
};

export default MmWorkCard;