import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${rotate360} 1.2s linear infinite;
  
  border-top: 2px solid #808080;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  border-left: 2px solid #FFFFFF;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;