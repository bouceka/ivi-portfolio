// @flow
import * as React from 'react';
type Props = {
  title: string;
  id?: string;
  className?: string;
};
export const SectionTitle = ({ title, id, className }: Props) => {
  return (
    <div
      className={`${className ? className : ''} section-title h-8 container lg:w-[57.5rem] mx-auto justify-start items-center flex`}
      id={id}
    >
      <div className="w-full h-[1px] relative bg-neutral-700"></div>
      <h3>{title}</h3>
    </div>
  );
};
