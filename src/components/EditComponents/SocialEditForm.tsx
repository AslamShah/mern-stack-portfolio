import { Input } from '../ui/Input';

export function SocialEditForm() {
  return (
    <div className='flex flex-col gap-5'>
      <Input label='GitHub' id='github' placeholder='GitHub Profile URL' />
      <Input
        label='LinkedIn'
        id='linkedin'
        placeholder='Linkedin Profile URL'
      />
      <Input
        label='Facebook'
        id='facebook'
        placeholder='Facebook Profile URL'
      />
      <Input
        label='Instagram'
        id='instagram'
        placeholder='Instagram Profile URL'
      />
      <Input
        label='Dribbble'
        id='dribbble'
        placeholder='Dribbble Profile URL'
      />
      <Input label='Behance' id='behance' placeholder='Behance Profile URL' />
    </div>
  );
}
