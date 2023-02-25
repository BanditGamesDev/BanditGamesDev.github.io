import React from 'react'
import "./Style/NavBar.css"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
  return <nav className = "nav">
    <Link to = "/" className = "site-title">
      Bandit Game Studio
    </Link>
    <ul>
      <CustomLink to = "/AboutUs">AboutUs</CustomLink>
      <CustomLink to = "/TheDen">TheDen</CustomLink>
      <CustomLink to = "/News">News</CustomLink>
      <CustomLink to = "/Projects">Projects</CustomLink>
      <CustomLink to = "/ContactUs">ContactUs</CustomLink>
    </ul>
  </nav>
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