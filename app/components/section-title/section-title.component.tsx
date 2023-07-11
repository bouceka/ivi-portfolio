// @flow
import * as React from 'react';
type Props = {
  title: string;
  id?: string;
};
export const SectionTitle = ({ title, id }: Props) => {
  return (
    <div className='section-title h-8 container w-[920px] mx-auto justify-start items-center flex' id={id}>
      <div className='w-[920px] h-[1px] relative bg-neutral-700'></div>
      <h3>{title}</h3>
    </div>
  );
};
