import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavBar = styled.nav`

`

const StyledLinkList = styled.ol`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`

const StyledLink = styled.li`
  margin: 0 5px;
`

const navLinks = [
  {name: 'about', link: '#about'},
  {name: 'experience', link: '#experience'},
  {name: 'projects', link: '#projects'},
  {name: 'contact', link: '#contact'}
]

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledLinkList>
        {navLinks.map(({name, link}) => {
          return (
            <StyledLink>
              <Link to={link}>{name}</Link>
            </StyledLink>
          )
        })}
      </StyledLinkList>
    </StyledNavBar>
  )
}

export default NavBar