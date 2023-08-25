import styled from 'styled-components'
import { Link } from 'react-router-dom'

// <a> link button that follows site button style.
export const ExternalLink = styled.a`
  text-decoration: none;
  font-family: 'Italiana';
  color: white;
  width: 100%;
  font-size: 150%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border: white 1px solid;
  border-radius: 10px;
  transition: all .2s ease-in-out; 
  box-shadow:
    0 0 7px #fff,
    0 0 10px #fff;

  &:hover {
    cursor: pointer;
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 17px #fff;
  }

  @media (max-width: 720px) {
    font-size: 100%;
  }
`

// <button> that follows site style.
export const Button = styled.button`
  font-size: large;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 17px #fff;

    box-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 17px #fff;
  }

  ${props => props.status > 0 && {
    cursor: 'default',
    textShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 17px #fff",
    boxShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 17px #fff"
  }};
`

// react-router-dom <Link> that follows site button style.
export const InternalLink = styled(Link)`
  font-family: 'Italiana';
  text-decoration: none;
  color: white;
  width: 100%;
  font-size: 150%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border: white 1px solid;
  border-radius: 10px;
  transition: all .2s ease -in -out;
  box-shadow:
  0 0 7px #fff,
    0 0 10px #fff;

    &:hover {
    cursor: pointer;
    text-shadow:
    0 0 7px #fff,
      0 0 10px #fff,
        0 0 17px #fff;
  }

  @media(max-width: 720px) {
    font-size: 100%;
  }
`

export default Button