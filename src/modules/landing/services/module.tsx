import React from 'react';

import CardService from '@/components/card-service/CardService';

const ServiceModule = () => {
  return (
    <main className='min-h-full w-full bg-gradient-to-b from-primary to-primary-foreground py-16 font-clashDisplay text-white dark:from-secondary-foreground dark:to-secondary-foreground'>
      <div className='relative mx-auto max-w-7xl overflow-x-hidden px-4 text-center md:text-start'>
        <h1 className='absolute -left-0 -top-6 mt-2 overflow-hidden text-8xl font-bold text-white opacity-20  md:text-9xl lg:-left-0 lg:text-9xl'>
          Services
        </h1>
        <div className='relative z-10'>
          <p className='font-poppins text-xl font-semibold'>- Services</p>
          <h2 className='text-4xl font-medium tracking-wider lg:text-5xl'>
            My <span className='text-tertiary'>Services</span>
          </h2>
        </div>

        <div className='mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <CardService />
          <CardService />
          <CardService />
        </div>
      </div>
    </main>
  );
};

export default ServiceModule;
