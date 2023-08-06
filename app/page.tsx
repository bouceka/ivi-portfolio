import Image from 'next/image';
import { Header } from './components/header/header.component';
import { SectionTitle } from './components/section-title/section-title.component';
import { ProjectCard } from './components/project-card/project-card.component';
import { ServiceCard } from './components/service-card/service-card.component';
import { AboutMe } from './components/about-me/about-me.component';
import { WorkTogether } from './components/work-together/work-together.component';
import { Analytics } from '@vercel/analytics/react';
const projectCard = {
  imageURL: 'https://res.cloudinary.com/ahoy-house/image/upload/f_auto,q_auto/v1/IVI-Portfolio/dpe6bb7metmbs37rn1cx',
  occupation: 'Internship',
  extract: 'Lorem ipsum dolor sit amet consectetur. Magnis nulla cursus cras duis natoque.',
  title: 'Breka Bakery',
  categories: ['Google Analytics', 'SEO', 'Research'],
};

export default function Home() {
  return (
    <main className=''>
      <Analytics/>
      <Header />
      <SectionTitle title='WORK' id='work' />
      <section className='project-card-group container w-[920px] mx-auto'>
        <ProjectCard {...projectCard} />
        <ProjectCard {...projectCard} />
        <ProjectCard {...projectCard} />
        <ProjectCard {...projectCard} />
      </section>
      <SectionTitle title='What I can do for you' />
      <section className='project-card-group container w-[920px] mx-auto'>
        <ServiceCard
          title='Design and enhance your product'
          desc='From brand strategy to product design, I help you achieve your goals and solve complex problems through design'
        />
        <ServiceCard
          title='Take pictures of your event'
          desc='From brand strategy to product design, I help you achieve your goals and solve complex problems through design'
        />
        <ServiceCard
          title='Give your brand a boost'
          desc='Is your brand or website lacking in personality? Let me add value to your product by giving your graphic identity a boost.'
        />
        <ServiceCard
          title='Make your next poster'
          desc='Your event deserves to be seen! A photo shoot - in the studio or on location - and a good old Photoshop polish will allow me to create the poster of our dreams to convince your audience.'
        />
      </section>
      <SectionTitle title='Me' />
      <section className='container w-[920px] mx-auto'>
        <AboutMe />
      </section>

      <SectionTitle title={`Let's work together`} />
      <WorkTogether />
    </main>
  );
}
