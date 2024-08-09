import Button from '@/components/ui/Button';

import { PlaygroundCards } from './PlaygroundCard';

export function Playgrounds(props: { isEditing?: boolean }) {
  return (
    <div>
      <div className='mb-2 flex items-center justify-between'>
        <h3 className='mb-5 text-3xl font-bold'>Playgrounds</h3>
        <Button
          className={`font-semibold hover:bg-border ${
            props.isEditing ? 'text-secondary' : 'text-primary'
          }`}
        >
          {props.isEditing ? 'See all' : 'Create new playground'}
        </Button>
      </div>

      <PlaygroundCards isEditing={props.isEditing} />
    </div>
  );
}
