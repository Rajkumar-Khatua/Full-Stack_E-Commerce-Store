import React from "react";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Checkbox } from "@mui/material";
import "./RG.scss";
import { mobile } from "../../responsiveDesign";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: linear-gradient(
    to right top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 30%;
  border: 1px solid lightgray;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  border: 1px solid rgba(255, 255, 255, 0.45);

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  ${mobile({ width: "70%", height: "45%" })}
`;

const Title = styled.h1`
  font-size: 22px;
  color: #f1f1f1;
  font-weight: 600;
`;

const From = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  ${mobile({ textAlign: "center", fontSize: "15px" })}
`;
const TitleMain = styled.h1`
  font-size: 20px;
  padding: 20px;
  color: #f0f0f0;

  ${mobile({ textAlign: "center", fontSize: "15px" })}
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
  border: 0.5px solid lightgrey;
  outline: none;
  border-width: 0.5px;
`;

const Policy = styled.span`
  margin: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: teal;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  background: rgba(255, 254, 254, 0.26);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.6px);
  -webkit-backdrop-filter: blur(9.6px);
  border: 1px solid rgba(255, 254, 254, 0.79);

  &:hover {
    background-image: linear-gradient(
      to right top,
      #270537,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    );
  }
`;
const Register = () => {
  return (
    <Container>
      <TitleMain> We'll be very happy to Connect With Us</TitleMain>
      <Wrapper>
        <Title>CREATE A ACCOUNT</Title>
        <From>
          <Input placeholder='Full name' />
          <Input placeholder='E-mail' />
          <Input placeholder='Mobile Number' />
          <Input placeholder='Password' />
          {/* <VisibilityOutlinedIcon/> */}
          <Input placeholder='Confrim Password' />
          <Policy>
            <Checkbox />
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Policy>
          <Button>REGISTER</Button>
        </From>
      </Wrapper>
    </Container>
  );
};

export default Register;
