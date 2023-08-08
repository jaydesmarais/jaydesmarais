import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import { backLinks, navLinks } from '../../config'
import { BsList, BsXLg } from 'react-icons/bs'

const StyledNavMenu = styled.nav`
  display: none;

  @media (max-width: 720px) {
    display: flex;
    position: fixed;
    z-index: 999;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: fixed;
    right: 0;
    top: 0;
    flex-wrap: wrap;
    background-color: rgba(50,50,50,.9);
    border-radius: 10px 0px 0px 10px;
    list-style: none;
    height: 100%;
    width: 100%;
  } 
`

const StyledMenuButton = styled.button`
  display: none;

  @media (max-width: 720px) {
    display: flex;
    position: fixed;
    cursor: pointer;
    top: 10px;
    right: 10px;
    z-index: 1000;
    padding: 15px 15px;
    border: none;
    border-radius: 10px; 
    background: none;
  }
`

const StyledLinkList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 15px 10px;
  border-radius: 10px;
  list-style: none;
  max-width: 70%;
`

const StyledLink = styled.li`
  padding: 25px 10px;
  width: 100%;
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

const NavMenu = ({ location }) => {

  const [menuOpen, setMenuOpen] = useState(false)

  window.addEventListener('resize', () => { setMenuOpen(false) })

  return (
    <>
      <StyledMenuButton>
        {menuOpen
          ? <BsXLg color='white' size='50' onClick={() => setMenuOpen(!menuOpen)} />
          : <BsList color='white' size='50' onClick={() => setMenuOpen(!menuOpen)} />
        }
      </StyledMenuButton>
      {menuOpen ?
        <StyledNavMenu>
          <StyledLinkList>
            {location && location.pathname === "/" ? navLinks.map(({ name, link }, i) => {
              return (
                <StyledLink key={i}>
                  <ScrollLink to={link} onClick={() => setMenuOpen(false)} spy={true} hashSpy={true} smooth={true}>
                    {name}
                  </ScrollLink>
                </StyledLink>
              )
            }) : backLinks.map(({ name, link }, i) => {
              return (
                <StyledLink key={i}>
                  <NavLink to={link} onClick={() => setMenuOpen(false)}>
                    {name}
                  </NavLink>
                </StyledLink>
              )
            })}
          </StyledLinkList>
        </StyledNavMenu >
        :
        <></>
      }
    </>
  )
}

NavMenu.propTypes = {
  location: PropTypes.object.isRequired
}

export default NavMenu