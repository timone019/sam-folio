import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { ThemeContext } from '../../contexts/theme';
import { projects, skills, contact } from '../../portfolio';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const location = useLocation();
  
  const toggleNavList = () => setShowNavList(!showNavList);
  
  // Handle navigation to sections on the homepage
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    toggleNavList();
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`;
      return;
    }
    
    // Scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length > 0 && (
          <li className='nav__list-item'>
            <button
              type="button"
              onClick={(e) => scrollToSection(e, 'projects')}
              className='link link--nav nav-button'
            >
              Projects
            </button>
          </li>
        )}

        <li className='nav__list-item'>
          <button
            type="button"
            onClick={(e) => scrollToSection(e, 'case-studies')}
            className='link link--nav nav-button'
          >
            Case Studies
          </button>
        </li>

        {skills.length > 0 && (
          <li className='nav__list-item'>
            <button
              type="button"
              onClick={(e) => scrollToSection(e, 'skills')}
              className='link link--nav nav-button'
            >
              Skills
            </button>
          </li>
        )}

        {contact.email && (
          <li className='nav__list-item'>
            <button
              type="button"
              onClick={(e) => scrollToSection(e, 'contact')}
              className='link link--nav nav-button'
            >
              Contact
            </button>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
