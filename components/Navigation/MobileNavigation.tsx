import { motion } from "framer-motion";
import {
  closedTansition,
  featuredProjects,
  openBottomTransition,
  openTopTransition,
  openTransition,
} from "../../contants";
import SocialMediaLinks from "../subComponents/SocialMediaLinks";

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      {/* MENU CONTENT */}
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
            <SocialMediaLinks shortOrFull="short" />
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="majdnewsufian@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        {/* FEATURED PROJECTS */}
        <div className="navigation-bottom__projects">
          {featuredProjects.map(({ link, image, firstName, secondName }, i) => (
            <a
              target="_blank"
              rel="noopener"
              href={link}
              key={i}
              className="navigation-bottom__projects-card"
            >
              <img src={image} alt="alexxandria" />
              <h2>
                {firstName}
                <br />
                {secondName}
              </h2>
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
