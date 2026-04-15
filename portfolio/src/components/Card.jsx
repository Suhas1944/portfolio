import { ArrowUpRight } from 'lucide-react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiDotnet } from 'react-icons/si';
import './Card.css';

const getTagIcon = (tag) => {
  switch (tag.toLowerCase()) {
    case 'react':
      return <FaReact size={14} />;
    case 'node.js':
      return <FaNodeJs size={14} />;
    case 'express':
      return <SiExpress size={14} />;
    case 'mongodb':
      return <SiMongodb size={14} />;
    case 'dotnet':
      return <SiDotnet size={14} />;
    default:
      return null;
  }
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
          {tags && tags.map((tag, index) => (
            <span key={index} className="card-tag flex items-center gap-1">
              {getTagIcon(tag)}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
