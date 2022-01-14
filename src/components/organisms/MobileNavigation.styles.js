import styled from "styled-components";
import { device } from "../../BreakPoints";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  @media ${device.sm} {
    display: none;
  }
  ul {
    list-style: none;
  }
  .hamburger {
    cursor: pointer;
    height: 30px;
    width: auto;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  border-radius: 8px;
  color: white;
  padding: 15px;
  position: fixed;
  min-width: 90vw;
  top: 65px;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  li {
    cursor: pointer;
    padding: 15px;
    text-align: center;
  }
  button {
    cursor: pointer;
    border: none;
    border-radius: 30px;
    padding: 15px;
    margin: 15px 0;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.cyan};
    min-width: 100%;
  }
`;

export const StyledDiv = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 95%;
`;
