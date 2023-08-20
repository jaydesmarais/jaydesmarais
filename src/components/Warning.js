import styled from 'styled-components'

export const Warning = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 10vh;
  text-align: center;
  background: repeating-linear-gradient(
    45deg,
    #F8D748,
    #F8D748 100px,
    black 100px,
    black 200px
  );

  @media (max-width: 1080px){
    margin: 1em auto;
  }

  &.left {
      transform: rotate(7deg);
  }

  &.right {
      transform: rotate(-7deg);
  }
`

export const WarningText = styled.p`
  width: 200vw;
  background: #F8D748;
  padding: 0.5em;
  color: black;
  display: flex;
  justify-content: space-between;
`

export default Warning