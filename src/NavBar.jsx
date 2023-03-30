import React, { useState, useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import logo from './Graphics/Bandit-Text-Logo.png'
import "./Style/NavBar.css"

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect (() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <Link to = "/" className = "site-title">
        <img src = { logo } className = "logo" alt = 'logo' />
      </Link>
    <ul>
      <CustomLink to = "/AboutUs">About Us</CustomLink>
      <CustomLink to = "/TheDen">The Den</CustomLink>
      <CustomLink to = "/News">News</CustomLink>
      <CustomLink to = "/Projects">Projects</CustomLink>
      <CustomLink to = "/ContactUs">Contact Us</CustomLink>
    </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props}) {
  // const path = window.location.pathname
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    // if the path is equal to the href it is active otherwise it is equal to nothing 
    <li className = {isActive  === to ? "active" : ""}>
      <Link to = {to} {...props}>
        {children}
      </Link>
    </li>
  )
}