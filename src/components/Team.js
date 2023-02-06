import { teamData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Team = () => {
  const {
    pretitle,
    title,
    sub1,
    sub2,
    name,
    occupation,
    signatureImg,
    chefImg,
  } = teamData;

  return (
    <section className="relative top-96 z-10 min-h-[720px] lg:top-[480px]">
      <div className="container mx-auto">
        {/* Content and image wrapper */}
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[120px]">
          {/* Content */}
          <motion.div
            variants={fadeIn('down', 'tween', 0.6, 1.6)}
            initial="hidden"
            whileInView={'show'}
            className="flex-1 text-center lg:pt-16 lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-[60px]">{sub1}</p>
            <p className="">{sub2}</p>
            <div className="my-[26px]">
              <div className="text-2xl font-semibold capitalize text-accent">
                {name}
              </div>
              <div className="text-gray/70 text-[15px] font-semibold capitalize">
                {occupation}
              </div>
            </div>
            <div className="mb-6 flex justify-center lg:mb-0 lg:justify-start">
              <img src={signatureImg} alt={`${name}'s signature`} />
            </div>
          </motion.div>
          {/* Image */}
          <motion.div
            variants={fadeIn('up', 'tween', 0.7, 1.6)}
            initial="hidden"
            whileInView={'show'}
            className="flex-1"
          >
            <img src={chefImg} alt={name} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
