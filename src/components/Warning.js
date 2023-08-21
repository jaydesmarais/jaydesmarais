import styled from 'styled-components'

export const Warning = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 7vh;
  text-align: center;
  background: linear-gradient(transparent, 20%, black);
`

export const WarningText = styled.p`
  border: #F8D748 1px solid;
  margin: 0;
  font-size: 200%;
  width: 250vw;
  color: #F8D748;
  display: flex;
  justify-content: space-between;
  transition: all .2s ease-in-out; 

  @media (max-width: 1080px){
    font-size: 125%;
  }

  &:hover {
    cursor: pointer;
    text-shadow: #FC0 1px 0 10px; 
    box-shadow: #FC0 1px 0 10px;
    transform: scale(1.5);
  }  
`

export default Warning