import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBasket,
} from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: rgba(119, 117, 117, 0.205);
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  color: #eb2c73;
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;
  min-width: 280px;
  height: 390px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid #e6e6e6ae;
  border-radius: 10px;
  position: relative;
  transition: all 0.5s ease;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
  &:hover ${Info} {
    opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  }
`;
const Circle = styled.div`
  /* background-color: #6360628f; */
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  border-radius: 50%;

  &:hover {
    background-color: #fff;
    border-radius: 50%;
    transform: scale(1.3);
  }
`;
const ProductInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  /* justify-content: space-between; */
`;
const ProductName = styled.span`
  font-size: 19px;
  font-weight: bolder;
  color: #080707;
  text-align: center;
`;
const ProductPrice = styled.span`
  text-align: left;
  font-size: 18px;
  font-weight: 400;
`;
const ProductDesc = styled.span`
  font-size: 14px;
`;
const Deviveryinfo = styled.span`
  font-size: 15px;
`;
const ProductPublishedAt = styled.span``;
const UserRating = styled.div`
  margin-bottom: 20px;
`;
const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info className="icon">
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <ProductInformationContainer>
        <ProductName>{item.title}</ProductName>
        <ProductDesc>{item.desc}</ProductDesc>
        <ProductPrice> ₹ {item.price}</ProductPrice>
        <Deviveryinfo>Free Delivery by Raj Store</Deviveryinfo>
        {/* TODO */}
        {/* <ProductPublishedAt>{format(item.createdAt)}</ProductPublishedAt> */}
        {/* <ProductPublishedAt>{item.createdAt}</ProductPublishedAt> */}
        {/* <UserRating>
          <Rating />
        </UserRating> */}
      </ProductInformationContainer>
    </Container>
  );
};

export default Product;
