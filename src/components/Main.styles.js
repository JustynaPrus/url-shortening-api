import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  padding: 20px;
  h2 {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    margin: 40px 0 15px 0;
  }
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  padding: 25px;
  margin: 50px 0;
  border-radius: 5px;
  position: relative;
  h3 {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    margin: 40px 0 15px 0;
  }
  p {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
  }
`;

export const Cirle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkViolet};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.veryDarkBlue};
  margin-bottom: 40px;
`;
