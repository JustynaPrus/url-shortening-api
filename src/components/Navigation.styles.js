import styled from "styled-components";
import { device } from "./../BreakPoints";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 30px;
  width: 100%;
  @media ${device.sm} {
    width: 80%;
    padding: 20px 0;
  }
  div {
    width: auto;
    flex-grow: 1;
  }
`;
