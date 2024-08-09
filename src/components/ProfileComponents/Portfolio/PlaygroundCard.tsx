'use client';

import { Radio } from 'flowbite-react';
import { Dispatch, ReactNode, SetStateAction, useState } from 'react';

import { Card } from '@/components/ui/Card';

import { Html5Logo, JSLogo } from '@/icons';

export function PlaygroundCards(props: { isEditing?: boolean }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className='grid grid-cols-2 gap-5'>
      {plays.map((play, idx) => (
        <PlaygroundCard
          key={idx}
          playground={play}
          idx={idx}
          isSelected={idx === selected}
          setSelected={setSelected}
          isEditing={props.isEditing}
        />
      ))}
    </div>
  );
}

function PlaygroundCard(props: PlaygroundCardProps) {
  return (
    <Card
      className={`relative ${
        props.isEditing && props.isSelected && 'border-primary bg-primary/5'
      }`}
    >
      {props.isEditing && (
        <Radio
          className='absolute right-5 top-5'
          name='playground'
          onChange={() => props.setSelected(props.idx)}
          defaultChecked={props.isSelected}
        />
      )}
      <div className='flex gap-4'>
        {props.playground.logo}
        <div className='flex flex-col gap-2'>
          <h3 className='text-2xl font-bold'>{props.playground.title}</h3>
          <p className='text-secondary'>
            {props.playground.tech} • {props.playground.timeago} ago
          </p>
          <div className='flex flex-col items-start md:flex-row md:items-center md:space-x-8'>
            <div className='flex -space-x-2'>
              <img
                src='/profile2.png'
                alt=''
                className='h-10 w-10 rounded-full'
              />
              <img
                src='/profile.jpeg'
                alt=''
                className='h-10 w-10 rounded-full'
              />
            </div>
            <p className='text-secondary'>
              Shared with <span className='font-bold'>Adam,</span>{' '}
              <span className='font-bold'>Anna..</span> +7 more
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

const plays: PlaygroundType[] = [
  {
    title: 'HTML Playground',
    tech: 'HTML/CSS',
    timeago: '1 day',
    logo: <Html5Logo width='40' height='40' />,
  },
  {
    title: 'JS Playground',
    tech: 'JavaScript',
    timeago: '1 min',
    logo: <JSLogo width='40' height='40' />,
  },
  {
    title: 'JS Playground',
    tech: 'JavaScript',
    timeago: '1 min',
    logo: <JSLogo width='40' height='40' />,
  },
  {
    title: 'HTML Playground',
    tech: 'HTML/CSS',
    timeago: '1 day',
    logo: <Html5Logo width='40' height='40' />,
  },
];

interface PlaygroundType {
  title: string;
  tech: string;
  timeago: string;
  logo: ReactNode;
}

type PlaygroundCardProps = {
  playground: PlaygroundType;
  isSelected?: boolean;
  idx: number;
  setSelected: Dispatch<SetStateAction<number>>;
  isEditing?: boolean;
};
