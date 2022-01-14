import styled from "styled-components";
import { device } from "../../BreakPoints";

export const StyledNav = styled.main`
  display: none;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  @media ${device.sm} {
    display: flex;
    justify-content: space-between;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li {
    cursor: pointer;
    padding: 0 25px;
    color: ${({ theme }) => theme.colors.gray};
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
  }
`;

export const StyledDiv = styled.div`
  display: flex;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 0 60px;
`;
