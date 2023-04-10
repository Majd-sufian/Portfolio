// Motion Div
import { motion } from "framer-motion";

// Contants
import {
  motionDivAnimation,
  motionDivAnimation2,
  motionDivTechStack,
} from "../contants/MotionDivAnimation";

const MotionDiv: React.FC<{}> = ({}) => {
  return (
    <motion.div
      data-scroll
      data-scroll-sticky
      data-scroll-target="#menu-target"
      animate={motionDivAnimation}
      className="preloader"
    >
      <div className="preloader__wrapper">
        {/* TODO: add logovar(--color-light-purple) */}
        {/* <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { ...transition } }}
          className="preloader__left"
        >
          <img src="" alt="adeola logo" />
        </motion.div> */}
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={motionDivAnimation2}
          className="preloader__right"
        >
          {motionDivTechStack.map((tech, index) => (
            <p key={index} className="preloader__text">
              {tech}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MotionDiv;
