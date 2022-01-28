import styled from "styled-components";
import { device } from "./../BreakPoints";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  padding: 20px;
  z-index: -1;
  @media ${device.sm} {
    padding: 0 10%;
  }
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
  padding: 25px 25px 45px 25px;
  margin: 85px 0;
  border-radius: 5px;
  position: relative;
  @media ${device.sm} {
    margin: 85px 10px;
    &:nth-child(2) {
      margin: 125px 10px 85px 10px;
    }
    &:nth-child(3) {
      margin: 165px 10px 85px 10px;
    }
  }
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
  @media ${device.sm} {
    left: 60px;
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.veryDarkBlue};
  margin: 0 10px;
  @media ${device.sm} {
    max-width: 40%;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: -2;
  @media ${device.sm} {
    display: flex;
    align-items: flex-start;
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.cyan};
  width: 8px;
  height: 450px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  @media ${device.sm} {
    width: 450px;
    height: 8px;
  }
`;
