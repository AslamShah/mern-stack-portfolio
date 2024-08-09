import { HiChevronDown, HiSearch } from 'react-icons/hi';

import { Input } from '../Input';

export default function SearchBox() {
  return (
    <div className='relative'>
      <HiSearch className='absolute left-3 top-3 text-xl text-secondary' />
      <Input placeholder='Search' className='pl-10' />
      <button className='absolute right-2 top-1.5 flex items-center gap-2 rounded-lg bg-border p-1'>
        Courses
        <HiChevronDown />
      </button>
    </div>
  );
}
