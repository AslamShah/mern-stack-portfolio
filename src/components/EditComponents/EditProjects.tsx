'use client';

import { setServers } from 'dns';
import { Dispatch, SetStateAction, useState } from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

import Button from '../ui/Button';
import { Card } from '../ui/Card';

export function EditProjects() {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <div className='mb-2 flex items-center justify-between'>
        <h3 className='mb-5 text-3xl font-bold'>Projects</h3>
        <Button className='font-semibold text-secondary hover:bg-border'>
          See all
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-5'>
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <ProjectCard
              key={i}
              idx={i}
              setSelected={setSelected}
              isSelected={selected === i}
            />
          ))}
      </div>
    </div>
  );
}

function ProjectCard(props: {
  idx: number;
  setSelected: Dispatch<SetStateAction<number>>;
  isSelected: boolean;
}) {
  return (
    <Card
      onClick={() => props.setSelected(props.idx)}
      className={props.isSelected ? 'border-primary bg-primary/5' : ''}
    >
      <img src='/screenshot.png' alt='' />
      <div className='mt-3 flex items-center justify-between'>
        <h3 className='text-xl font-bold'>Personal Portfolio Website</h3>
        <HiDotsHorizontal className='cursor-pointer text-secondary' />
      </div>
      <div className='md:text-md flex items-center gap-2 text-xs text-secondary'>
        HTML/CSS • Javascript • 1 min ago
      </div>
      <div className='flex flex-col items-start md:flex-row md:items-center md:space-x-2'>
        <div className='flex -space-x-2'>
          <img src='/profile2.png' alt='' className='h-8 w-8 rounded-full' />
          <img src='/profile.jpeg' alt='' className='h-8 w-8 rounded-full' />
        </div>
        <p className='text-secondary'>3 contributors</p>
      </div>
    </Card>
  );
}
