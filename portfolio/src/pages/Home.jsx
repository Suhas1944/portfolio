import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiDotnet } from 'react-icons/si';
import profileImg from '../assets/suhas.jpeg';
import './Home.css';

export default function Home() {
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [isTitleDone, setIsTitleDone] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullTitle = "Hi, I'm Suhas.";
  const subtitlePhrases = [
    "I'm a Web Developer.",
    "I build beautiful, responsive web applications.",
    "I create user-friendly digital experiences."
  ];

  // Title typing effect
  useEffect(() => {
    if (titleText.length < fullTitle.length) {
      const timeout = setTimeout(() => {
        setTitleText(fullTitle.substring(0, titleText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTitleDone(true);
    }
  }, [titleText]);

  // Subtitle typing / deleting effect
  useEffect(() => {
    if (!isTitleDone) return;

    const currentPhrase = subtitlePhrases[loopIndex % subtitlePhrases.length];
    let speed = isDeleting ? 30 : 60; // Typing and deleting speed

    if (!isDeleting && subtitleText === currentPhrase) {
      // Pause at the end of the phrase
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
      return () => clearTimeout(timeout);
    } else if (isDeleting && subtitleText === '') {
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      const nextText = isDeleting
        ? currentPhrase.substring(0, subtitleText.length - 1)
        : currentPhrase.substring(0, subtitleText.length + 1);
      setSubtitleText(nextText);
    }, speed);

    return () => clearTimeout(timeout);
  }, [subtitleText, isDeleting, isTitleDone, loopIndex]);

  const homeSkills = [
    { name: "React", icon: <FaReact />, color: "#61dafb", glowRgb: "97, 218, 251" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933", glowRgb: "51, 153, 51" },
    { name: "Express", icon: <SiExpress />, color: "#f3f3f3", glowRgb: "243, 243, 243" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47a248", glowRgb: "71, 162, 72" },
    { name: "Dotnet", icon: <SiDotnet />, color: "#512bd4", glowRgb: "81, 43, 212" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e", glowRgb: "247, 223, 30" }
  ];

  return (
    <div className="container animate-fade-in">
      <section className="hero py-20 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ letterSpacing: '-2px', minHeight: '1.2em' }}>
          {titleText.length <= 8 ? (
            titleText
          ) : (
            <>
              Hi, I'm <span className="text-gradient">{titleText.substring(8)}</span>
            </>
          )}
          {!isTitleDone && <span className="typewriter-cursor">|</span>}
        </h1>
        
        <div className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-8" style={{ minHeight: '2.4em', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {isTitleDone ? (
            <p>
              <span className="text-gradient font-semibold">{subtitleText}</span>
              <span className="typewriter-cursor">|</span>
            </p>
          ) : (
            <p>&nbsp;</p>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link to="/projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>

        {/* Hero Avatar Wrapper with absolute-floating skills icons */}
        <div className="hero-avatar-wrapper">
          {/* Floating Icon Bubbles with attractive interactive hover labels */}
          <div className="floating-icon icon-html" style={{ '--brand-color': '#e34f26' }} title="HTML5">
            <div className="floating-icon-inner"><FaHtml5 /></div>
            <span className="floating-tooltip">HTML5</span>
          </div>
          <div className="floating-icon icon-react" style={{ '--brand-color': '#61dafb' }} title="React">
            <div className="floating-icon-inner"><FaReact /></div>
            <span className="floating-tooltip">React</span>
          </div>
          <div className="floating-icon icon-express" style={{ '--brand-color': '#f3f3f3' }} title="Express">
            <div className="floating-icon-inner"><SiExpress /></div>
            <span className="floating-tooltip">Express</span>
          </div>
          <div className="floating-icon icon-js" style={{ '--brand-color': '#f7df1e' }} title="JavaScript">
            <div className="floating-icon-inner"><FaJs /></div>
            <span className="floating-tooltip">JavaScript</span>
          </div>
          <div className="floating-icon icon-css" style={{ '--brand-color': '#1572b6' }} title="CSS3">
            <div className="floating-icon-inner"><FaCss3Alt /></div>
            <span className="floating-tooltip">CSS3</span>
          </div>
          <div className="floating-icon icon-node" style={{ '--brand-color': '#339933' }} title="Node.js">
            <div className="floating-icon-inner"><FaNodeJs /></div>
            <span className="floating-tooltip">Node.js</span>
          </div>
          <div className="floating-icon icon-dotnet" style={{ '--brand-color': '#512bd4' }} title="C# / .NET">
            <div className="floating-icon-inner"><SiDotnet /></div>
            <span className="floating-tooltip">C# / .NET</span>
          </div>
          <div className="floating-icon icon-mongodb" style={{ '--brand-color': '#47a248' }} title="MongoDB">
            <div className="floating-icon-inner"><SiMongodb /></div>
            <span className="floating-tooltip">MongoDB</span>
          </div>

          {/* Profile Image Container */}
          <div className="profile-container border-4 border-glass shadow-2xl transition-transform hover:scale-105">
            <img
              src={profileImg}
              alt="Suhas"
              className="profile-image"
            />
          </div>
        </div>

        {/* Interactive Technologies Ribbon */}
        <div className="home-skills-showcase">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-secondary mb-6">
            Specialized in Modern Tech Stacks
          </h3>
          <div className="home-skills-list">
            {homeSkills.map((skill, index) => (
              <div 
                key={index} 
                className="home-skill-bubble animate-fade-in" 
                style={{ 
                   '--skill-color': skill.color,
                   '--skill-glow-rgb': skill.glowRgb,
                   animationDelay: `${index * 100}ms`
                }}
              >
                <span className="home-skill-bubble-icon">{skill.icon}</span>
                <span className="home-skill-bubble-tooltip">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

