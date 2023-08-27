import { Header } from './_components/header/header.component';
import { SectionTitle } from './_components/section-title/section-title.component';
import { ProjectCard } from './_components/project-card/project-card.component';
import { ServiceCard } from './_components/service-card/service-card.component';
import { AboutMe } from './_components/about-me/about-me.component';
import { WorkTogether } from './_components/work-together/work-together.component';
import { Analytics } from '@vercel/analytics/react';
import { getAllProjects } from './_actions/projectActions';
import { Suspense } from 'react';

export default async function Home() {
  const allProjects = await getAllProjects(4,true);

  return (
    <main className='px-[4%] md:px-0'>
      <Analytics />
      <Header />
      <SectionTitle className="scroll-mt-[120px]" title="WORK" id="work" />
      <section className="project-card-group sm:container lg:w-[57.5rem] mx-auto">
        <Suspense fallback={'Loading'}>
          {allProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Suspense>
      </section>
      <SectionTitle title="What I can do for you" />
      <section className="project-card-group sm:container lg:w-[57.5rem] mx-auto">
        <ServiceCard
          title="Design and enhance your product"
          desc="From brand strategy to product design, I help you achieve your goals and solve complex problems through design"
        />
        <ServiceCard
          title="Take pictures of your event"
          desc="From brand strategy to product design, I help you achieve your goals and solve complex problems through design"
        />
        <ServiceCard
          title="Give your brand a boost"
          desc="Is your brand or website lacking in personality? Let me add value to your product by giving your graphic identity a boost."
        />
        <ServiceCard
          title="Make your next poster"
          desc="Your event deserves to be seen! A photo shoot - in the studio or on location - and a good old Photoshop polish will allow me to create the poster of our dreams to convince your audience."
        />
      </section>
      <SectionTitle className="scroll-mt-[120px]" title="Me" id="me" />
      <section className="container lg:w-[57.5rem] mx-auto">
        <AboutMe />
      </section>

      <SectionTitle title={`Let's work together`} />
      <WorkTogether />
    </main>
  );
}
