import SASquerup from "../../components/SASquerup/SASquerup";
import ThankyouSec from "../../Components/ThankyouSec/ThankyouSec";
import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection";
import MmWorkList from "../../Components/MmWorkList/MmWorkList";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="lm_whitespacing_x">
        <MmHeadOfSection
          title="Our Works"
          subtitle="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."
          bgImage="/SquareUp/assets/images/head-bg-3.png"
        />
      </div>

      <SASquerup
        title="At SquareUp"
        subtitle="We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success."
        subtitleContainer="Here are ten examples of our notable works:"
      />

      <MmWorkList />

      <ThankyouSec
        bgImage="/SquareUp/assets/images/head-bg-3.png"
        image="/SquareUp/assets/images/Logo-colorfull.svg"
        title="Let us Bring your Ideas to Life in the Digital World."
        subtitle="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
        buttonText="Start Project"
        linkTo="/contact"
      />
    </motion.div>
  );
};

export default Work;