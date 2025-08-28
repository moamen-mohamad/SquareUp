import { motion } from "framer-motion";
import './RDCard.css';

const RDCard = ({ number, title, description, titleStyle }) => {
    return (
        <motion.div
            className='RD_Card'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
        >
            <motion.div
                className='RD_CardHeader'
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            >
                <div className="RD_number">{number}</div>
                <h2 style={titleStyle} className="RD_title">{title}</h2>
            </motion.div>

            <motion.p
                className="RD_description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default RDCard;