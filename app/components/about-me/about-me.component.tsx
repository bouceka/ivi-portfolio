// @flow
import Image from 'next/image';
import * as React from 'react';
type Props = {};
export const AboutMe = (props: Props) => {
  return (
    <section className='about-me flex gap-10'>
      <div className='flex flex-col gap-10 grow shrink basis-0 text-xl font-light'>
        <p>
          Lorem ipsum dolor sit amet consectetur. Vel pulvinar felis morbi vitae vitae aliquet mauris id massa. Habitant
          augue urna elementum nisl erat diam id urna. Sed nulla tortor orci at duis semper quisque.
        </p>
        <p>
          Gravida et nec pellentesque non gravida semper massa. Massa ipsum lectus sit adipiscing condimentum. Cursus
          quis enim lectus ac habitant vulputate leo. Libero ut id a luctus non egestas. Iaculis vitae mauris risus
          cursus velit non.
        </p>
      </div>
      <Image width={100} height={100} alt='Ivi Nguyen' src='/ivi-photo.png' />
    </section>
  );
};
