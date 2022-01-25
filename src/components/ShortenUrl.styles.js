import styled from "styled-components";
import bgShortenMobile from "../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../images/bg-shorten-desktop.svg";
import { device } from "./../BreakPoints";

export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${bgShortenMobile});
    background-repeat: no-repeat;
    background-position: right top;
    background-color: ${({ theme }) => theme.colors.darkViolet};
    width: 80%;
    padding: 20px;
    border-radius: 8px;
    @media ${device.sm} {
      flex-direction: row;
      background-image: url(${bgShortenDesktop});
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
      font-size: 1.2rem;
      font-weight: 500;
      background-color: ${({ theme }) => theme.colors.cyan};
      width: 100%;
      &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.6);
      }
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
    text-align: center;
  }
`;
