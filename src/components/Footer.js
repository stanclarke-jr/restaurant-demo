import Newsletter from './Newsletter';
import Copyright from './Copyright';
import Socials from './Socials';

import { footerData } from '../data';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainerS } from '../variants';

const Footer = () => {
  const { contact, hours, social } = footerData;
  return (
    <footer className="relative top-96 z-20 bg-dark pt-20 lg:min-h-[620px] lg:bg-transparent lg:bg-footer lg:bg-center lg:bg-no-repeat">
      <div className="container mx-auto h-full">
        {/* Newsletter & restaurant info*/}
        <div>
          <div>
            <Newsletter />
          </div>
          {/* Restaurant info */}
          <div>info</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
