import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import RDHero from "../../components/RDHero/RDHero";
import LMServices from "../../components/LMServices/LMServices";
import MmFAQCards from "../../Components/MmFAQCards/MmFAQCards";
import SATrustedLogos from "../../Components/SATrustedLogos/SATrustedLogos";
import ThankyouSec from "../../Components/ThankyouSec/ThankyouSec";
import MmHeadOfSection from "../../Components/MmHeadOfSection/MmHeadOfSection";
import HSH_SliderCards from "../../Components/HSH_SliderCards/HSH_SliderCards";

const STORAGE_KEY = "lm_cards";
const STORAGE_KEY_WC = "lm_why_choose";
const DEFAULT_CARDS = [
  {
    image: "/SquareUp/assets/images/draw.svg",
    title: "Design",
    paragraph:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    btn: "learn more",
  },
  {
    image: "/SquareUp/assets/images/buzzel.svg",
    title: "Engineering",
    paragraph:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    btn: "learn more",
  },
  {
    image: "/SquareUp/assets/images/battery.svg",
    title: "Project Management",
    paragraph:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    btn: "learn more",
  },
];
const defaultWhyChoose = [
  {
    image: "/SquareUp/assets/images/distinction.svg",
    title: "Expertise",
    paragraph:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
  },
  {
    image: "/SquareUp/assets/images/call.svg",
    title: "Client-Centric Approach",
    paragraph:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
  },
  {
    image: "/SquareUp/assets/images/protected-power.svg",
    title: "Results-Driven Solutions",
    paragraph:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
  },
  {
    image: "/SquareUp/assets/images/collaborative.svg",
    title: "Collaborative Partnership",
    paragraph:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
  },
];
const Home = () => {
  const [cards, setCards] = useState([]);
  const [whyChooseCards, setWhyChooseCards] = useState([]);
  const [faqData] = useState(() => {
    const storedFAQ = localStorage.getItem("faqData");
    return storedFAQ
      ? JSON.parse(storedFAQ)
      : [
          {
            question: "What services does SquareUp provide",
            answer:
              "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
          },
          {
            question: "How can SquareUp help my business?",
            answer: "Lorem ipsum dolor sit amet...",
          },
          {
            question: "What industries does SquareUp work with?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum"
          },
          {
            question: "How long does it take to complete a project with SquareUp?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum"
          },
          {
            question:
              "Do you offer ongoing support and maintenance after the project is completed?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum"
          },
          {
            question: "Can you work with existing design or development frameworks?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum"
          },
          {
            question: "How involved will I be in the project development process?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum"
          },
          {
            question:
              "Can you help with website or app maintenance and updates?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum"
          },
        ];
  });


  useEffect(() => {
    localStorage.setItem("faqData", JSON.stringify(faqData));
  }, [faqData]);

useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setCards(JSON.parse(raw));
      } catch {
        setCards([]);
      }
    } else {
      const seeded = DEFAULT_CARDS.map((c, i) => ({
        ...c,
        id: Date.now() + i,
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(seeded));
      setCards(seeded);
    }
  }, []);
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY_WC);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        const withIds = parsed.map((item, i) => ({
          ...item,
          id: item.id || Date.now() + i,
        }));
        setWhyChooseCards(withIds);
        localStorage.setItem(STORAGE_KEY_WC, JSON.stringify(withIds));
      } catch {
        setWhyChooseCards([]);
      }
    } else {
      const seeded = defaultWhyChoose.map((c, i) => ({
        ...c,
        id: Date.now() + i,
      }));
      localStorage.setItem(STORAGE_KEY_WC, JSON.stringify(seeded));
      setWhyChooseCards(seeded);
    }
  }, []);
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="lm_whitespacing_x">
        <RDHero
          title={"A Digital Product Studio that will Work"}
          description={
            <>
              For <span> Startups </span> , <span> Enterprise leaders </span> and{" "}
              <span> Social Good</span>
            </>
          }
          btn1={{ Link: "/Work", text: "Our Works" }}
          btn2={{ Link: "/ContactUs", text: "Contact Us" }}
        />
        <Outlet />
      </div>
<SATrustedLogos
        subTitle="Trusted By 250+ Companies"
        icon1Trusted="/SquareUp/assets/images/company-1.svg"
        icon2Trusted="/SquareUp/assets/images/company-2.svg"
        icon3Trusted="/SquareUp/assets/images/company-3.svg"
        icon4Trusted="/SquareUp/assets/images/company-4.svg"
        icon5Trusted="/SquareUp/assets/images/company-5.svg"
        icon6Trusted="/SquareUp/assets/images/company-6.svg"
      />

      <div className="lm_whitespacing_x">
        <MmHeadOfSection
          title="Our Services"
          subtitle="Transform your brand with our innovative digital solutions that captivate and engage your audience."
          bgImage="/SquareUp/assets/images/head-bg-1.jpg"
        />
        <div className="lm-cards-container three-columns">
          {cards.map((card) => (
            <LMServices
              key={card.id}
              image={card.image}
              title={card.title}
              paragraph={card.paragraph}
              btn={card.btn}
              showButton={true}
              horizontal={false}
            />
          ))}
        </div>

        <MmHeadOfSection
          title="Why Choose SquareUp?"
          subtitle="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
          bgImage="/SquareUp/assets/images/head-bg-2.png"
        />
        <div className="lm-cards-container two-columns">
          {whyChooseCards.map((item) => (
            <LMServices
              key={item.id}
              image={item.image}
              title={item.title}
              paragraph={item.paragraph}
              showButton={false}
              horizontal={true}
            />
          ))}
        </div>

        <MmHeadOfSection
          title="What our Clients say About us"
          subtitle="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients.Here's what some of our satisfied clients have to say about thier experience working with us"
          bgImage="/SquareUp/assets/images/head-bg-2.png"
        />

        <HSH_SliderCards />

        <MmHeadOfSection
          title="Frequently Asked Questions"
          subtitle="Still you have any questions? Contact our Team via hello@squareup.com"
          bgImage="/SquareUp/assets/images/head-bg-4.png"
        />

        <MmFAQCards faqData={faqData} />
      </div>

      <ThankyouSec
        bgImage="/SquareUp/assets/images/head-bg-3.png"
        image="/SquareUp/assets/images/Logo-colorfull.svg"
        title="Thank you for your Interest in SquareUp."
        subtitle="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        buttonText="Start Project"
        linkTo="/contact"
      />
    </motion.div>
  );
};

export default Home;