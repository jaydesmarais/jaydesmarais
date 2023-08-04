import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const StyledNavBar = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  z-index: 1000;
  display: block;
  top: 0;
  height: 0;
  margin: auto;
  text-align: center;
  max-width: 900px;

  @media (max-width: 900px) {
    transform: scale(0.9);
  }
`

const StyledLinkList = styled.ul`
  background-color: rgba(50,50,50,.9);
  display: inline-block;

  padding: 15px 40px;
  border-radius: 10px;
  list-style: none;
  
  @media (max-width: 900px) {
    transform: scale(0.9);
  }
`

const StyledLink = styled.li`
  display: inline-block;
  color: rgba(255,255,255,.9);
  cursor: pointer;

  a {
    margin: 0 5px;
    padding: 7px 25px;
    text-decoration: none;
    color: inherit; 

      @media (max-width: 900px) {
        padding: 7px 13px;
      }

    &:hover {
      border-radius: 10px;
      background-color: rgba(0,0,0,.25);
    }

    &.active {
      border-radius: 10px;
      background-color: rgba(0,0,0,.5);
    }
  }
`

const navLinks = [
  { name: '/', link: 'intro' },
  { name: '#about', link: 'about' },
  { name: '#experience', link: 'experience' },
  { name: '#projects', link: 'projects' },
  { name: '#contact', link: 'contact' }
]

const backLinks = [
  { name: '/', link: '/' },
  { name: '/resume', link: '/resume', active: 'true' },
]

const NavBar = ({ location }) => {

  return (
    <StyledNavBar>

      <StyledLinkList>
        {location && location.pathname === "/" ? navLinks.map(({ name, link }, i) => {
          return (
            <StyledLink key={i}>
              <ScrollLink to={link} spy={true} hashSpy={true} smooth={true}>
                {name}
              </ScrollLink>
            </StyledLink>
          )
        }) : backLinks.map(({ name, link }, i) => {
          return (
            <StyledLink key={i}>
              <NavLink to={link}>
                {name}
              </NavLink>
            </StyledLink>
          )
        })}
      </StyledLinkList>

    </StyledNavBar >
  )
}

NavBar.propTypes = {
  location: PropTypes.object.isRequired
}

export default NavBar