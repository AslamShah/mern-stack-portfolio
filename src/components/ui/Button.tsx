import { PropsWithChildren } from 'react';

type ButtonProps = {
  className?: string;
};

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={`rounded-lg px-4 py-2 hover:bg-opacity-75 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
