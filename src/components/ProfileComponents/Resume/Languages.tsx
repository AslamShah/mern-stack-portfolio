import Badge from '@/components/ui/Badge';

export function Languages() {
  return (
    <div>
      <h2 className='text-3xl font-bold'>Tech skills</h2>
      <div className='mt-5 flex flex-wrap gap-5'>
        <LanguageBadge name='English' flag='/flags/us.svg' />
        <LanguageBadge name='Mandarin' flag='/flags/tw.svg' />
        <LanguageBadge name='Cantanose Chinese' flag='/flags/cn.svg' />
      </div>
    </div>
  );
}

function LanguageBadge(props: { name: string; flag: string }) {
  return (
    <Badge className='flex items-center gap-2 border-[1px] border-border bg-primary-light px-2 py-2'>
      <img src={props.flag} alt={props.name} />
      {props.name}
    </Badge>
  );
}
