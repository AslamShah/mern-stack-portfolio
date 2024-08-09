import { ReactNode } from 'react';

import { Card } from '@/components/ui/Card';

import { CupIcon, HeartBeatIcon, LightningIcon, StarFourIcon } from '@/icons';

export function Stats() {
  return (
    <div>
      <h3 className='mb-5 text-3xl font-bold'>Stats</h3>
      <div className='grid grid-cols-2 gap-5'>
        <StatsCard
          value='2'
          statType='Longest streak'
          icon={<LightningIcon enableGlow />}
        />
        <StatsCard
          value='1200'
          statType='Experience points'
          icon={<StarFourIcon />}
        />
        <StatsCard
          value='Novice'
          statType='Current league'
          icon={<CupIcon />}
        />
        <StatsCard
          value='120'
          statType='Karma points'
          icon={<HeartBeatIcon />}
        />
      </div>
    </div>
  );
}

function StatsCard(props: {
  icon: ReactNode;
  value: string;
  statType: string;
}) {
  return (
    <Card>
      <div className='flex gap-2'>
        {props.icon}
        <div className='flex flex-col'>
          <h3 className='text-2xl font-bold'>{props.value}</h3>
          <p className='text-secondary'>{props.statType}</p>
        </div>
      </div>
    </Card>
  );
}
