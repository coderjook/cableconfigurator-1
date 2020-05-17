import styled from "styled-components";
import { title } from "../Styles/title";

export const CableGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
`;

export const CableLabel = styled(title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export const Cable = styled.div`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-color: #EFF6FB;
  // background-image: ${({ img }) => `url(${img});`};
  // background-position: center;
  // background-size: cover;
  // filter: contrast(75%);
  margin-top: 5px;
  border: 3px solid grey;
  border-radius: 7px;
  transition-property: box-shadow margin-top filter;
  transition-duration: 0.1s;
  box-shadow: 0px 0px 2px 0px grey;
  &:hover {
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 5px;
    filter: contrast(100%);
    box-shadow: 0px 0px 10px 0px grey;
  }
`;
