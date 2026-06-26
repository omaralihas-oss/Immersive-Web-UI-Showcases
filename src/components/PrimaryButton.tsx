import { ReactNode } from 'react';
import { cn } from '../lib/utils';

interface PrimaryButtonProps {
  children: ReactNode;
  className?: string;
  as?: 'a' | 'button';
  href?: string;
  onClick?: () => void;
}

export function PrimaryButton({
  children,
  className,
  as: Component = 'a',
  href,
  onClick,
}: PrimaryButtonProps) {
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-black leading-none transition-colors h-12 px-9 text-sm font-medium overflow-hidden",
        className
      )}
    >
      <div className="relative overflow-hidden">
        {/* AnimatedText effect simulation */}
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
            {children}
        </span>
        <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
            {children}
        </span>
      </div>
    </Component>
  );
}
