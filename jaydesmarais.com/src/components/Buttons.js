import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PrimaryLink = styled.a`
  font-size: medium;
  position: relative;
  display: flex;
  justify-content: center;
  flex: auto;
  min-width: 100px;
  overflow: auto;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  margin: 1vh 1vw;
  padding: 1vh 2vw;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: black;
    border-radius: 10px
  }
`

export const PrimaryButton = styled.button`
  font-size: medium;
  position: relative;
  display: flex;
  justify-content: center;
  flex: auto;
  min-width: 100px;
  overflow: auto;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  margin: 1vh 1vw;
  padding: 1vh 2vw;
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

export const PrimaryRouteLink = styled(Link)`
  font-size: medium;
  display: flex;
  justify-content: center;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  margin: 1vh 1vw;
  padding: 1vh 2vw;

  &:hover {
    background-color: white;
    color: black;
  }
`

export default PrimaryLink