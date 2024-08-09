import Button from '../ui/Button';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { SectionChoice } from './SectionChoice';

export function EditProfileForm() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex items-center gap-3'>
        <img src='/profile.jpeg' alt='profile' className='w-16 rounded-full' />
        <Button className='bg-primary font-semibold text-white'>
          Upload new picture
        </Button>
        <Button className='bg-border font-semibold'>Delete</Button>
      </div>
      <Input
        label='Display name'
        id='display-name'
        placeholder='Enter display name'
        helper='Name entered above will be used for all issued certificates'
      />
      <Input label='About' placeholder='Write about yourself' isTextarea />
      <Input
        label='Profession'
        id='profession'
        placeholder='Enter profession'
      />
      <Input type='date' label='Date of birth' id='dob' />
      <Input
        label='Gender'
        placeholder='What is your gender'
        isDropdown
        dropdownItems={['Male', 'Female', 'Other']}
      />
      <div className='mt-5 flex flex-col gap-2'>
        <h3 className='text-xl font-bold'>Section visibility</h3>
        <h5 className='text-secondary'>
          Select which sections and content should show on your profile page.
        </h5>
        <Card className='flex flex-col gap-5'>
          <SectionChoice
            title='Followers and following'
            subtitle='Shows your followers and the users you follow on codedamn'
          />
          <SectionChoice title='XP' subtitle='Shows the XP you have earned' />
          <SectionChoice
            title='Achievement Badges'
            subtitle='Shows your relative percentile and proficiency'
          />
        </Card>
      </div>
    </div>
  );
}
