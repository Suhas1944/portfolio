import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import profileImg from '../assets/suhas.jpeg';

export default function Home() {
  return (
    <div className="container animate-fade-in">
      <section className="hero py-20 flex flex-col justify-center items-center text-center mt-8">
        <div className="px-4 py-1 mb-8 border border-glass rounded-full text-sm text-secondary bg-tertiary">
          Available for new opportunities 🚀
        </div>

        {/* Profile Image Container */}
        <div className="profile-container mb-8 border-4 border-glass shadow-2xl transition-transform hover:scale-105">
          <img
            src={profileImg}
            alt="Suhas"
            className="profile-image"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ letterSpacing: '-2px' }}>
          Hi, I'm <span className="text-gradient">Suhas.</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-8">
          A passionate software developer creating beautiful, responsive and user-friendly digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
