import styled from "styled-components";
import bgShorten from "../images/bg-shorten-mobile.svg";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bgShorten});
  background-repeat: no-repeat;
  background-position: right top;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  width: 100vw;
  padding: 20px;
  input {
    font-family: "Poppins", sans-serif;
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 80%;
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 15px 80px;
    margin-top: 40px;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.cyan};
    width: 80%;
  }
`;
