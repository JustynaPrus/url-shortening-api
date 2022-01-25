import styled from "styled-components";
import { device } from "../../BreakPoints";

export const Wrapper = styled.ul`
  li {
    background-color: white;
    margin: 15px 0;
    border-radius: 5px;
    padding: 10px;
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    font-weight: 500;
    @media ${device.sm} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    div {
      @media ${device.sm} {
        display: flex;
        align-items: center;
      }
    }
  }
  button {
    cursor: pointer;
    color: white;
    border-radius: 5px;
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    padding: 10px 40px;
    margin: 15px 0 5px 0;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.cyan};
    width: 100%;
    @media ${device.sm} {
      width: auto;
    }
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.cyan};
  padding: 0 20px;
`;
