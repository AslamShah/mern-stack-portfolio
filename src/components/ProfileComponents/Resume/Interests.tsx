import Badge from '@/components/ui/Badge';

const interests = [
  'Semantics',
  'TED Talks',
  'Udemy',
  'Behavioral',
  'Economics',
  'Hiking',
];

export function Interests() {
  return (
    <div>
      <h2 className='text-3xl font-bold'>Tech skills</h2>
      <div className='mt-5 flex flex-wrap gap-5'>
        {interests.map((interest, idx) => (
          <InterestBadge key={idx} name={interest} />
        ))}
      </div>
    </div>
  );
}

function InterestBadge(props: { name: string }) {
  return (
    <Badge className='flex items-center gap-2 border-[1px] border-border bg-primary-light px-2 py-2'>
      {props.name}
    </Badge>
  );
}
