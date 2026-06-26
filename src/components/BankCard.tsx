import React, { useRef, useState } from 'react';
import { CardData } from '../types';

interface BankCardProps {
  card: CardData;
  index: number;
  isActive: boolean;
}

export const BankCard: React.FC<BankCardProps> = ({ card, isActive }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;
    setTilt({ x: -y, y: x });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative w-96 h-60 cursor-pointer transition-transform duration-300 ease-out [transform-style:preserve-3d]"
      style={{
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-neutral-900 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          style={{ transform: `translateZ(-${i + 1}px)` }}
        />
      ))}
      
      <div 
        className={`relative w-full h-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-gradient-to-br from-slate-900 via-slate-700 to-black border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
          <video
            src={card.videoUrl}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-2xl"
          />
          <div className="relative flex justify-between items-start">
             <div className="w-14 h-10 bg-gradient-to-br from-gray-200 to-gray-400 rounded-md border border-black/20" />
             <div className="text-white font-black text-2xl tracking-widest opacity-80">JWT</div>
          </div>
          <div className="relative font-mono text-white tracking-widest">
            <div className="text-[10px] uppercase opacity-50 mb-1">Titanium Elite</div>
            <div className="text-xl">{card.cardNumber}</div>
          </div>
          <div className="absolute bottom-6 right-6 flex">
            <div className="w-10 h-10 rounded-full bg-orange-600 opacity-80" />
            <div className="w-10 h-10 rounded-full bg-red-600 opacity-80 -ml-4" />
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-neutral-900 border border-white/10 rounded-2xl flex flex-col">
          <div className="w-full h-12 bg-black mt-8" />
          <div className="p-6 font-mono text-neutral-400 text-xs">
            <div className="bg-white/10 h-8 w-48 mb-4 flex items-center justify-end px-3 text-black font-bold bg-white rounded">
              {card.cvv}
            </div>
            <div>{card.cardholderName}</div>
            <div className="mt-4 opacity-50">This card is property of JWT International. Use is subject to the terms of the Cardmember Agreement.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
