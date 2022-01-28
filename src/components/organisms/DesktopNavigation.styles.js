import styled from "styled-components";
import { device } from "../../BreakPoints";

export const StyledNav = styled.nav`
  display: none;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  @media ${device.sm} {
    display: flex;
    width: 100%;
  }
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
  }
  li {
    cursor: pointer;
    padding: 0 25px;
    color: ${({ theme }) => theme.colors.gray};
    &:hover {
      color: ${({ theme }) => theme.colors.veryDarkBlue};
    }
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 30px;
    padding: 12px 30px;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.cyan};
    &:hover {
      box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.6);
    }
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  width: auto;
  flex-grow: 1;
  margin-left: 20px;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 0 60px;
  flex-grow: 1;
  width: auto;
`;
