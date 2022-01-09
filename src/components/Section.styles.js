import styled from "styled-components";
import bgMobile from "../images/bg-boost-mobile.svg";

export const Wrapper = styled.section`
  text-align: center;
  color: white;
  background-image: url(${bgMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 80px 0 60px 0;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  width: 100%;
  button {
    border: none;
    border-radius: 30px;
    padding: 15px 40px;
    margin: 20px 0;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.cyan};
  }
`;
