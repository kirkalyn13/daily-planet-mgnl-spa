import Image from '../../fragments/Image';
import IHeroProps from "./Hero.model";

const Hero = ({
  backgroundImage,
  title,
  subtitle,
  description,
}: IHeroProps) => {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden">
      {backgroundImage && 
      <Image 
        image={backgroundImage} 
        alt={title || 'Hero Image'} 
        caption=""
        styles="
            object-cover object-center 
            absolute inset-0 -z-10 
            scale-125 md:scale-100
            transition-transform duration-500 ease-out
        "/>}
      <div className="absolute inset-0 bg-black/50 -z-0" />
      <div className="relative z-10 max-w-3xl text-white">
        {subtitle && (
          <p className="text-sm uppercase tracking-widest mb-3 text-gray-300">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-200">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero