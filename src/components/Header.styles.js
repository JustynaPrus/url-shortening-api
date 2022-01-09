import styled from "styled-components";

export const HeaderWrapper = styled.main`
  max-width: 100vw;
  padding: 20px;
  text-align: center;
  img {
    max-width: 140%;
  }
  h1 {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    margin: 30px 0 10px 0;
  }
  p {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
  }
`;

export const StyledButton = styled.button`
  border: none;
  border-radius: 30px;
  padding: 15px 40px;
  margin: 30px 0 60px 0;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.cyan};
`;
