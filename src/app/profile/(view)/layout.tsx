import { PropsWithChildren } from 'react';

import { ProfileCard, ProfileTabs } from '@/components/ProfileComponents';

export default function ProfileLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col gap-10'>
      <ProfileCard />
      <ProfileTabs />
      {children}
    </div>
  );
}
