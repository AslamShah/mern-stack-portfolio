import { PropsWithChildren } from 'react';

export function Card({
  children,
  className,
  onClick,
}: PropsWithChildren<{ className?: string; onClick?: VoidFunction }>) {
  return (
    <div
      className={`flex flex-col justify-center gap-2 rounded-lg border-2 border-border bg-border/50 p-5 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
