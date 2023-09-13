import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Stack from "@mui/material/Stack";


//STYLES
const gridStyles = {
  height: "100%",
  width: "100%",
  display: "grid",
  placeItems: "center center",
};

const cardContainerStyles = {
  width: "100%",
  height: "100%",
  whiteSpace: "nowrap",
  overflowX: "scroll",
  perspective: "150px",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  overflow: "hidden",
};

const cardStyles = {
  position: "relative",
  top: "6.5rem",
  display: "inline-block",
  height: "60%",
  width: "20%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  margin: "2rem 1rem",
  borderRadius: "15px",
  cursor: "pointer",
};


//VARIANTS

const cardVariants = {
  selected: {
    rotateY: 180,
    scale: 1.1,
    transition: { duration: 0.35 },
    zIndex: 10,
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  },

  notSelected: (i) => ({
    rotateY: i * 15,
    scale: 1 - Math.abs(i * 0.15),
    x: i ? i * 50 : 0,
    opacity: 1 - Math.abs(i * 0.15),
    zIndex: 10 - Math.abs(i),
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    transition: { duration: 0.35 },
  }),
};

const shadowVariants = {
  initial: {
    boxShadow: "0px 36px 32px 21px rgba(0,0,0,0.75) inset",
    WebkitBoxShadow: "0px 36px 32px 21px rgba(0,0,0,0.75) inset",
    MozBoxShadow: "0px 36px 32px 21px rgba(0,0,0,0.75) inset",
  },
  selected: {
    boxShadow: "14px 60px 189px -30px rgba(0,0,0,0.67) inset",
    WebkitBoxShadow: "14px 60px 189px -30px rgba(0,0,0,0.67) inset",
    MozBoxShadow: "14px 60px 189px -30px rgba(0,0,0,0.67) inset",
  },
};

const Flashcards = ({ portfolio }) => {

  const [selectedCard, setSelectedCard] = useState(null);

  const [{ startX, startScrollLeft, isDragging }, setDragStart] = useState({
    startX: undefined,
    startScrollLeft: undefined,
    isDragging: false,
  });

  const containerRef = useRef();

  const cardRefs = useRef(new Array());

  const shadowControls = useAnimation();

  useEffect(() => {
    if (selectedCard) {
      shadowControls.start("selected");
    } else {
      shadowControls.start("initial");
    }
  }, [selectedCard]);

  useEffect(() => {
    const { scrollWidth, clientWidth } = containerRef.current;
    const halfScroll = (scrollWidth - clientWidth) / 2;
    containerRef.current.scrollLeft = halfScroll;
  }, [containerRef.current]);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUpOutsideContainer);
    return () => {
      window.removeEventListener("mouseup", handleMouseUpOutsideContainer);
    };
  }, []);

  const extractImgValues = (() => {
    const imgObjects = [];

    const portofolioContent = JSON.parse(portfolio.jsonTheme).themeContent;

    const recurse = (content) => {
      if (Array.isArray(content)) {
        content.forEach((item, index) => {
          if (typeof item === "object") {
            recurse(item); // If the item is an object, recursively call the function
          }
        });
      } else if (typeof content === "object") {
        for (const key in content) {
          if (typeof content[key] === "object") {
            recurse(content[key]); // If the value is an object, recursively call the function
          } else if (key === "img") {
            const imgObject = {
              id: imgObjects.length, // Use the length of the imgObjects array as the ID
              img: content[key],
            };
            imgObjects.push(imgObject);
          }
        }
      }
    };

    recurse(portofolioContent);
    return imgObjects;
  })();

  const handleMouseUpOutsideContainer = (e) => {
    setDragStart((prev) => ({ ...prev, isDragging: false }));
  };

  const handleMouseDown = (e) => {
    console.log(e);
    setDragStart({
      startX: e.pageX - containerRef.current.offsetLeft,
      startScrollLeft: containerRef.current.scrollLeft,
      isDragging: true,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || selectedCard) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = startScrollLeft - walk;
  };

  const selectCard = (card) => {
    setSelectedCard(selectedCard ? null : card);

    if (card && !selectedCard) {
      cardRefs.current[card - 1].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleCardMouseUp = (e, card) => {
    if (isDragging) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = x - startX;
      if (Math.abs(walk) < 5) selectCard(card);
    } else selectCard(card);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={() => setDragStart((prev) => ({ ...prev, isDragging: false }))}
      onMouseMove={handleMouseMove}
      style={gridStyles}
    >
      <div
        className="flashcards__container"
        ref={containerRef}
        style={cardContainerStyles}
      >
        {extractImgValues.map((card, i) => (
          <motion.div
            ref={(el) => cardRefs.current.push(el)}
            onMouseUp={(e) => handleCardMouseUp(e, card.id)}
            variants={cardVariants}
            animate={selectedCard === card.id ? "selected" : "notSelected"}
            custom={selectedCard ? selectedCard - card.id : 0}
            style={{
              ...cardStyles,
              backgroundImage: `url(data:image/png;base64,${card.img})`,
            }}
          >
            <Stack
              style={{
                height: "100%",
                borderRadius: "15px",
                overflow: "hidden",
              }}
              alignItems={"center"}
              component={motion.div}
              variants={shadowVariants}
              initial="initial"
              animate={shadowControls}
              transition={{ duration: 1 }}
            ></Stack>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
