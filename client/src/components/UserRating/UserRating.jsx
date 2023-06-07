import React from "react";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import "./UR.scss";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import { mobile } from "../../responsiveDesign";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px;
  ${mobile({ padding: "10px" })}
`;
const LocalInfo = styled.div`
  display: flex;
  align-items: center;
`;
const UserImg = styled.img`
  height: 40px;
  width: 40px;
  ${mobile({ height: "35px", width: "35px" })}

`;
const UserName = styled.span`
  margin-left: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5e5858;
  ${mobile({fontSize: "12px"})}

`;
const DescCon = styled.div`
  padding: 10px;
  ${mobile({ padding: "5px" })}
`;
const Desc = styled.p`
  font-size: 12px;
  color: #443b3b;
`;
const ReviewImg = styled.img`
  height: 180px;
  width: 180px;
  object-fit: cover;
  margin: 5px;
  align-items: flex-start;
  display: flex;
  ${mobile({ height: "120px", width: "120px" })}
`;
const ImgContainer = styled.div`
  display: flex;
  align-items: flex-start;
  ${mobile({ flexDirection: "row", justifyContent: "flex-start" })}
`;
const UserRating = () => {
  return (
    <Container>
      <LocalInfo>
        <UserImg src='https://icon-library.com/images/no-user-image-icon/no-user-image-icon-0.jpg' />
        <UserName>
          Jhon Doe <VerifiedSharpIcon className='VerifyIcon' fontSize="small"/>
        </UserName>
      </LocalInfo>
      <DescCon>
        <Desc>Lorem ipsum dolor sit amet consectetur.</Desc>
        <ImgContainer>
          <ReviewImg src='https://m.media-amazon.com/images/I/61iVx-RG4wL._UY741_.jpg' />
          <ReviewImg src='https://m.media-amazon.com/images/I/61iVx-RG4wL._UY741_.jpg' />
          <ReviewImg src='https://m.media-amazon.com/images/I/61iVx-RG4wL._UY741_.jpg' />
        </ImgContainer>
      </DescCon>
    </Container>
  );
};

export default UserRating;
