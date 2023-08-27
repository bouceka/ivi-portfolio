'use client';
// @flow
import useElementVisible from '@/app/_hooks/ElementVisible';
import Image from 'next/image';
import * as React from 'react';

export const AboutMe = () => {
  const { elementRef, isElementVisible } = useElementVisible();

  return (
    <section className="sm:container flex items-center gap-10 flex-col lg:flex-row">
      <div className="flex flex-col gap-10 grow shrink basis-0 text-xl font-light">
        <p>
          Lorem ipsum dolor sit amet consectetur. Vel pulvinar felis morbi vitae vitae aliquet mauris id massa. Habitant augue urna
          elementum nisl erat diam id urna. Sed nulla tortor orci at duis semper quisque.
        </p>
        <p>
          Gravida et nec pellentesque non gravida semper massa. Massa ipsum lectus sit adipiscing condimentum. Cursus quis enim lectus ac
          habitant vulputate leo. Libero ut id a luctus non egestas. Iaculis vitae mauris risus cursus velit non.
        </p>
      </div>
      <div ref={elementRef} className={`${isElementVisible ? 'animate-section-left' : ''}`}>
        <Image className="w-56 object-cover" width={100} height={100} alt="Ivi Nguyen" src="/ivi-photo.png" />
      </div>
    </section>
  );
};
