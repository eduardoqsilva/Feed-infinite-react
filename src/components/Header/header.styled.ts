import styled from "styled-components";

export const WrapperHeader = styled.div`
  width: 100%;
  min-width: 511px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  padding: 1rem 0;

  & > svg {
    cursor: pointer;
    transition: all 0.1s ease-in;
    & :active {
      transform: scale(1.05)
    }
  }

  & .wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @media (max-width: 600px) {
    min-width: 250px;
  }
`