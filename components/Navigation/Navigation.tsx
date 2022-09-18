import { useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MobileNavigation } from "./MobileNavigation";
import Link from "next/link";
import { variants } from "../../contants";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="navigation-wrapper"
    >
      <MobileNavigation variants={variants} isOpen={isOpen} />
      <div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        className="menu-top"
      >
        <Link href="/">
          <a className="brand-logo">
            {/* TODO: ADD LOGO */}
            {/* <img
              className="brand-logo__icon"
            />
            <span className="brand  -logo__text-wrapper">
              <img
                className="brand-logo__text"
              />
            </span> */}
          </a>
        </Link>
        <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.div>
  );
};

export default Navigation;
