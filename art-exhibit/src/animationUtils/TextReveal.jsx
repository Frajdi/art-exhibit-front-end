import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const Wrapper = ({children, text, style}) => {
  return <span className="word-wrapper">{children}</span>;
};


const TextReveal = ({children, text, style}) => {
  const item = {
    hidden: {
      y: "250%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  const splitWords = text.split(" ");
  const words = [];
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <Typography style={style}>
      {words.map((word, index) => {
        return (
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    paddingBottom: '2%'
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Typography>
  );
};

export default TextReveal;
