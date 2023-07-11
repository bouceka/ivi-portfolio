// @flow
import * as React from 'react';
type Props = {
  title: string;
  desc: string;
};
export const ServiceCard = ({ title, desc }: Props) => {
  return (
    <div className='p-6 w-[444px] h-80 rounded border border border border border-neutral-700 flex-col justify-start items-start gap-8 inline-flex'>
      <div className='text-3xl font-extrabold '>{title}</div>
      <div className='text-xl font-light leading-8 '>{desc}</div>
    </div>
  );
};
