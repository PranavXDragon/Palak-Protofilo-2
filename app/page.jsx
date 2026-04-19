'use client';

import dynamic from 'next/dynamic';

// Skip pre-rendering since page uses browser APIs
export const dynamic = 'force-dynamic';

const Header = dynamic(() => import('../components/header/Header'), { ssr: false });
const Home = dynamic(() => import('../components/home/Home'), { ssr: false });
const About = dynamic(() => import('../components/about/About'), { ssr: false });
const Skills = dynamic(() => import('../components/skills/Skills'), { ssr: false });
const Experience = dynamic(() => import('../components/experience/Experience'), { ssr: false });
const Qualification = dynamic(() => import('../components/qualification/Qualification'), { ssr: false });
const Work = dynamic(() => import('../components/work/Work'), { ssr: false });
const Testimonials = dynamic(() => import('../components/testimonials/Testimonials'), { ssr: false });
const Contact = dynamic(() => import('../components/contact/Contact'), { ssr: false });
const Footer = dynamic(() => import('../components/footer/Footer'), { ssr: false });
const ScrollUp = dynamic(() => import('../components/scrollup/ScrollUp'), { ssr: false });
const CustomCursor = dynamic(() => import('../src/components/cursor/CustomCursor'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className='main'>
        <Home />
        <Work />
        <Skills />
        <Experience />
        <Qualification />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}
