import Head from 'next/head';
import Project from './project';

export default function Home() {
  const projects = [
    {
      title: 'GMB Union',
      description: 'The GMB Union, one of the UK\'s largest trade unions, required a comprehensive overhaul of their digital platform to enhance member engagement, improve information accessibility, and offer an intuitive, user- friendly experience. The goal was to create a dynamic website that could support the Union\'s growing needs, improve interaction with members, and streamline content management.',
      tags: ['PHP', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'LESS', 'MODX', 'MySQL',],
      imageSrc: 'https://ctfmcoptba.cloudimg.io/images/portfolio/3.jpg',
      link: 'project_link'
    },
    {
      title: 'Soldier Security Services',
      description: 'Is a leading security firm, required a digital transformation to reflect their professionalism, reliability, and breadth of services online. The project\'s objective was to develop a website that not only served as a digital brochure for their services but also as a platform for engaging potential clients and facilitating inquiries.',
      tags: ['WordPress', 'Elementor', 'Rankmath', 'JavaScript', 'jQuery', 'HTML5', 'CSS3'],
      imageSrc: 'https://ctfmcoptba.cloudimg.io/images/portfolio/2.jpg',
      link: 'project_link'
    },
    {
      title: 'Innov-8-2-Create',
      description: 'An organization dedicated to fostering innovation and creativity in the business sector, sought to revamp their website to better showcase their services, engage with their audience, and enhance their digital footprint. The project aimed to develop a vibrant, interactive online platform that reflected the organization\'s mission to inspire and facilitate innovative thinking.',
      tags: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'LESS', 'MODX', 'PHP', 'MYSQL'],
      imageSrc: 'https://ctfmcoptba.cloudimg.io/images/portfolio/innov.webp',
      link: 'project_link'
    },
  ];

  return (
    <section className="portfolio bg-gray-900 text-white pt-20 pb-20" id="portfolio">
      <div className="wrapper max-w-6xl mx-auto px-4">
        <div className="min-h-screen ">
          <header className="sec-head text-center mb-12">
            <h2 className="sec-head__h text-4xl font-bold">Portfolio - Showcasing Success Stories</h2>
            <p className="text-gray-400">A Glimpse into My Work and Client Successes</p>
          </header>
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
