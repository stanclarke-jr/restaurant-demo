import Newsletter from './Newsletter';
import Copyright from './Copyright';
import Socials from './Socials';

import { footerData } from '../data';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

const Footer = () => {
  const { contact, hours, social } = footerData;
  return (
    <footer className="relative top-96 z-20 bg-dark pt-20 lg:min-h-[620px] lg:bg-transparent lg:bg-footer lg:bg-cover lg:bg-center lg:bg-no-repeat lg:pt-32">
      <div className="container mx-auto h-full">
        {/* Newsletter & restaurant info*/}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={'show'}
          className="flex h-full flex-col gap-y-12"
        >
          <motion.div variants={fadeIn('up', 'tween', 0.4, 1.6)}>
            <Newsletter />
          </motion.div>
          {/* Restaurant info */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.6, 1.6)}
            className="flex flex-col gap-y-12 lg:mb-12 lg:flex-row lg:justify-evenly lg:gap-x-[130px] lg:gap-y-0"
          >
            {/* Contact information */}
            <div className=" lg:max-w-[220px]">
              <div className="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]">
                {contact.title}
              </div>
              <div className="capitalize">{contact.address}</div>
              <div className="capitalize">{contact.phone}</div>
            </div>
            {/* Hours */}
            <div className="">
              <div className="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]">
                {hours.title}
              </div>
              {hours.open.map((item, index) => {
                return (
                  <div key={index} className="mb-2 flex flex-col capitalize">
                    <div>{item.days}</div>
                    <div className="text-lg text-accent/80">{item.hours}</div>
                  </div>
                );
              })}
            </div>
            {/* Social media */}
            <div className="-mt-2 mb-12  lg:mt-0 lg:max-w-[280px]">
              <div className="mb-[22px] font-primary text-[20px] font-normal capitalize text-white lg:text-[22px]">
                {social.title}
              </div>
              <Socials />
            </div>
          </motion.div>
          <Copyright />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
