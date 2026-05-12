import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiExpress, SiDotnet, SiMongodb } from 'react-icons/si';

export default function About() {
  const coreTech = [
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47a248' },
    { name: '.NET', icon: <SiDotnet />, color: '#512bd4' },
  ];

  return (
    <div className="container animate-fade-in py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About{" "}<span className="text-gradient">Me.</span></h1>
        
        <div className="glass-panel p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Background</h2>
          <p className="text-secondary mb-4">
            Hello! I'm Suhas, a software developer passionate about creating interactive applications and experiences on the web. My journey in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
          </p>
          <p className="text-secondary">
            Fast-forward to today, and I've had the privilege of building software for varied platforms. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
        </div>

        <div className="glass-panel p-8">
          <h2 className="text-2xl font-bold mb-6">Core Technologies</h2>
          <div className="flex flex-wrap gap-3 items-center justify-start py-2">
            {coreTech.map((tech) => (
              <div 
                key={tech.name} 
                className="about-tech-badge animate-fade-in"
                style={{ '--tech-color': tech.color }}
              >
                <span className="about-tech-icon">{tech.icon}</span>
                <span className="about-tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
