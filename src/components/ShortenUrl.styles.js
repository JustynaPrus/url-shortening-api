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
    align-items: flex-start;
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
    div {
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      input {
        font-family: "Poppins", sans-serif;
        font-weight: 500;
        border: none;
        border-radius: 8px;
        padding: 15px;
        width: 100%;
        flex-grow: 1;
        color: ${({ theme }) => theme.colors.grayishViolet};
        @media ${device.sm} {
          width: auto;
          padding: 20px;
        }
        &::placeholder {
          font-size: 1rem;
        }
        &.active {
          outline: 3px solid ${({ theme }) => theme.colors.red};
          outline-offset: -3px;
          &::placeholder {
            color: ${({ theme }) => theme.colors.red};
          }
        }
      }
    }

    button {
      cursor: pointer;
      border: none;
      border-radius: 8px;
      padding: 15px 80px;
      margin: 20px 0 0 0;
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
        min-width: 260px;
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

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-style: italic;
  margin-top: 5px;
  font-size: 14px;
`;
