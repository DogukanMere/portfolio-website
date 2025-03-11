import aura_1 from '../assets/img_projects/aura/aura_project.png';
import aura_2 from '../assets/img_projects/aura/aura_home.png';
import planttheseeds from '../assets/img_projects/planttheseeds.png';
import oneseed from '../assets/img_projects/oneseed.png';
import discord from '../assets/img_projects/discord.png';
import gameapplication from '../assets/img_projects/gameapplication.png';
import campproject from '../assets/img_projects/campproject.png';
import metalingo_1 from '../assets/img_projects/metalingo/metalingo_project.png';
import metalingo_2 from '../assets/img_projects/metalingo/metalingo_home.png';
import metalingo_3 from '../assets/img_projects/metalingo/metalingo_register.png';
import metalingo_4 from '../assets/img_projects/metalingo/metalingo_faq.png';
import metalingo_5 from '../assets/img_projects/metalingo/metalingo_profile.png';

const projects = [
  {
    id: 1,
    title: 'MetaLingo',
    description: 'MetaLingo is a web-based metaverse for online education, where students interact with instructors in a virtual environment using custom profiles. Powered by WebRTC, it enables real-time, immersive learning experiences.',
    skills: 'Node.js, Express, Java Spring Boot, JavaScript, TypeScript, React (vite), WebRTC, WebSocket, MongoDB, AWS, OpenAI, Tailwind',
    img: [metalingo_1, metalingo_2, metalingo_3, metalingo_4, metalingo_5],
    links: '',
    live: 'https://metalingo.ca/',
  },
  {
    id: 2,
    title: 'Aura Photo Booth',
    description: 'Aura Photo Booth showcases my ability to design and develop professional websites, combining technical expertise with a focus on enhancing business branding and customer experience.',
    skills: 'React (vite), Tailwind',
    img: [aura_1, aura_2],
    links: 'https://github.com/DogukanMere/photo-booth-project',
    live: 'https://aura-photo-booth.vercel.app/',
  },
  {
    id: 3,
    title: 'Plant the Seeds Capstone Project',
    description: 'This project was created to help both farmers and consumers by providing a service that both parties can benefit from. The system functions similarly to an e-commerce website.',
    skills: 'MERN | MongoDB | Express | React | Node.js ',
    img: [planttheseeds],
    links: 'https://github.com/DogukanMere/Plant_the_Seeds_MERN',
    live: 'https://plant-the-seeds-client.vercel.app/',
  },
  {
    id: 4,
    title: 'Discord Landing Page | Clone',
    description: 'This project has been created just to showcase my React, Next.js, TypeScript, Tailwind CSS abilities. The project has been cloned by using original discord website (www.discord.com).',
    skills: 'React | Next.js | TypeScript | Tailwind CSS',
    img: [discord],
    links: 'https://github.com/DogukanMere/discord-clone-project',
    live: 'https://discord-home-page-seven.vercel.app/',
  },
  {
    id: 5,
    title: 'Game Application',
    description: 'This project is created for an imaginary video game which I named "Into the Darkness". This is my passion project, and it was influenced by video games in general.',
    skills: 'C# | ASP.net framework',
    img: [gameapplication],
    links: 'https://github.com/DogukanMere/GameApplication',
    live: '',
  },
  {
    id: 6,
    title: 'Campsite Cost Calculator',
    description: 'This project was intended to estimate the cost of camping for a specific period of time based on information provided by users.',
    skills: 'HTML | CSS | JavaScript',
    img: [campproject],
    links: 'https://github.com/DogukanMere/Campsite-Cost-Calculator_Pet-Project',
    live: 'https://phenomenal-kitten-e124c4.netlify.app/',
  },
];

export default projects;
