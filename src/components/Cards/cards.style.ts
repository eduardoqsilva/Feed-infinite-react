import styled from "styled-components";
import { colors } from "../../styles/variables";

export const CardWrapper = styled.article`
  width: 100%;
  max-width: 511px;
  background-color: ${colors.gray2};
  
  padding: 2rem;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > p {
    width: 100%;
    
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
  }
  & span {
    color: ${colors.blue};
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 17px;
  }

  & .imgPost {
    width: 100%;
    height: 13.75rem;
    border-radius: 8px;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export const WrapperHeader = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;

  & .imgPerf {
    width: 42px;
    height: 42px;
    background-color: ${colors.gray7};
    border-radius: 50%;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .user {
    & h2 {
      font-size: 1rem;
      font-weight: 700;
      line-height: 19px;
    }
    & h3 {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 17px;
      color: ${colors.gray4};
    }
  }
`

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
