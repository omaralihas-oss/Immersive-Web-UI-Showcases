import { useEffect, useRef, useState } from 'react';
import { BankCard } from './BankCard';
import { CardData } from '../types';

const CARDS: CardData[] = [
  { id: '1', cardholderName: 'Alice Smith', cardNumber: '**** **** **** 1234', cvv: '123', videoUrl: 'https://www.w3schools.com/howto/movie.mp4' },
  { id: '2', cardholderName: 'Bob Jones', cardNumber: '**** **** **** 5678', cvv: '456', videoUrl: 'https://www.w3schools.com/howto/movie.mp4' },
  { id: '3', cardholderName: 'Charlie Brown', cardNumber: '**** **** **** 9012', cvv: '789', videoUrl: 'https://www.w3schools.com/howto/movie.mp4' },
];

export default function CarouselSection() {
  const [scrollX, setScrollX] = useState(0);
  const requestRef = useRef<number>(0);

  const animate = () => {
    setScrollX((prev) => (prev + 0.5) % 360);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black overflow-hidden perspective-[1350px]">
      <div 
        className="relative preserve-3d"
        style={{
          transform: `rotateY(${scrollX}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {CARDS.map((card, i) => (
          <div
            key={card.id}
            className="absolute"
            style={{
              transform: `rotateY(${(i * 360) / CARDS.length}deg) translateZ(400px)`,
            }}
          >
            <BankCard card={card} index={i} isActive={true} />
          </div>
        ))}
      </div>
    </div>
  );
}
