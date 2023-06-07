import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import { mobile } from "../../responsiveDesign";
import {
  AddBoxRounded,
  AddCircle,
  RemoveCircle,
  RemoveRounded,
} from "@mui/icons-material";
import styled from "styled-components";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";

import { useNavigate } from "react-router-dom";
import { userRequest } from "../../requestMethods.js";
// import { userRequest } from "../../requestMethods.js";

// Stripe Key
const KEY = import.meta.env.VITE_PUBLISH_KEY;

const Container = styled.div`
  /* height: 100vh;
width: 100vw; */
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h2`
  font-weigt: 500;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopBtn = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "fileld" && "none"};
  background-color: ${(props) =>
    props.type === "fileld" ? "black" : "transparent"};
  color: ${(props) => props.type === "fileld" && "white"};
`;
const TopTexts = styled.div``;

const TopText = styled.span`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  color: #fa255b;
  margin: 0px 10px;

  ${mobile({ display: "none" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
const Image = styled.img`
  width: 200px;
  ${mobile({ width: "150px" })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ padding: "10px", margin: "5px" })}
`;
const ProductName = styled.span`
  /* font-weight: blod; */
`;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductAmount = styled.span`
  font-size: 20px;
  margin: 5px;
  /* ${mobile({ fontSize: "14px", fontWeight: "bold" })} */
`;

const ProductSize = styled.span``;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
`;
const Hr = styled.hr`
  background-color: #7472728b;
  border: none;
  height: 1px;
`;
const Summery = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  border: 1px solid rgba(255, 255, 255, 0.79);

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
  ${mobile({ height: "40vh", padding: "10px" })}
`;
const SummTitle = styled.h1`
  font-weight: 400;
  ${mobile({ fontSize: "20px", fontWeight: "bold", textAlign: "center" })}
`;

const SummeryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "700"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummeryItemText = styled.span`
  font-weight: 500;
  ${mobile({ fontSize: "12px", fontWeight: "bold" })}
`;

const SummeryItemPrice = styled.span`
  font-weight: 400;
`;

const Button = styled.button`
  width: 100%;
  background: #f7971e;
  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);
  background: linear-gradient(to right, #ffd200, #f7971e);
  padding: 10px;
  font-weight: 500;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background: #f0a80e;
    background: -webkit-linear-gradient(to right, #ffd200, #f7971e);
    background: linear-gradient(to right, #ffd200, #f7971e);
    color: #fff;
    font-weight: bolder;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  // console.log(navigate);

  const onToken = (token) => {
    setStripeToken(token);
  };

  // console.log(stripeToken);
  // set the value
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          replace: true,
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopBtn>CONTINUE SHOPING</TopBtn>
          <TopTexts>
            <TopText>Shoping Bag (8)</TopText>
            <TopText>Your Wishlist (1)</TopText>
          </TopTexts>
          <TopBtn type="fileld">CHECKOUT NOW</TopBtn>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetails>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>{product.title}</ProductName>
                    <ProductId>
                      <b>ID: </b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size: </b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <RemoveCircle htmlColor="red" />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <AddCircle htmlColor="green" />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {" "}
                    ₹{product.price * product.quantity}
                  </ProductPrice>
                </PriceDetails>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summery>
            <SummTitle>ORDER SUMMERY</SummTitle>
            <SummeryItem>
              <SummeryItemText>Subtotal </SummeryItemText>
              <SummeryItemPrice>₹ {cart.total} </SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Charge</SummeryItemText>
              <SummeryItemPrice>₹ 50.00 </SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Discount </SummeryItemText>
              <SummeryItemPrice>₹ -100.00 </SummeryItemPrice>
            </SummeryItem>
            <Hr />
            <SummeryItem type="total">
              <SummeryItemText>SubTotal</SummeryItemText>
              <SummeryItemPrice>₹ {cart.total} </SummeryItemPrice>
            </SummeryItem>
            <StripeCheckout
              name="Raj Shop"
              image="https://avatars.githubusercontent.com/u/124782492?s=400&u=4e80a1ce6218df3673ef7a8169d804be42229353&v=4"
              billingAddress
              shippingAddress
              description={`Your Total amount is ₹${cart.total}`}
              amount={cart.total * 100}
              currency="INR"
              token={onToken}
              stripeKey={KEY}
            >
              <Button>Buy Now</Button>
            </StripeCheckout>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
