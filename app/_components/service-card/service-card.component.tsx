// @flow
import * as React from 'react';
type Props = {
  title: string;
  desc: string;
};
export const ServiceCard = ({ title, desc }: Props) => {
  return (
    <div className="p-6 w-[27.75rem]:max-lg sm:h-full  md:h-80 rounded border border border border border-neutral-700 flex-col justify-start items-start gap-4 md:gap-8 inline-flex">
      <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold ">{title}</h4>
      <p className="sm:text-md md:text-xl font-light leading-8 ">{desc}</p>
    </div>
  );
};
