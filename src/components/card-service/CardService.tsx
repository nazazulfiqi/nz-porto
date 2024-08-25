import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MdWeb } from 'react-icons/md';

const CardService = () => {
  return (
    <div className='group'>
      <div className='flex flex-col items-center justify-center gap-8 rounded-3xl bg-primary-foreground p-8 drop-shadow-md group-hover:bg-white group-hover:text-secondary dark:bg-secondary'>
        <div className='rounded-full bg-primary/60 p-4 shadow-xl group-hover:bg-primary/40 group-hover:text-primary-foreground dark:bg-secondary-foreground '>
          <MdWeb size={80} />
        </div>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-medium'>Front-End</h1>
          <p className='font-poppins text-sm font-normal'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, at?
          </p>
        </div>
        <div>
          <Link href='/' className='flex items-center'>
            Learn More <FaArrowRightLong className='ml-2' />{' '}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardService;
