// @flow
import { spawn } from 'child_process';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
type Props = {
  imageURL: string;
  occupation: string;
  title: string;
  extract: string;
  categories: string[];
};
export const ProjectCard = ({ imageURL, occupation, title, extract, categories }: Props) => {
  return (
    <Link href='#' className='project-card'>
      <div className='project-card__image'>
        <Image width='444' height='444' alt={title} src={imageURL} />
      </div>
      <div className='project-card__content '>
        <div className='project-card__occupation font-light'>{occupation}</div>
        <h3 className='project-card__title'>{title}</h3>
        <div className='project-card__extract font-light w-64'>{extract}</div>
        <div className='project-card__categories pt-8 font-light'>
          {categories.map((category, index) => (
            <span className='project-card__category px-3 py-1' key={index}>{category}</span>
          ))}
        </div>
      </div>
    </Link>
  );
};
