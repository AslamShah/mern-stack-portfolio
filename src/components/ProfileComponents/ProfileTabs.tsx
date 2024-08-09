'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '../ui/Button';

export function ProfileTabs() {
  const pathname = usePathname();
  const classes = {
    active: 'bg-primary/10 font-medium text-primary hover:bg-primary/20',
    inactive: 'hover:bg-border',
  };

  return (
    <div className='rounded-2xl border-2 px-5 py-3'>
      <div className='flex gap-5'>
        <Link href='/profile'>
          <Button
            className={
              pathname === '/profile' ? classes.active : classes.inactive
            }
          >
            Portfolio
          </Button>
        </Link>
        <Link href='/profile/resume'>
          <Button
            className={
              pathname === '/profile/resume' ? classes.active : classes.inactive
            }
          >
            Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
