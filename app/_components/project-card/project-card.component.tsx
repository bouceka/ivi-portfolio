// @flow
import { Project } from '@/app/_db/schema';
import { mapToCategories } from '@/app/_utils/categories';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

type Props = object & Project;

export const ProjectCard = ({ featuredImageUrl, title, excerpt, categories, slug }: Props) => {
  return (
    <Link
      href={`/project/${slug}`}
      className="project-card relative h-[15rem] w-[15rem] md:h-[22.75rem] md:w-[22.75rem] lg:h-[27.75rem] lg:w-[27.75rem] transition-all duration-200 inline-block"
    >
      <Image
        className="h-[15rem] w-[15rem] md:h-[22.75rem] md:w-[22.75rem] lg:h-[27.75rem] lg:w-[27.75rem] object-cover"
        width="444"
        height="444"
        alt={title}
        src={featuredImageUrl}
      />
      <div className="project-card__content p-[1.5rem] md:p[2rem] gap-[0.5rem] md:gap-[1rem] ">
        {/* <div className='project-card__occupation font-light'>{occupation}</div> */}
        <h3 className="project-card__title">{title}</h3>
        <div className="project-card__extract font-light md:w-64">{excerpt}</div>
        <div className="project-card__categories pt-4 md:pt-8 font-light">
          {mapToCategories(categories).map((category, index) => (
            <span className="project-card__category px-3 py-1" key={index}>
              {category}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
