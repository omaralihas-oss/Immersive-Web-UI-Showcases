import { MIcon } from './MIcon';

export function VelorahHeroPreview() {
  const VIDEO_SRC = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
  
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl" style={{ backgroundColor: "hsl(201 100% 13%)" }}>
      <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover z-0">
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <nav className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="font-serif text-lg tracking-tight text-white">Velorah<sup className="text-[0.5em]">®</sup></div>
        <div className="hidden md:flex gap-4 text-[10px] text-white/60">
          <span className="text-white">Home</span>
          <span className="hover:text-white">Studio</span>
          <span className="hover:text-white">About</span>
          <span className="hover:text-white">Journal</span>
          <span className="hover:text-white">Reach Us</span>
        </div>
        <div className="liquid-glass rounded-full px-3 py-1 text-[10px] text-white">Begin Journey</div>
      </nav>
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-7 pb-6">
        <h1 className="font-serif text-4xl font-normal leading-[0.95] tracking-[-0.03em] max-w-[90%] animate-fade-rise text-white">
          Where <em className="not-italic text-white/55">dreams</em> rise <em className="not-italic text-white/55">through the silence.</em>
        </h1>
        <p className="animate-fade-rise-delay text-white/60 text-xs leading-relaxed max-w-md mt-4">
          We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
        </p>
        <div className="animate-fade-rise-delay-2 liquid-glass rounded-full px-6 py-2.5 text-[10px] text-white mt-5">
          Begin Journey
        </div>
      </div>
    </div>
  );
}
