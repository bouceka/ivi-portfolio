'use client';
// @flow
import useElementVisible from '@/app/_hooks/ElementVisible';
import * as React from 'react';

export const Header = () => {
  const { elementRef, isElementVisible } = useElementVisible();
  function greetVisitor() {
    const currentHour = new Date().getHours();

    if (currentHour >= 0 && currentHour < 12) {
      return 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good afternoon!';
    } else {
      return 'Good evening!';
    }
  }

  return (
    <header
      ref={elementRef}
      className={`opacity-0 ${isElementVisible ? 'animate-section-up' : ''}  sm:container lg:w-[57.5rem] mx-auto`}
    >
      <h1 className="text-smHeader md:text-mdHeader lg:text-header pt-32 pb-16 lg:py-24">
        {greetVisitor()} <span className="whitespace-nowrap">I&apos;m Ivi Nguyen.</span> A Creative Digital Marketer in Canada. I love to
        communicate with people through my work.
      </h1>
    </header>
  );
};
