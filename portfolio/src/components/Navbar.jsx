import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Layers, Sun, Moon } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo">
          <Layers className="logo-icon" />
          <span className="logo-text text-gradient">Suhas.</span>
        </NavLink>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 d-none d-md-flex">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle flex items-center justify-center p-2 rounded-full"
            aria-label="Toggle theme"
            style={{ 
              background: 'var(--bg-tertiary)', 
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              cursor: 'pointer'
            }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a href="/assets/resume.pdf" download="Resume_Suhas.pdf" className="btn btn-primary d-none d-md-flex">Resume</a>
        </div>
      </div>
    </nav >
  );
}
