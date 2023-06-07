import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { mobile } from '../../responsiveDesign';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-image: linear-gradient(to right top, #031b41, #032d46, #042425, #14221b, #20221a);
  color:#fff;
  ${mobile({ flexDirection:"column", flexWrap:"wrap", alignItems: "center", justifyContent: "center"})}

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ borderBottom: "1px solid lightgray"})}

  ${mobile({ alignItems: "center", justifyContent: "center"})}


`;
const Logo = styled.h1`
  font-size: 20px;
  font-weight: bolder;
  color: #1c8d73;
`;
const Desc = styled.span`
  margin: 20px 0px;
  font-size: 14px;

  ${mobile({textAlign:"center"})}

`;
const SocialConatiner = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #ebebeb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

  &:hover {
  color: #d8d8d8;
    background-color: #${(props) => props.color};
    transition: all 0.5s ease;
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ borderBottom: "1px solid lightgray"})}

`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;

`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;

  &:hover {
    color: #f01d91e0;
    transition: all 0.5s ease;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Raj Store</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          vitae reprehenderit enim?
        </Desc>
        <SocialConatiner>
          <SocialIcon color='3B5998'>
            <FacebookOutlinedIcon style={{ marginRight: "10px" }} />
          </SocialIcon>
          <SocialIcon color='e92969'>
            <InstagramIcon style={{ marginRight: "10px" }} />
          </SocialIcon>
          <SocialIcon color='c8232c'>
            <PinterestIcon />
          </SocialIcon>
          <SocialIcon color='171515'>
            <GitHubIcon style={{ marginRight: "10px" }} />
          </SocialIcon>
        </SocialConatiner>
      </Left>
      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnSharpIcon />
          167, Race Course Rd, Gopalapuram
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon />
          +91 0422 452 0116
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          yamaman864@andorem.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
};

export default Footer;
