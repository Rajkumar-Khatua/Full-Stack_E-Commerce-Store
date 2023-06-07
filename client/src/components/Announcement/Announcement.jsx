import React from "react";
import styled from "styled-components";
// import "./announcement.scss";


const Container = styled.div`
  height: 30px;
  background: #fc4a1a;
  background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
  background: linear-gradient(to right, #f7b733, #fc4a1a);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $20</Container>;
};

export default Announcement;
