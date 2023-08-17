import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

const ImageContainer = ({
  children,
  width,
  index,
  setHoveredIndex,
  hoveredIndex,
}) => {
  const activateResize = useAnimation();

  useEffect(() => {
    if (hoveredIndex === index) {
      activateResize.start("expand");
    } else if (hoveredIndex === null) {
      activateResize.start("reduce");
    } else {
      activateResize.start("reduceSecondary");
    }
  }, [hoveredIndex]);
  

  const secondaryHeight = () => {
    const indexesFromHovered =  Math.abs(hoveredIndex - index)
    const height = `${100 - indexesFromHovered * 10}%`
    return height
  }

  return (
    <motion.div
      style = {{
         width: width,
         height: "100%", 
         borderRadius: '15px',
         overflow: 'hidden'
        }}
      variants = {{
        expand: {
            width: "70%",
            height: "100%",
            filter: 'brightness(100%)',
            borderBottomLeftRadius: index > 1 ? 0 : '15px',
            borderBottomRightRadius: index < 5 ? 0 : '15px',
            borderTopLeftRadius: '15px',
            borderTopRightRadius:'15px',
           },
        reduce: {
            height: "100%",
            width: width,
            filter: 'brightness(100%)',
            borderRadius: '15px',
            borderTopRightRadius : '15px',
            borderBottomRightRadius: '15px',
            borderTopLeftRadius : '15px',
            borderBottomLeftRadius: '15px',
        },
        reduceSecondary: {
            height: secondaryHeight(),
            width: width,
            filter: 'brightness(50%)',
            borderTopRightRadius : hoveredIndex > index ? 0 : '15px',
            borderBottomRightRadius: hoveredIndex > index || index < 5 ? 0 : '15px',
            borderTopLeftRadius : hoveredIndex < index ? 0 : '15px',
            borderBottomLeftRadius: hoveredIndex < index || index > 1  ?  0 : '15px',
          },
      }}
      onHoverStart = {() => {setHoveredIndex(index)}}
      onHoverEnd = {() => {setHoveredIndex(3)}}
      animate = {activateResize}
    >
      {children}
    </motion.div>
  );
};

export default ImageContainer;
