import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../slider.css';

const TestimonialCarousel = ({ slider }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={false}
      infiniteLoop={true}
      className="flex w-full max-w-[1024px] items-center justify-center "
    >
      {slider.map((item, index) => {
        const { message, image, name, occupation } = item;

        return (
          <div key={index} className="mx-auto max-w-[840px] px-24 text-white">
            <div className="mb-9 text-lg leading-snug lg:text-2xl">
              {message}
            </div>
            <div className="mx-auto mb-3 max-w-[70px] lg:max-w-[100px]">
              <img src={image} alt={name} />
            </div>
            <div className="text-[22px] font-bold text-accent">{name}</div>
            <div className="font-medium italic">{occupation}</div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestimonialCarousel;
