import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100%{
    transform: rotate(360deg);
  }
`

interface LoadingType {
  load: boolean
}
export const WrapperLoading = styled.div<LoadingType>`
  width: 100%;
  max-width: 511px;
  display: ${props => props.load ? "flex" : 'none'};
  align-items: center;
  justify-content: center;

  & svg {
    animation: ${rotate} 0.5s infinite linear;
  }
`