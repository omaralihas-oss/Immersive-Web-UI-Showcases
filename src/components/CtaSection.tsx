import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeUp } from './FadeUp';
import { PrimaryButton } from './PrimaryButton';
import { CtaDashboardMock } from './CtaDashboardMock';
import { useIsMobile } from '../hooks/useMediaQuery';

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const dashboardY = useTransform(scrollYProgress, [0, 1], ["120px", "-120px"]);
  const grassY     = useTransform(scrollYProgress, [0, 1], isMobile ? ["80px", "-40px"] : ["200px", "-200px"]);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative w-full"
      style={{ background: "linear-gradient(to bottom, transparent 0%, #14191E 100%)" }}
    >
      <div className="relative mx-auto max-w-[1080px] px-6 pt-40 pb-[440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="relative z-20 max-w-[400px]">
            <FadeUp delay={1}>
              <h2 className="text-4xl font-normal tracking-[-0.02em] leading-[1.05] text-white">
                Learn how can one go from 0 to $11.5k with AI in 60 days.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-landing-text text-lg leading-[1.5] max-w-[380px]">
                Learn to turn your ideas into stunning websites with AI — the same skills agencies charge $5,000 for. Join the UI Rocket training and start building like a pro today.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-10">
              <PrimaryButton as="button">Start for free</PrimaryButton>
            </FadeUp>
          </div>
        </div>
      </div>

      <motion.div
        style={{ y: dashboardY }}
        className="absolute top-[500px] lg:top-20 right-4 lg:-right-[12%] z-10 w-[80%] lg:w-[68%]"
      >
        <CtaDashboardMock />
      </motion.div>

      <motion.img
        src="https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1780586778/cta-bg_mlwy5s.png"
        alt=""
        aria-hidden
        style={{ y: grassY }}
        className="pointer-events-none select-none absolute left-0 right-0 bottom-[-140px] w-full z-30 object-cover"
      />
    </section>
  );
}
