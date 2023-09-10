import React from 'react'
import { motion } from "framer-motion";

const withRouteAnimation = (Component) => (props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      }}
      animate={{
        opacity: 1,
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
        transition: {duration: 0.5}
      }}
      exit={{
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        transition: {duration: 0.5}
      }}
    >
        <Component {...props}/>
    </motion.div>
  )
}

export default withRouteAnimation
