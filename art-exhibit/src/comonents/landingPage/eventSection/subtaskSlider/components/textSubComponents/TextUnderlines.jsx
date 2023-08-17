import { motion } from "framer-motion";

const TextUnderlines = ({length, thickness}) => {
  return (
    <motion.div
          style={{ backgroundColor: "white", height: thickness }}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: length }}
          transition={{
            delay: 0.2,
            ease: 'linear',
            duration: 0.3
          }}
        />
  )
}

export default TextUnderlines;