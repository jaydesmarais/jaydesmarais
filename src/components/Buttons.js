import styled from 'styled-components'
import { Link } from 'react-router-dom'

// <a> link button that follows site button style.
export const PrimaryLink = styled.a`
font-size: medium;
  flex: auto;
  min-width: 100px;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  margin: .5em 1vw;
  padding: .5em 2vw;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 10px
  }
`

// <button> that follows site style.
export const PrimaryButton = styled.button`
  font-size: medium;
  position: relative;
  display: flex;
  justify-content: center;
  flex: auto;
  min-width: 100px;
  overflow: auto;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  margin: .5em 1vw;
  padding: .5em 2vw;
  cursor: pointer;
  background-color: black;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
  }

  ${props => props.status > 0 && {
    color: 'black',
    backgroundColor: 'white',
    cursor: 'default',
  }};
`

// react-router-dom <Link> that follows site button style.
export const StyledLink = styled(Link)`
  font-size: medium;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  padding: 0.5em;

  &:hover {
    background-color: white;
    color: black;
  }
`

export default PrimaryLink