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
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="h2 max-w-[400px] capitalize text-white">{title}</h2>
          <p className="mb-8 capitalize text-white/70">{subtitle}</p>
          <div>
            <img src={modelImg} alt="" />
          </div>
        </div>
      </div>
      {/* Menu gallery */}
      <div className="relative top-80 lg:top-96">
        <div className="container mx-auto">
          <div>
            <div>
              {menuItems.map((item, index) => {
                const { image, name, price, description } = item;
                return (
                  <div key={index}>
                    <div className="flex h-full flex-row lg:flex-col">
                      {/* Image */}
                      <div>
                        <img src={image} alt={name} />
                      </div>
                      {/* Content */}
                      <div className="lg:max-h-[250px]: flex-1 flex-col justify-center bg-[#fff3e4] px-6 pt-12 lg:p-12 xl:max-h-max">
                        <div>
                          <div>{name}</div>
                          <div>{price}</div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
