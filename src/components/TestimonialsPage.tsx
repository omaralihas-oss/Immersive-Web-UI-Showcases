import { useState } from 'react';
import { TestimonialCard } from './ui/testimonial-cards';
import { 
  Quote, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  MessageSquare, 
  Users, 
  ThumbsUp, 
  Star,
  ChevronRight,
  MousePointerClick
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    testimonial: "I feel like I've learned as much from Lithos as I did completing my masters. It's the first thing I read every morning.",
    author: "Jenn F. - Marketing Director @ Square"
  },
  {
    id: 2,
    testimonial: "My boss thinks I know what I'm doing. Honestly, I just read this newsletter.", 
    author: "Adrian Y. - Product Marketing @ Meta"
  },
  {
    id: 3,
    testimonial: "Can not believe this is free. If Lithos was $5,000 a month, it would be worth every penny. I plan to name my next child after Lithos.",
    author: "Devin R. - Growth Marketing Lead @ OpenAI"
  }
];

export default function TestimonialsPage() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    setPositions((prev) => {
      const newPositions = [...prev];
      const last = newPositions.pop();
      if (last !== undefined) {
        newPositions.unshift(last);
      }
      return newPositions;
    });
  };

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between font-sans overflow-hidden bg-slate-950">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 flex flex-col justify-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual copy & details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-300 backdrop-blur-md uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Community & Praise
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">Thousands</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Discover how industry leaders, engineers, and designers use our platform to accelerate their workflows, master complex topics, and build beautiful digital products.
            </p>

            {/* Microstats / Trust indicators */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-900/40 border border-slate-800/40 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-indigo-400 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Subscribers</span>
                </div>
                <span className="text-2xl font-bold text-white">42,000+</span>
              </div>
              <div className="p-4 bg-slate-900/40 border border-slate-800/40 rounded-xl backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-fuchsia-400 mb-1">
                  <Star className="w-4 h-4 fill-fuchsia-400/20" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Rating</span>
                </div>
                <span className="text-2xl font-bold text-white">4.95 / 5.0</span>
              </div>
            </div>

            {/* Quick guide on interaction */}
            <div className="flex items-center gap-3 p-3.5 bg-slate-900/30 border border-slate-800/20 rounded-xl text-slate-400 text-xs sm:text-sm">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                <MousePointerClick className="w-4 h-4" />
              </div>
              <div>
                <p className="font-medium text-slate-200">Interactive Stack</p>
                <p>Drag the front card to the left to shuffle the testimonials stack.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Card Carousel Showcase */}
          <div className="lg:col-span-7 flex justify-center items-center py-8">
            <div className="relative h-[480px] w-full max-w-[420px] flex justify-center">
              
              {/* Stack Wrapper with fixed bounds */}
              <div className="relative h-[450px] w-[350px]">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={testimonial.id}
                    id={testimonial.id}
                    testimonial={testimonial.testimonial}
                    author={testimonial.author}
                    handleShuffle={handleShuffle}
                    position={positions[index]}
                  />
                ))}
              </div>

              {/* Swipe controller overlay helper */}
              <button 
                onClick={handleShuffle}
                className="absolute -bottom-8 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-95 transition-all group z-30"
              >
                Next Testimonial
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

            </div>
          </div>

        </div>

        {/* Feature Cards / Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 relative">
          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Quote className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-playfair italic">Authentic Opinions</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every testimonial belongs to a real industry specialist sharing their unbiased platform feedback.
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Dynamic Stacking</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Smooth, fluid layout transformations powered by hardware-accelerated Framer Motion dragging.
            </p>
          </div>

          <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-6 rounded-xl space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Always Growing</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              We continually upgrade our platform based directly on subscriber reports and requested features.
            </p>
          </div>
        </div>

      </div>

      {/* Footer Info */}
      <footer className="relative z-10 py-6 border-t border-slate-900/80 bg-slate-950/20 text-center text-xs text-slate-500">
        <p>© 2026 Lithos Media. Delivering knowledge daily.</p>
      </footer>
    </div>
  );
}
