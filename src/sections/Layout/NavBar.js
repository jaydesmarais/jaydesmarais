import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import { backLinks, navLinks } from '../../config'

const StyledNavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  z-index: 1000;
  text-align: center;

  @media (max-width: 720px) {
    display: none;
  }
`

const StyledLinkList = styled.ul`
  display: inline-flex;
  justify-content: space-around;
  background-color: rgba(50,50,50,.9);
  padding: 15px 10px;
  border-radius: 10px;
  list-style: none;
`

const InternalLink = styled.li`
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

const NavBar = ({ location }) => {
  switch (location.pathname) {
    case "/":
      // NavBar and links displayed at '/'
      return (
        <StyledNavBar>
          <StyledLinkList>
            {navLinks.map(({ name, link }, i) => {
              return (
                <InternalLink key={i}>
                  <ScrollLink to={name} spy={true} hashSpy={true} smooth={true}>
                    {link}
                  </ScrollLink>
                </InternalLink>
              )
            })}
          </StyledLinkList >
        </StyledNavBar>
      )
    // NavBar and links displayed at '/resume'
    case "/resume":
      return (
        <StyledNavBar>
          <StyledLinkList>
            {backLinks.map(({ name, link }, i) => {
              return (
                <InternalLink key={i}>
                  <NavLink to={name}>
                    {link}
                  </NavLink>
                </InternalLink>
              )
            })}
          </StyledLinkList >
        </StyledNavBar>

      )
    // NavBar links displayed by default
    default:
      return (
        <></>
      )
  }
}

NavBar.propTypes = {
  location: PropTypes.object.isRequired
}

export default NavBar