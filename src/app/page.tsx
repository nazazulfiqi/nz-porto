'use client';

import * as React from 'react';
import '@/lib/env';

import Navbar from '@/components/navbar';



/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <section className='bg-white'>
       <Navbar/>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
       <h1 className='mt-8 text-4xl md:text-6xl text-primary dark:text-primary'>TEST</h1>
        </div>
      </section>
    </main>
  );
}
