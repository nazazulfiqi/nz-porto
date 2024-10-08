'use client';

import * as React from 'react';
import '@/lib/env';

import Navbar from '@/components/navbar';

import AboutModule from '@/modules/landing/about/module';
import HeroModule from '@/modules/landing/hero/module';
import ServiceModule from '@/modules/landing/services/module';

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
      <section className='bg-white dark:bg-secondary-foreground'>
        <Navbar />
        <div className='mx-auto min-h-screen'>
          <HeroModule />
          <ServiceModule />
          <AboutModule />
        </div>
      </section>
    </main>
  );
}
