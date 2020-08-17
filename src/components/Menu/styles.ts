import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  background: #2c4fa1;
  width: 100%;
  padding-bottom: 5px;
`;

export const Image = styled.img`
  width: 150px;
  padding-top: 5px;
`;

export const Links = styled(Link)`
  color: #f0f0f5;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
`;
