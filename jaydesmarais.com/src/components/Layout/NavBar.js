import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 1000;
  text-align: center;
`

const StyledLinkList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: rgba(50,50,50,.9);
  padding: 15px 10px;
  border-radius: 10px;
  list-style: none;
  max-width: 70%;
`

const StyledLink = styled.li`
  color: rgba(255,255,255,.9);

  a {
    cursor: pointer;
    margin: 0 5px;
    padding: 7.5px 20px;
    text-decoration: none;
    color: inherit; 

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