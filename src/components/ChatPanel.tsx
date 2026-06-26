import { FadeUp } from './FadeUp';
import { MIcon } from './MIcon';

const MESSAGES = [
  { role: 'assistant', text: "Welcome to the Vibe Design course! I'll guide you through building stunning websites with AI. What would you like to learn first?" },
  { role: 'user', text: "I want to learn how to build a hero section with a cinematic video background using AI." },
  { role: 'assistant', text: "Great choice! In this course, you'll learn how to create full-screen looping videos, liquid glass nav bars, email signups, and manifesto buttons — all with AI assistance. Let's dive in!" },
];

export function ChatPanel({ animateMessagesIn }: { animateMessagesIn?: boolean }) {
  return (
    <div className="flex flex-col h-full rounded-2xl border border-white/10 bg-[rgba(8,8,10,0.6)] backdrop-blur-[24px] overflow-hidden">
      <div className="flex items-center gap-3 p-4 border-b border-white/5">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5">
          <MIcon name="auto_awesome" size={14} />
        </div>
        <div>
          <div className="text-sm font-medium text-white">Vibe Design course</div>
          <div className="text-[11px] text-white/40">Learn how to build website with AI</div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-4 px-4 py-5">
        {MESSAGES.map((msg, i) => (
          <FadeUp key={i} delay={animateMessagesIn ? i * 0.12 : 0} y={16}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white/15 text-white/90 ml-auto' : 'bg-white/5 text-white/70 border border-white/5'}`}>
              {msg.text}
            </div>
          </FadeUp>
        ))}
      </div>
      <div className="p-3">
        <div className="liquid-glass rounded-2xl flex items-center p-1">
          <textarea className="flex-1 bg-transparent border-none outline-none text-sm text-white px-3 py-2 placeholder:text-white/30 resize-none" rows={1} placeholder="Ask about the course..." />
          <button className="bg-white text-black rounded-xl p-2">
            <MIcon name="arrow_upward" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
