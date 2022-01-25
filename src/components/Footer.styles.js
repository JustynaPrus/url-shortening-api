import styled from "styled-components";
import { device } from "./../BreakPoints";

export const FooterWrapper = styled.footer`
  color: white;
  background-color: ${({ theme }) => theme.colors.veryDarkViolet};
  text-align: center;
  width: 100%;
  h4 {
    font-weight: 500;
    margin: 30px 0 15px 0;
  }
  p {
    color: ${({ theme }) => theme.colors.grayishViolet};
    margin: 10px 0;
  }
`;

export const StyledImg = styled.img`
  filter: brightness(0) invert(1);
  margin-top: 40px;
`;
export const ImgWrapper = styled.div`
  padding: 30px 0 15px 0;
  img {
    margin: 0 12px;
    cursor: pointer;
    &:hover {
      filter: brightness(0) saturate(100%) invert(90%) sepia(74%)
        saturate(3183%) hue-rotate(124deg) brightness(87%) contrast(85%);
    }
  }
`;

export const InfoBox = styled.footer`
  font-size: 12px;
  padding: 10px 0;
  a {
    color: ${({ theme }) => theme.colors.grayishViolet};
    text-decoration: none;
  }
`;

export const Container = styled.div`
  @media ${device.sm} {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 2% 10% 1% 10%;
    text-align: left;
  }
  p {
    cursor: pointer;
    &:hover {
      filter: brightness(0) saturate(100%) invert(90%) sepia(74%)
        saturate(3183%) hue-rotate(124deg) brightness(87%) contrast(85%);
    }
  }
`;
