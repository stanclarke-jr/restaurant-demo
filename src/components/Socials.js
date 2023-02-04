import { socialData } from '../data';

const Socials = () => {
  return (
    <div className="flex gap-x-[10px]">
      {socialData.map((item, index) => {
        return (
          <a
            key={index}
            className="flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white/20 text-sm transition-all hover:border-accent hover:text-accent"
            href={item.href}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
