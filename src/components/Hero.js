import { heroData } from '../data';
import Header from './Header';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

const Hero = () => {
  const { pretitle, title, subtitle, btnText } = heroData;

  return (
    <section className="min-h-[980px] bg-hero bg-cover bg-right">
      <Header />
      <div className="container mx-auto flex min-h-[980px] items-center justify-center">
        <motion.div
          variants={staggerContainer(0.3, 1)}
          initial="hidden"
          whileInView={'show'}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            variants={fadeIn('down', 'tween', 0.2, 1.1)}
            className="mb-1 font-primary text-[24px] italic text-white lg:text-[28px] lg:font-medium"
          >
            {pretitle}
          </motion.div>
          <motion.h1
            variants={fadeIn('down', 'tween', 0.3, 1.1)}
            className="h1 mb-5"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.1)}
            className="mb-8 max-w-[540px] text-white"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
            <button className="btn">{btnText}</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
