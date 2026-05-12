import { useState, useEffect } from 'react';
import Card from '../components/Card';
import RankU1 from '../assets/RankU1.png';
import atm from '../assets/voice atm system copy.png';
import resume from '../assets/resume-bulider.png';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiDotnet } from 'react-icons/si';
import './Projects.css';

export default function Projects() {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    // Small delay to trigger the progress bar filling animation after rendering
    const timer = setTimeout(() => {
      setAnimateProgress(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Voice added atm system",
      description: "A Voice added atm system using .net.",
      tags: ["Dotnet"],
      link: "https://github.com/suhas1944",
      image: atm
    },
    {
      title: "RankU1",
      description: "A responsive competitive exam platform with analytics dashboard.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/suhas1944",
      image: RankU1
    },
    {
      title: "Resume Builder",
      description: "a Resume Builder with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js"],
      link: "https://github.com/suhas1944",
      image: resume
    },
  ];

  const skills = [
    {
      name: "React",
      category: "Frontend",
      description: "Building modern SPAs with hooks, context API, and optimized state management.",
      icon: <FaReact />,
      color: "#61dafb",
      glowRgb: "97, 218, 251",
      level: "90%"
    },
    {
      name: "Node.js",
      category: "Backend",
      description: "Creating scalable, lightweight runtime environments, RESTful APIs, and systems.",
      icon: <FaNodeJs />,
      color: "#339933",
      glowRgb: "51, 153, 51",
      level: "85%"
    },
    {
      name: "Express.js",
      category: "Backend",
      description: "Crafting robust server middleware, routing, and clean, decoupled MVC architectures.",
      icon: <SiExpress />,
      color: "#f3f3f3",
      glowRgb: "243, 243, 243",
      level: "80%"
    },
    {
      name: "MongoDB",
      category: "Database",
      description: "Designing flexible schemas, complex aggregations, and high-performance NoSQL systems.",
      icon: <SiMongodb />,
      color: "#47a248",
      glowRgb: "71, 162, 72",
      level: "85%"
    },
    {
      name: "Dotnet / C#",
      category: "Backend",
      description: "Developing robust enterprise solutions, web APIs, and services using Microsoft .NET Core.",
      icon: <SiDotnet />,
      color: "#512bd4",
      glowRgb: "81, 43, 212",
      level: "75%"
    },
    {
      name: "JavaScript",
      category: "Languages",
      description: "Advanced ES6+, asynchronous programming patterns, events, and DOM manipulation.",
      icon: <FaJs />,
      color: "#f7df1e",
      glowRgb: "247, 223, 30",
      level: "95%"
    },
    {
      name: "HTML5 & CSS3",
      category: "Frontend",
      description: "Writing semantic structures and creating responsive layouts using Flexbox, Grid, and keyframes.",
      icon: (
        <div className="flex gap-1 items-center">
          <FaHtml5 size={16} />
          <FaCss3Alt size={16} />
        </div>
      ),
      color: "#e34f26",
      glowRgb: "227, 79, 38",
      level: "90%"
    }
  ];

  return (
    <div className="container animate-fade-in py-10">
      <h1 className="text-4xl font-bold mb-4">My <span className="text-gradient">Projects.</span></h1>
      <p className="text-secondary mb-10 max-w-2xl">
        Here are some of the projects I've worked on recently. They range from simple web applications to complex full-stack solutions.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>

      {/* Skills Showcase Section */}
      <section className="skills-section">
        <h2 className="text-3xl font-bold mb-4">
          Skills & <span className="text-gradient">Tech Stack.</span>
        </h2>
        <p className="text-secondary mb-8 max-w-2xl">
          A showcase of technologies I use to build premium digital experiences. Hover over each card to view micro-interactions, brand color indicators, and details.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card skill-card-animated"
              style={{ 
                '--skill-color': skill.color,
                '--skill-glow-rgb': skill.glowRgb,
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  {skill.icon}
                </div>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
              </div>
              <p className="skill-desc">{skill.description}</p>
              
              <div className="skill-progress-container">
                <div className="skill-progress-label">
                  <span>Proficiency</span>
                  <span>{skill.level}</span>
                </div>
                <div className="skill-progress-bar">
                  <div 
                    className="skill-progress-fill"
                    style={{ width: animateProgress ? skill.level : '0%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

