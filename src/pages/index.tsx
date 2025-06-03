import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-surgical-black text-sterile-white">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </Layout>
  );
} 