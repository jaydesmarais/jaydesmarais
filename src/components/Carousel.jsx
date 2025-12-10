import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  transform-style: preserve-3d;
  margin: 80px auto;
  width: 820px;
  height: 560px;
  perspective: 1250px;
`

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transform: ${props => props.$rotation ? `translateZ(-850px) rotateY(${-props.$rotation}deg)` : 'translateZ(-850px)'};
  will-change: transform;
`

export const CarouselCell = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 780px;
  height: 520px;
  transition: transform 1s, opacity 1s;
  background: rgba(0,0,0,.9);
  border: 1px solid white;
  border-radius: 10px;
  box-shadow:
    0 0 7px #fff,
    0 0 10px #fff;
  will-change: transform;
  backface-visibility: hidden;

  // Set the initial position of all carousel cells in a 3d circle
  &:nth-child(1) { transform: rotateY(  0deg) translateZ(600px); }
  &:nth-child(2) { transform: rotateY( 72deg) translateZ(600px); }
  &:nth-child(3) { transform: rotateY(144deg) translateZ(600px); }
  &:nth-child(4) { transform: rotateY(216deg) translateZ(600px); }
  &:nth-child(5) { transform: rotateY(288deg) translateZ(600px); }
`

export const CarouselSlide = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto 40px;
`

export const CarouselController = styled.div`
  display: flex;
  justify-content: center;
  transition: all 1s;
`

export const CarouselControl = styled.button`
  background-color: black;
  border: 1px solid white;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;

  ${props => props.$active && {
    backgroundColor: 'white',
  }};
`
