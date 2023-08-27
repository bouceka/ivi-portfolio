// @flow
import { getProjectBySlug } from '@/app/_actions/projectActions';
import { Markdown } from '@/app/_components/markdown/markdown';
import { Project } from '@/app/_db/schema';
import { Metadata } from 'next';
import * as React from 'react';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const project = await getProjectBySlug(slug);

  return {
    title: `Ivi Portfolio | ${project.title}`,
    openGraph: {
      images: project.featuredImageUrl,
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const project: Project = await getProjectBySlug(params.slug);

  return (
    <div className="mt-20 container lg:w-[57.5rem] mx-auto">
      <Markdown content={project.markdown} />
    </div>
  );
};

export default Page;
