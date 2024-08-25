import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaCircleArrowRight } from 'react-icons/fa6';
import { PiStarFourFill } from 'react-icons/pi';

import { Button } from '@/components/ui/button';

import { skills } from '@/constant/skills';

const HeroModule = () => {
  return (
    <main className='w-full dark:bg-secondary-foreground'>
      <div className='py-8 text-center text-secondary dark:text-white'>
        <p className='pb-4 text-xl font-semibold'>- Hello</p>
        <h1 className='font-clashDisplay text-4xl font-medium tracking-wider lg:text-7xl'>
          I'm <span className='text-primary underline'> Naza,</span>
          <br />
          Software Engineer
        </h1>
      </div>
      <div className='relative -mt-12 md:-mt-16'>
        <div>
          <Image
            src='/images/landing-page/hero/hero.png'
            alt='Hero image'
            width={450}
            height={450}
            priority
            className='mx-auto'
          />
        </div>
        <div className='absolute inset-x-0 bottom-10 flex justify-center space-x-4'>
          <div className='space-x-4 rounded-full bg-white p-1'>
            <Button className='rounded-full border-2 border-primary-foreground bg-primary text-xl hover:bg-primary-foreground dark:bg-primary dark:text-white dark:hover:bg-primary-foreground'>
              Portfolio <FaCircleArrowRight className='ml-2' />
            </Button>
            <Button
              className='rounded-full border-2 border-black text-xl text-black dark:bg-secondary-foreground dark:bg-white'
              variant='outline'
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>

      <div className='bg-tertiary z-10 flex h-16 w-full items-center justify-center'>
        <Marquee autoFill>
          {skills.map((skill) => (
            <div
              key={skill}
              className='mx-2 flex items-center gap-4 font-clashDisplay text-2xl font-medium tracking-wider text-white'
            >
              <PiStarFourFill />
              {skill}
            </div>
          ))}
        </Marquee>
      </div>
    </main>
  );
};

export default HeroModule;
