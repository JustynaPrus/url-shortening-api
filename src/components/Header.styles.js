import styled from "styled-components";
import { device } from "./../BreakPoints";

export const HeaderWrapper = styled.header`
  max-width: 100%;
  padding: 20px;
  text-align: center;
  overflow: hidden;
  @media ${device.sm} {
    display: flex;
    flex-direction: row-reverse;
    text-align: left;
    align-items: center;
  }
  img {
    max-width: 140%;
    @media ${device.sm} {
      width: 50%;
    }
  }
  h1 {
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    margin: 30px 0 10px 0;
    font-size: 2.8rem;
    line-height: 120%;
    @media ${device.sm} {
      font-size: 4.5rem;
    }
  }
  p {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 30px;
  padding: 15px 40px;
  margin: 30px 0 60px 0;
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.cyan};
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.6);
  }
`;

export const FlexWrapper = styled.div`
  margin-left: 10%;
  margin-right: 3%;
`;
