import TestimonialCarousel from './TestimonialCarousel';
import { testimonialData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Testimonial = () => {
  const { title, subtitle, modelImg, slider } = testimonialData;

  return (
    <section className="relative top-[340px] z-10 h-[800px] bg-testimonial bg-cover bg-no-repeat pt-[90px] md:pt-[120px] lg:top-[390px]">
      <div className="container mx-auto">
        {/* Content */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1.6)}
          initial="hidden"
          whileInView={'show'}
          className="flex flex-col items-center text-center capitalize"
        >
          <h2 className="h2 text-white">{title}</h2>
          <p className="mb-8 capitalize text-white/70">{subtitle}</p>
          <div className="mb-8">
            <img src={modelImg} alt="" />
          </div>
        </motion.div>
        {/* Carousel */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 1.6)}
          initial="hidden"
          whileInView={'show'}
          className="flex items-center justify-center"
        >
          <TestimonialCarousel slider={slider} />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
