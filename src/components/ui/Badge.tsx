import { PropsWithChildren } from 'react';

type BadgeProps = {
  className?: string;
};

export default function Badge(props: PropsWithChildren<BadgeProps>) {
  return (
    <div
      className={`text-md h-full rounded-lg px-2 py-1 text-center font-semibold ${props.className}`}
    >
      {props.children}
    </div>
  );
}