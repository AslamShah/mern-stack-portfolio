'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { useHover } from 'usehooks-ts';

import { SidebarIcon, SidebarInactiveIcon } from '@/icons';

import { Card } from './Card';

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='w-1/4'>
      <Card className='px-0'>
        <ul className='flex flex-col items-start justify-start space-y-7'>
          <SidebarItem
            isActive={pathname === '/profile/edit'}
            href='/profile/edit'
            label='Profile'
          />
          <SidebarItem
            isActive={pathname === '/profile/edit/socials'}
            label='Socials'
          />
          <SidebarItem
            isActive={pathname === '/profile/edit/portfolio'}
            label='Portfolio'
          />
          <SidebarItem
            isActive={pathname === '/profile/edit/resume'}
            label='Resume'
          />
        </ul>
      </Card>
    </aside>
  );
}

function SidebarItem(props: SidebarItemProps) {
  const hoverRef = useRef<HTMLAnchorElement>(null);
  const isHover = useHover(hoverRef);

  return (
    <li className='w-full'>
      <Link
        href={props.href ?? `/profile/edit/${props.label.toLowerCase()}`}
        ref={hoverRef}
      >
        <div className='relative flex items-center gap-5 px-5'>
          {!props.isActive && isHover && (
            <div className='absolute -left-0.5 h-full w-1 rounded-e-md bg-black' />
          )}
          {props.isActive && (
            <div className='absolute -left-0.5 h-full w-1 rounded-e-md bg-black' />
          )}
          {props.isActive ? <SidebarIcon /> : <SidebarInactiveIcon />}
          <span
            className={`${
              props.isActive ? 'text-black' : 'text-grey-light'
            } font-semibold`}
          >
            {props.label}
          </span>
        </div>
      </Link>
    </li>
  );
}

type SidebarItemProps = {
  isActive: boolean;
  label: string;
  href?: string;
};
