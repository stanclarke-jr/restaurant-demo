import { menuData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../variants';

const Menu = () => {
  const { title, subtitle, modelImg, menuItems, btnText } = menuData;

  return (
    <section className="min-h-[780px]">
      {/* Backgroun image */}
      <div className="absolute -z-0 h-[780px] w-full max-w-[1800px] bg-menu"></div>
      {/* Menu */}
      <div className="relative top-72 z-10 lg:top-52">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
          className="container mx-auto flex flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeIn('down', 'tween', 0.2, 1.6)}
            className="h2 max-w-[400px] capitalize text-white"
          >
            {title}
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 'tween', 0.4, 1.6)}
            className="mb-8 capitalize text-white/70"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={fadeIn('down', 'tween', 0.6, 1.6)}>
            <img src={modelImg} alt="" />
          </motion.div>
        </motion.div>
      </div>
      {/* Menu gallery */}
      <motion.div
        initial={{
          opacity: 0,
          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'tween',
          delay: 0.2,
          duration: 1.6,
          ease: 'easeOut',
        }}
        className="relative top-80 lg:top-96"
      >
        <div className="container mx-auto">
          <div className="z-30 mb-8 min-h-[590px] md:mb-4 lg:-mt-24 xl:mb-16">
            <div className="grid min-h-[590px] grid-cols-1  lg:grid-cols-4">
              {menuItems.map((item, index) => {
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    <div className="flex h-full lg:flex-col">
                      {/* Image */}
                      {/* Reverse order of first and last image */}
                      <div
                        className={`w-[45%] md:w-auto ${
                          index === 1 || index === 3
                            ? 'lg:order-1'
                            : 'order-none'
                        }`}
                      >
                        <img src={image} alt={name} />
                      </div>
                      {/* Content */}
                      <div className="flex flex-1 flex-col justify-center bg-[#fff3e4] px-6 lg:max-h-[250px] lg:p-12 xl:max-h-max">
                        <div className="text-center">
                          <div className="text-xl font-semibold text-dark xl:text-2xl">
                            {name}
                          </div>
                          <div className="my-1 text-[20px] font-semibold text-accent lg:my-6 lg:text-[40px]">
                            {price}
                          </div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button className="btn mx-auto capitalize">{btnText}</button>
        </div>
      </motion.div>
    </section>
  );
};

export default Menu;
