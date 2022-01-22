import styled from "styled-components";
import bgShorten from "../images/bg-shorten-mobile.svg";
import { device } from "./../BreakPoints";

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${bgShorten});
    background-repeat: no-repeat;
    background-position: right top;
    background-color: ${({ theme }) => theme.colors.darkViolet};
    width: 80%;
    padding: 20px;
    border-radius: 8px;
    @media ${device.sm} {
      flex-direction: row;
    }
    input {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      padding: 15px;
      width: 100%;
      color: ${({ theme }) => theme.colors.grayishViolet};
      @media ${device.sm} {
        width: auto;
        flex-grow: 1;
      }
    }
    button {
      cursor: pointer;
      border: none;
      border-radius: 8px;
      padding: 15px 80px;
      margin: 40px 0 0 0;
      color: white;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 700;
      background-color: ${({ theme }) => theme.colors.cyan};
      width: 100%;
      @media ${device.sm} {
        width: auto;
        margin: 0 0 0 20px;
        flex-grow: 0;
      }
    }
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 80%;
    list-style: none;
  }
`;
