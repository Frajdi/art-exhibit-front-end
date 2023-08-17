import { motion, useInView, useAnimation } from "framer-motion";
import { useState } from "react";
import TextAnimation from "../../../animationUtils/TextAnimation";

const Card = ({ title, subtitle, Icon }) => {
  const [hovered, setHovered] = useState(false);

  const cardStyles = {
    width: "100%",
    padding: "1rem",
    border: "1px solid #CBD5E0",
    backgroundColor: "white",
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    zIndex: 0,
  };

  const gradientStyles = {
    position: "absolute",
    inset: 0,
    backgroundColor: "#C786FF",
    zIndex: -1,
    y: '100%'
  };

  const iconTopRightStyles = {
    position: "absolute",
    zIndex: 10,
    top: "-3rem",
    right: "-3rem",
    fontSize: "6rem",
    color: hovered ? "white" : "#4A5568",
  };

  const iconBelowStyles = {
    zIndex: 10,
    marginBottom: "0.5rem",
    fontSize: "1.25rem",
    color: hovered ? "white" : "#4A5568",
  };

  const titleStyles = {
    textDecoration: "none",
    color: "#222222",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "25.6px",
  };

  const descriptionStyles = {
    ...titleStyles,
    fontWeight: 400,
    fontSize: "15px",
  };

  const cardHoverControls = useAnimation();
  const colorControls = useAnimation();
  const iconControls = useAnimation();
  const textColorControls = useAnimation();

  const handleHoverIn = () => {
    cardHoverControls.start("hovered");
    colorControls.start("hovered");
    iconControls.start("hovered");
    textColorControls.start("hovered");
    setTimeout(() => {
      setHovered(true);
    }, 100);
  };

  const handleHoverOut = () => {
    cardHoverControls.start("normal");
    colorControls.start("normal");
    iconControls.start("normal");
    textColorControls.start("normal");
    setHovered(false);
  };

  return (
    <motion.div
      style={cardStyles}
      variants={{
        normal: { y: 0 },
        hovered: { y: -5 },
      }}
      animate={cardHoverControls}
      transition={{ duration: 0.3 }}
      onHoverStart={handleHoverIn}
      onHoverEnd={handleHoverOut}
    >
      <motion.div
        style={gradientStyles}
        variants={{
          normal: { y: "100%" },
          hovered : { y: 0 },
        }}
        animate={colorControls}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <motion.div
        variants={{
          normal: { rotate: 0, x: 0, y: 0, backgroundColor: "#4A5568" },
          hovered: {
            rotate: "12deg",
            x: -20,
            y: -10,
            backgroundColor: "white",
          },
        }}
        animate={iconControls}
        transition={{ duration: 0.35 }}
      >
        <Icon style={iconTopRightStyles} />
      </motion.div>
      <Icon style={iconBelowStyles} />
      <TextAnimation color={'#C786FF'}>
      <motion.h3
        style={titleStyles}
        variants={{
          normal: { color: "black" },
          hovered: { color: "white" },
        }}
        animate={textColorControls}
        transition={{ duration: 0.35 }}
      >
        {title}
      </motion.h3>
      </TextAnimation>
      <TextAnimation color={'#C786FF'}>
      <motion.p
        style={descriptionStyles}
        variants={{
          normal: { color: "#838383" },
          hovered: { color: "#4A5568" },
        }}
        animate={textColorControls}
        transition={{ delay: 0.3, ease: "easeIn" }}
      >
        {subtitle}
      </motion.p>
      </TextAnimation>
    </motion.div>
  );
};

export default Card;
