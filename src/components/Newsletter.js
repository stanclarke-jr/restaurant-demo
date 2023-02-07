import { newsletterData } from '../data';

const Newsletter = () => {
  const { title, subtitle, placeholder, btnText } = newsletterData;

  return (
    <div className="bg-none lg:h-[220px] lg:bg-newsletter lg:bg-cover lg:bg-center lg:px-24 xl:bg-auto">
      <div className="flex h-full flex-col items-center justify-between lg:flex-row">
        {/* Title & Subtitle */}
        <div className="mb-4 text-center lg:text-left">
          <h3 className="h3 mb-2 font-primary text-[26px] font-medium capitalize text-white">
            {title}
          </h3>
          <p>{subtitle}</p>
        </div>
        <form className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-[10px]">
          <input
            className="input border border-white/20 bg-transparent text-white transition-all placeholder:font-light placeholder:capitalize placeholder:text-white/40 focus:ring-1 focus:ring-accent"
            type="text"
            placeholder={placeholder}
          />
          <button className="btn w-full capitalize lg:max-w-[204px]">
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
