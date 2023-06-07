import React from "react";
import { mobile } from "../../responsiveDesign";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: hsla(136, 82%, 72%, 1);


  background: linear-gradient(
    90deg,
    hsla(136, 82%, 72%, 1) 0%,
    hsla(205, 84%, 36%, 1) 100%
  );

  background: -moz-linear-gradient(
    90deg,
    hsla(136, 82%, 72%, 1) 0%,
    hsla(205, 84%, 36%, 1) 100%
  );

  background: -webkit-linear-gradient(
    90deg,
    hsla(136, 82%, 72%, 1) 0%,
    hsla(205, 84%, 36%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#7EF29D", endColorstr="#0F68A9", GradientType=1 );
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 20%;
  flex-direction: column;
  border: 1px solid lightgray;

  ${mobile({ width: "70%", height: "40%" })}

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }

  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  border: 1px solid rgba(255, 255, 255, 0.45);
`;

const Title = styled.h1`
  font-size: 20px;
  color: #ebe8e8;
  font-weight: 600;
`;

const From = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleMain = styled.h1`
  font-size: 20px;
  padding: 20px;
  color: #e6e6e6;

  ${mobile({ textAlign: "center", fontSize: "15px" })}
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 6px;
  border: 0.5px solid lightgrey;
  outline: none;
  border-width: 0.5px;
  outline: none;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #ac7500d1;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  background: rgba(255, 254, 254, 0.26);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.6px);
  -webkit-backdrop-filter: blur(9.6px);
  border: 1px solid rgba(255, 254, 254, 0.79);

  &:hover {
    background-image: linear-gradient(
      to right top,
      #1f0537,
      #004d7a,
      #008793,
      #00bf72,
      #a8eb12
    );
  }
`;
const Link = styled.span`
  text-align: center;
  /* padding: 0.5em; */
  cursor: pointer;
  margin: 5px 0px;

  &:hover {
    color: #ad561ce6;
    border-bottom: 1px solid grey;
  }
`;
const Login = () => {
  return (
    <Container>
      <TitleMain> We are very happy to See you again</TitleMain>
      <Wrapper>
        <Title>LOGIN ACCOUNT</Title>
        <From>
          <Input placeholder='E-mail' />

          <Input placeholder='Password' />
          {/* <VisibilityOutlinedIcon/> */}

          <Button>LOGIN</Button>

          <Link>Forget Password</Link>
          <Link>
            New to RajStore ? <b>Register</b>
          </Link>
        </From>
      </Wrapper>
    </Container>
  );
};

export default Login;
