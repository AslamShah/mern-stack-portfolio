import Image from 'next/image';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

import { BookmarkIcon, Hexagon, LocationIcon } from '@/icons';

import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { SocialIcon } from './SocialIcon';

const technologies = [
  'HTML 5',
  'CSS 3',
  'Javascript',
  'React',
  'Node',
  'Python',
  'C++',
  'Mongo',
];

export function ProfileCard() {
  return (
    <div className='h-1/2 rounded-2xl border-2'>
      <div className='flex h-[15vh] w-full items-start justify-end rounded-t-2xl bg-gradient p-3'>
        <Link href='/profile/edit'>
          <div className='rounded-lg bg-gradient-to-bl from-[#F4F4F51F] to-[#F4F4F552] p-[2px]'>
            <Button className='flex h-full w-full items-center gap-3 rounded-lg bg-white/0 text-white backdrop-blur-lg'>
              <HiPencilAlt />
              Edit cover
            </Button>
          </div>
        </Link>
      </div>
      <div className='flex gap-10 p-5'>
        <div className='relative -top-20'>
          <Image
            src='/profile.jpeg'
            className='rounded-full'
            width={200}
            height={200}
            alt='profile pic'
          />
          <div className='relative'>
            <Hexagon
              className='absolute -right-5 -top-16'
              width='100'
              height='100'
            />
            <span className='absolute -top-8 right-6 text-xl font-bold text-white'>
              5
            </span>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
              <h1 className='text-3xl font-bold text-primary-black'>
                Anna Cheng
              </h1>
              <Badge className='bg-pro text-black'>Pro</Badge>
              <Badge className='bg-[#E0F2FE] text-[#075985]'>
                Looking for job
              </Badge>
            </div>
            <h3 className='text-xl text-secondary'>
              Full stack dev at codedamn | Harvard’22”
            </h3>
            <h3 className='flex items-center gap-2 text-xl text-grey-light'>
              <LocationIcon />
              Mumbai, India
            </h3>
          </div>
          <div className='mt-10 flex flex-wrap gap-4'>
            {technologies.map(tech => (
              <Badge key={tech} className='text-grey-dark bg-border'>
                {tech}
              </Badge>
            ))}
          </div>
          <div className='my-10 h-px bg-border' />
          <div className='flex flex-col items-start justify-between gap-3 md:flex-row md:items-center md:gap-0'>
            <div className='flex gap-4'>
              <SocialIcon icon='google' href='https://google.com' />
              <SocialIcon icon='instagram' href='https://instagram.com' />
              <SocialIcon icon='facebook' href='https://facebook.com' />
              <SocialIcon icon='linkedin' href='https://linkedin.com' />
              <SocialIcon icon='youtube' href='https://youtube.com' />
            </div>
            <div className='flex gap-4'>
              <Button className='bg-border'>
                <BookmarkIcon />
              </Button>
              <Button className='bg-primary font-semibold text-white'>
                Contact
              </Button>
              <Link href='/profile/edit'>
                <Button className='bg-secondary font-semibold text-white'>
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
