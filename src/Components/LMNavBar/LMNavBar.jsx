import './LMNavBar.css'
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LMNavBar = ({ image, items, btn }) => {
    const [show, setShow] = useState(false);
    const showHandel = () => {
        setShow(!show);
    };

    return (
        <>
            {/* nav مع fade-in */}
            <motion.nav
                className="lm_whitespacing_x"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="img">
                    {/* شعار مع scale-in */}
                    <motion.img
                        src={image}
                        alt="logo"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                </div>

                <ul className="navItems">
                    {items.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item?.url} className="lm_font_size_weight1">
                                    {item?.content}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

                <div className='lm_btns'>
                    <Link to="/ContactUs" className="login lm_font_size_weight1">{btn}</Link>
                </div>

                <button className="bars" onClick={showHandel}>
                    <img src="/SquareUp/assets/images/bars.svg" alt="bars" className='icon' />
                </button>
            </motion.nav>

            {/* القائمة المنسدلة مع أنميشن */}
            <AnimatePresence>
                {show && (
                    <motion.div
                        className="navMenu show"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="navItems">
                            {items.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink
                                            to={item?.url}
                                            className="lm_font_size_weight1"
                                            onClick={() => setShow(false)}
                                        >
                                            {item?.content}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className='lm_btns'>
                            <Link
                                to="/ContactUs"
                                className="login lm_font_size_weight1"
                                onClick={() => setShow(false)}
                            >
                                {btn}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
};

export default LMNavBar;