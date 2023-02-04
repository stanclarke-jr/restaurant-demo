import { aboutData } from '../data';
import { motion } from 'framer-motion';
import { plateVariants, staggerContainer, fadeIn } from '../variants';

const About = () => {
  const { pretitle, title, subtitle, btnText, image } = aboutData;

  return (
    <section className="min-h-[620px]">
      <div className="container mx-auto min-h-[620px]">
        {/* Context & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="flex min-h-[620px] flex-col items-center lg:flex-row"
        >
          {/* Content */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-8 max-w-[560px]">{subtitle}</p>
            <button className="btn mx-auto capitalize lg:mx-0">
              {btnText}
            </button>
          </motion.div>
          {/* Image */}
          <motion.div
            variants={plateVariants}
            className="z-10 -mb-[300px] -mr-[186px]"
          >
            <img src={image} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
