import { ArrowUpRight } from 'lucide-react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiDotnet } from 'react-icons/si';
import './Card.css';

const tagConfig = {
  'react': {
    icon: <FaReact size={11} />,
    color: '#61dafb',
    animationClass: 'spin-hover'
  },
  'node.js': {
    icon: <FaNodeJs size={11} />,
    color: '#339933',
    animationClass: 'pulse-hover'
  },
  'node': {
    icon: <FaNodeJs size={11} />,
    color: '#339933',
    animationClass: 'pulse-hover'
  },
  'express': {
    icon: <SiExpress size={11} />,
    color: '#f3f3f3',
    animationClass: 'float-hover'
  },
  'mongodb': {
    icon: <SiMongodb size={11} />,
    color: '#47a248',
    animationClass: 'bounce-hover'
  },
  'dotnet': {
    icon: <SiDotnet size={11} />,
    color: '#512bd4',
    animationClass: 'pulse-hover'
  },
  'javascript': {
    icon: <FaJs size={11} />,
    color: '#f7df1e',
    animationClass: 'float-hover'
  },
  'html': {
    icon: <FaHtml5 size={11} />,
    color: '#e34f26',
    animationClass: 'float-hover'
  },
  'css': {
    icon: <FaCss3Alt size={11} />,
    color: '#1572b6',
    animationClass: 'float-hover'
  }
};

const getTagConfig = (tag) => {
  return tagConfig[tag.toLowerCase()] || { icon: null, color: '#a0a0ab', animationClass: '' };
};

export default function Card({ title, description, image, tags, link }) {
  return (
    <div className="card glass-panel animate-fade-in">
      <div className="card-image-wrapper">
        {image ? (
          <img src={image} alt={title} className="card-image" />
        ) : (
          <div className="card-image-placeholder">
            <span className="text-secondary text-sm">Image Preview</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <div className="flex justify-between items-center mb-4">
          <h3 className="card-title">{title}</h3>
          <a href={link} target="_blank" rel="noreferrer" className="card-link">
            <ArrowUpRight size={20} />
          </a>
        </div>
        <p className="card-description text-secondary mb-4">
          {description}
        </p>
        <div className="card-tags flex flex-wrap gap-2">
          {tags && tags.map((tag, index) => {
            const config = getTagConfig(tag);
            return (
              <span 
                key={index} 
                className="card-tag flex items-center gap-1.5"
                style={{ '--brand-color': config.color }}
              >
                <span className={`tag-icon ${config.animationClass}`} style={{ color: config.color }}>
                  {config.icon}
                </span>
                <span className="tag-text">{tag}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

