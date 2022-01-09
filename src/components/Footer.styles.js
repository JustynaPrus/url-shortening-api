import styled from "styled-components";

export const FooterWrapper = styled.footer`
  color: white;
  background-color: ${({ theme }) => theme.colors.veryDarkViolet};
  text-align: center;
  min-width: 100%;
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
  }
`;

export const InfoBox = styled.footer`
  font-size: 12px;
  a {
    color: ${({ theme }) => theme.colors.grayishViolet};
    text-decoration: none;
  }
`;
