import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Layers, Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="container navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <Layers className="logo-icon" />
          <span className="logo-text text-gradient">Suhas.</span>
        </NavLink>

        {/* Desktop Links */}
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

        {/* Desktop Actions */}
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

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Dropdown Drawer */}
        <div className={`mobile-nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"}
            >
              {link.name}
            </NavLink>
          ))}
          <div className="mobile-nav-actions">
            <button 
              onClick={() => { toggleTheme(); closeMenu(); }} 
              className="theme-toggle flex items-center justify-center p-2.5 rounded-full"
              aria-label="Toggle theme"
              style={{ 
                background: 'var(--bg-tertiary)', 
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer'
              }}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span className="ml-2 text-sm font-semibold">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>
            <a 
              href="/assets/resume.pdf" 
              download="Resume_Suhas.pdf" 
              onClick={closeMenu}
              className="btn btn-primary text-sm px-5 py-2"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav >
  );
}
