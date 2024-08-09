import { PropsWithChildren } from 'react';

import Button from '@/components/ui/Button';
import { Sidebar } from '@/components/ui/Sidebar';

export default function EditLayout({ children }: PropsWithChildren) {
  return (
    <div className='h-full'>
      <div className='flex gap-16'>
        <Sidebar />
        <main className='flex-1'>{children}</main>
      </div>
      <footer className='mt-5 flex justify-end gap-5'>
        <Button className='bg-border font-semibold'>Cancel</Button>
        <Button className='bg-primary font-semibold text-white'>
          Save changes
        </Button>
      </footer>
    </div>
  );
}
