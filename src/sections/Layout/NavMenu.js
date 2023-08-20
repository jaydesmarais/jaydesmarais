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
    background-color: rgba(50,50,50,.9);
    height: 100%;
    width: 100%;
  } 
`

const StyledMenuButton = styled.button`
  display: none;

  @media (max-width: 720px) {
    color: white;
    display: flex;
    position: fixed;
    cursor: pointer;
    top: 10px;
    right: 10px;
    z-index: 1000;
    padding: 15px 15px;
    border: none;
    background: none;
    border-radius: 10px; 
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
  padding: 5vh 2vw;
  width: 100%;
  color: rgba(255,255,255,.9);

  a {
    cursor: pointer;
    margin: 0 5px;
    padding: 25px 50px;
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

  // Close the menu when the window is resized
  const handleResize = () => {
    if (menuOpen && window.innerWidth >= 720) {
      setMenuOpen(false)
    }
  }

  window.addEventListener('resize', handleResize)

  return (
    <>
      {location && (location.pathname === '/' || location.pathname === '/resume') ?
        // NavMenu displayed on '/' and '/resume'
        <>
          {/* NavMenu hamburger menu and button to close expanded menu */}
          < StyledMenuButton >
            {
              menuOpen
                ? <BsXLg size='50' onClick={() => setMenuOpen(!menuOpen)} />
                : <BsList size='50' onClick={() => setMenuOpen(!menuOpen)} />
            }
          </StyledMenuButton >

          {/* NavMenu links and pop-out */}
          {
            menuOpen ?
              <StyledNavMenu onClick={() => setMenuOpen(false)}>
                <StyledLinkList>
                  {location && location.pathname === '/' ? navLinks.map(({ name, link }, i) => {
                    // NavMenu and links displayed on '/'
                    return (
                      <StyledLink key={i}>
                        <ScrollLink to={link} onClick={() => setMenuOpen(false)} spy={true} hashSpy={true} smooth={true}>
                          {name}
                        </ScrollLink>
                      </StyledLink>
                    )
                  }) : backLinks.map(({ name, link }, i) => {
                    // NavMenu and links displayed at '/resume'
                    return (
                      <StyledLink key={i}>
                        <NavLink to={link} onClick={() => setMenuOpen(false)}>
                          {name}
                        </NavLink>
                      </StyledLink>
                    )
                  })
                  }
                </StyledLinkList >
              </StyledNavMenu >
              :
              <></>
          }
        </>
        :
        // No NavMenu displayed on pages other than "/" and "/resume"
        <></>
      }
    </>
  )
}

NavMenu.propTypes = {
  location: PropTypes.object.isRequired
}

export default NavMenu