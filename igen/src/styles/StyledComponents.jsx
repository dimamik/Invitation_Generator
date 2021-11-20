import styled, {keyframes} from "styled-components";
import {zoomIn} from "react-animations";
export const StyledH1 = styled.h1`
  font-weight: 900;
  font-size: x-large;
`


const bounceAnimation = keyframes`${zoomIn}`;
export const ZoomedInDiv = styled.div`
  animation: 1s ${bounceAnimation};
  height: 100%;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center /* align vertical */
`