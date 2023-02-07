/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Socials from '../components/Socials';

import LogoWhite from '../assets/img/header/logo-white.png';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../variants';

const headerVariants = {
  hidden: {
    padding: '84px 0',
    background: 'none',
  },
  show: {
    padding: '14px 0',
    background: 'rgba(0, 0, 0, 0.92)',
    transition: {
      type: 'spring',
    },
  },
};

export const navVariants = {
  hidden: {
    clipPath: 'circle(5.8% at 50% 0)',
    opacity: 0,
    transition: {
      type: 'spring',
      delay: 0.2,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    clipPath: 'circle(130% at 50% 0)',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
    },
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [nav, setNav] = useState(false);

  // Event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={isActive ? 'show' : ''}
      className="fixed z-50 w-full max-w-[1800px] bg-pink-200/20 py-4"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={'show'}
        className="container mx-auto"
      >
        <div className="relative flex items-center justify-between px-4 text-white lg:px-0">
          {/* Menu button */}
          <motion.div
            variants={fadeIn('down', 'tween', 1, 1.4)}
            className={`${nav ? 'gap-y-0' : 'gap-y-2'}
              order-2 flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border-2 p-3 lg:order-none
            `}
            onClick={() => setNav(!nav)}
          >
            {/* First bar */}
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{ rotate: nav ? -45 : 0, translateY: nav ? 2 : 0 }}
              className="h-[2px] w-full bg-white"
            ></motion.div>
            {/* Second bar */}
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{ rotate: nav ? 45 : 0 }}
              className="h-[2px] w-full bg-white"
            ></motion.div>
          </motion.div>
          {/* Logo */}
          <motion.div
            variants={fadeIn('down', 'tween', 1.2, 1.4)}
            className="order-1 lg:order-none lg:ml-[8.6595rem]"
          >
            <a href="#">
              {/* If haeder is active make logo 90 x 90 else 107 x 107px */}
              <img
                className={`${isActive ? 'h-[90px]' : 'h-[107px]'}`}
                src={LogoWhite}
                alt=""
              />
            </a>
          </motion.div>
          {/* Social icons */}
          <motion.div
            variants={fadeIn('down', 'tween', 1.4, 1.4)}
            className="hidden lg:flex"
          >
            <Socials />
          </motion.div>
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate={nav ? 'show' : ''}
            className="absolute top-[120px] bottom-0 right-0 z-50 h-[55vh] w-[310px] rounded-lg bg-accent shadow-xl lg:left-0"
          >
            <Nav />
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
