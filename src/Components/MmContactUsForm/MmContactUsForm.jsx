
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./MmContactUsForm.css";

const MmContactUsForm = ({ editingItem, onSave }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [yourMessage, setYourMessage] = useState("");
    const [resons, setResons] = useState([]);

    useEffect(() => {
        if (editingItem) {
            setFullName(editingItem.fullName || "");
            setEmail(editingItem.email || "");
            setYourMessage(editingItem.yourMessage || "");
            setResons(editingItem.resons || []);
        }
    }, [editingItem]);

    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setResons([...resons, value]);
        } else {
            setResons(resons.filter((item) => item !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: editingItem ? editingItem.id : Date.now(),
            fullName,
            email,
            resons,
            yourMessage,
        };
        if (onSave) {
            onSave(newItem, !!editingItem);
        } else {
            const stored = localStorage.getItem("contactUsEntries");
            const items = stored ? JSON.parse(stored) : [];
            localStorage.setItem(
                "contactUsEntries",
                JSON.stringify([...items, newItem])
            );
        }
        setFullName("");
        setEmail("");
        setYourMessage("");
        setResons([]);
    };

    const socialIcons = [
        { name: "Facebook", url: "https://www.facebook.com/focal.x.agency/", icon: "/SquareUp/assets/images/facebook.svg" },
        { name: "Twitter", url: "https://twitter.com/focal_x_agency?t=4jk3EdcOYPA9mvvWFnjuww&s=09", icon: "/SquareUp/assets/images/twitter.svg" },
        { name: "LinkedIn", url: "https://www.linkedin.com/company/focal-x-agency/", icon: "/SquareUp/assets/images/linkedin.svg" },
    ];

    const openSocialLink = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <motion.div
            className="form-contact-us-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* up form */}
            <div className='lm-contact-contactIcons'>
                {socialIcons.map((item, index) => (
                    <motion.div
                        key={index}
                        className='lm-contact-contactIcon'
                        onClick={() => openSocialLink(item.url)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={item.icon} alt={item.name} className={`icon${index + 1}`} />
                        <span className='lm_font_size_weight3'>{item.name === "LinkedIn" ? "Get LinkedIn" : item.name}</span>
                    </motion.div>
                ))}
            </div>

            <motion.form
                className="contact-us-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="name-and-email-container">
                    <div className="name-email">
                        <label htmlFor="full-name">Full Name</label>
                        <input
                            type="text"
                            id="full-name"
                            value={fullName}
                            placeholder="Type here"
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="name-email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            placeholder="Type here"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="resons-container">
                    <label>Why are you contacting us?</label>
                    <div className="resons">
                        {["Web Design", "Collaboration", "Mobile App Design", "Others"].map((reson, i) => (
                            <motion.label
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <input
                                    type="checkbox"
                                    className="reson-checkbox"
                                    value={reson}
                                    checked={resons.includes(reson)}
                                    onChange={handleCheckboxChange}
                                />
                                {reson}
                            </motion.label>
                        ))}
                    </div>
                </div>

                <div className="user-message">
                    <label htmlFor="your-message">Your Message</label>
                    <textarea
                        id="your-message"
                        value={yourMessage}
                        placeholder="Type here"
                        onChange={(e) => setYourMessage(e.target.value)}
                    ></textarea>
                </div>

                <motion.input
                    className="send"
                    type="submit"
                    value={editingItem ? "Update" : "Submit"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </motion.form>

            {/* down form */}
            <motion.div
                className="lm-contact-down-footer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="lm-contact-down-footer-buttom">
                    <p>Operating Days</p>
                    <p className="monday-to-friday">Monday to Friday</p>
                </div>
                <div className="lm-contact-line"></div>
                <div className='lm-contact-down-footer-stay-Connected'>
                    <p className="lm_font_size_weight2">Stay Connected</p>
                    <div className="lm-contact-socialIcons">
                        {socialIcons.map((item, index) => (
                            <motion.div
                                key={index}
                                className="lm-contact-socialLink"
                                onClick={() => openSocialLink(item.url)}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img src={item.icon} alt={item.name} className="lm-contact-socialIcon" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MmContactUsForm;