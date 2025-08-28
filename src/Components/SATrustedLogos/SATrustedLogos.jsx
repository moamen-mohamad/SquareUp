import { motion } from "framer-motion";
import './SATrustedLogos.css';

const SATrustedLogos = ({
    subTitle,
    icon1Trusted,
    icon2Trusted,
    icon3Trusted,
    icon4Trusted,
    icon5Trusted,
    icon6Trusted
}) => {
    const logos = [
        { src: icon1Trusted, alt: "Company trusted Icon1" },
        { src: icon2Trusted, alt: "Company trusted Icon2" },
        { src: icon3Trusted, alt: "Company trusted Icon3" },
        { src: icon4Trusted, alt: "Company trusted Icon4" },
        { src: icon5Trusted, alt: "Company trusted Icon5" },
        { src: icon6Trusted, alt: "Company trusted Icon6" },
    ];

    return (
        <div className="lm_whitespacing_x">
            <div className="trustedlogo">
                <div className="trusted-header">
                    <p className="trusted-header-text">{subTitle}</p>
                </div>
                <div className="TrustedLogos-content lm_whitespacing_x">
                    {logos.map((logo, index) => (
                        <motion.img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={`trusted-icon${index + 1}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SATrustedLogos;