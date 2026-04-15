import Card from '../components/Card';
import RankU1 from '../assets/RankU1.png';
import atm from '../assets/voice atm system copy.png';
import resume from '../assets/resume-bulider.png'

export default function Projects() {
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
      description: "a Resume  Builder with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js"],
      link: "https://github.com/suhas1944",
      image: resume
    },

  ];

  return (
    <div className="container animate-fade-in py-10">
      <h1 className="text-4xl font-bold mb-4">My <span className="text-gradient">Projects.</span></h1>
      <p className="text-secondary mb-10 max-w-2xl">
        Here are some of the projects I've worked on recently. They range from simple web applications to complex full-stack solutions.
      </p>

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
    </div>
  );
}
