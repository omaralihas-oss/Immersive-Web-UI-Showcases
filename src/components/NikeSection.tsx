import { useState } from 'react';
import SpotlightReveal from './SpotlightReveal';

export default function NikeSection() {
  const [isSecondVideoPlaying, setIsSecondVideoPlaying] = useState(false);

  return (
    <section
      className="relative z-10 w-full h-[100dvh] overflow-hidden bg-black text-white"
      style={{ boxShadow: '0 -20px 50px rgba(0,0,0,0.5)' }}
    >
      <SpotlightReveal
        imageSrc="https://github.com/dsMagnatov/Acreage-landing-assets/blob/main/02604201313.png?raw=true"
        videoSrc="https://pikaso.cdnpk.net/private/production/4024859125/d070ae9c-55df-47aa-acbe-4ee66337855c-0.mp4?token=exp=1777075200~hmac=4202c1d0ec90137eb6dffa8e0db93ed7569a68b2016165d8b1b567f888869ff5"
        isPlaying={isSecondVideoPlaying}
        baseRadius={520}
      />

      {/* Right-side hover zone */}
      <div
        className="absolute right-[calc(8%+100px)] bottom-[12%] w-[calc(50%-50px)] h-[calc(50%+230px)] z-30 hidden md:block"
        onMouseEnter={() => setIsSecondVideoPlaying(true)}
        onMouseLeave={() => setIsSecondVideoPlaying(false)}
      />
      {/* Left-side hover zone */}
      <div
        className="absolute left-[calc(8%+200px)] top-[calc(20%+190px)] w-[calc(15%+250px)] h-[calc(22.5%+130px)] -translate-y-full z-30 hidden md:block"
        onMouseEnter={() => setIsSecondVideoPlaying(true)}
        onMouseLeave={() => setIsSecondVideoPlaying(false)}
      />

      {/* Stats card */}
      <div className="absolute left-4 sm:left-[5%] md:left-[calc(8%+200px)] top-[15%] sm:top-[18%] md:top-[20%] z-20 w-[280px] md:w-[320px] p-6 py-4 md:py-6 bg-[rgba(0,0,0,0.16)] backdrop-blur-[80px] border border-[rgba(255,255,255,0.1)] rounded-sm">
        <div className="flex items-center gap-2">
          <div className="font-serif italic text-[#DA3A16] text-[48px] md:text-[72px] leading-[80px] tracking-tight">78%</div>
          <svg style={{ width: '160px', height: '80px' }} viewBox="0 0 289 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_878_28499)">
              <path d="M22.5 48.7306C39.7833 48.7306 49.34 54.94 63.1667 69.2965C76.9933 83.653 86.55 110.5 103.833 110.5C121.117 110.5 130.673 84.2876 144.5 59.2856C158.327 34.2837 167.883 19.5573 185.167 19.5573C202.45 19.5573 208.55 57.6673 225.833 57.6673C243.117 57.6673 249.217 19.5 266.5 19.5" stroke="#DA3A16" strokeWidth="2" />
            </g>
            <defs>
              <filter id="filter0_d_878_28499" x="0" y="0" width="289" height="138" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="11.25" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.854902 0 0 0 0 0.227451 0 0 0 0 0.0862745 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_878_28499" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_878_28499" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="font-serif text-white text-[15px] tracking-[0.02em] uppercase mb-2 leading-tight">NEXT-GEN CUSHIONING ARCHITECTURE</div>
        <div className="font-serif text-white/60 text-[13px]">Impact Absorption & Energy Return Dynamics</div>
      </div>

      {/* Hero headline */}
      <h2 className="absolute left-4 md:left-[8%] bottom-[8%] md:bottom-[12%] z-20 text-[24px] sm:text-[32px] md:text-[44px] leading-[1.05] tracking-tight flex flex-col max-w-[90%] md:max-w-[500px]">
        <span className="font-sans font-medium">Bringing Aerospace-</span>
        <span className="font-sans font-medium">Grade Infrastructure</span>
        <span className="font-serif font-normal pt-1 italic">
          <span className="not-italic">Directly To Your </span>
          <span>Everyday</span>
        </span>
        <span className="font-serif italic font-normal">Urban Exploration</span>
      </h2>

      {/* Nike branded CTA block */}
      <div className="absolute right-4 md:right-[calc(8%+100px)] bottom-[8%] md:bottom-[12%] z-20 flex flex-col items-center w-[140px] md:w-[180px]">
        <div className="bg-white py-[6px] w-full text-center text-black font-serif text-[10px] uppercase font-bold tracking-[0.08em] leading-[16px]">THE SCIENCE OF IMPACT CONTROL</div>
        <div className="bg-[#DA3A16] h-[80px] md:h-[100px] w-full flex items-center justify-center">
            <svg width="86" viewBox="135.5 361.38 420.32 149.8" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="m181.86 511.11c-12.524-0.49755-22.77-3.9244-30.782-10.289-1.529-1.2159-5.1725-4.8616-6.3949-6.3992-3.2489-4.0853-5.4578-8.0611-6.931-12.472-4.5334-13.579-2.2002-31.397 6.6737-50.953 7.5979-16.742 19.322-33.347 39.776-56.344 3.013-3.384 11.986-13.281 12.043-13.281 0.0216 0-0.46749 0.84706-1.083 1.8786-5.3183 8.9082-9.8689 19.401-12.348 28.485-3.9823 14.576-3.502 27.085 1.4068 36.784 3.3862 6.6822 9.1913 12.47 15.719 15.67 11.428 5.5993 28.159 6.0625 48.592 1.3554 1.4068-0.32599 71.116-18.831 154.91-41.123 83.794-22.294 152.36-40.52 152.37-40.505 0.0237 0.0193-194.68 83.333-295.75 126.56-16.007 6.8431-20.287 8.5715-27.812 11.214-19.236 6.7551-36.467 9.9783-50.396 9.4251z"/>
            </svg>
        </div>
      </div>
    </section>
  );
}
