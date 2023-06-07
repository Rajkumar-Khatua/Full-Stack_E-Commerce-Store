import styled from "styled-components";
import {
  Add,
  AddCircle,
  ArrowRightAltSharp,
  FavoriteBorderOutlined,
  LocationCity,
  RemoveCircle,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import CheckIcon from "@mui/icons-material/Check";
import SellIcon from "@mui/icons-material/Sell";
import "./SP.scss";
import UserRating from "../../components/UserRating/UserRating";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import { mobile } from "../../responsiveDesign";
import NewsLatter from "../../components/NewsLatter/NewsLatter";
import { useLocation } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../requestMethods.js";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ padding: "5px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
  /* background-color: #ad4444; */
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding:"20px" })}

`;
const Image = styled.img`
  width: 75%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "55vh", width:"100%", objectFit: "cover" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "0px 20px" })}
`;
const Title = styled.h1`
  font-weight: 200;
  ${mobile({ fontSize:"20px", fontWeight:400})}

`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 300;
  font-size: 40px;
  ${mobile({ fontSize:"30px", fontWeight:"400" })}

`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid lightgrey;
  width: 50%;
  padding: 20px;
  margin: 30px 0px;
  border-radius: 15px;
  ${mobile({ width: "100%", padding: "10px", margin: "10px 0px" })}
`;
const ColDirContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 5%;
  border: 1px solid grey;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 5px;
  padding: 5px 30px;
  border: none;

  border-color: #d8d8d8;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  border: 1px solid lightgrey;
  width: 30%;
  padding: 20px;
  margin: 30px 0px;
  border-radius: 15px;
  ${mobile({ width: "100%", padding: "10px" })}
`;
const AspectedDelivery = styled.span`
  font-size: 14px;
  font-weight: bold;
  display: flex;
  padding: 15px;
  ${mobile({ flexDirection: "column" })}
`;
const Address = styled.span`
  font-size: 13px;
  display: flex;
  /* flex-direction: column; */
  padding: 15px;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 10px; */
`;
const Amount = styled.span``;
const Button = styled.button`
  height: 35px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  background: #ff512f;
  background: -webkit-linear-gradient(to right, #f09819, #ff512f);
  background: linear-gradient(to right, #f09819, #ff512f);
  border: none;
  border-radius: 30px;
  font-weight: 500;
`;
const ButtonBuy = styled.button`
  height: 35px;
  cursor: pointer;
  width: 100%;
  background: #ffb75e;
  background: -webkit-linear-gradient(to right, #ed8f03, #ffb75e);
  background: linear-gradient(to right, #ed8f03, #ffb75e);
  border: none;
  border-radius: 30px;
  font-weight: 500;
`;
const BtnConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  flex-direction: column;
`;
const UsefullIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  /* TODO */
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60px;
  padding: 10px;
  width: 70px;
  text-align: center;
  color: #3f2a2a;
`;
const Text = styled.span`
  font-size: 10px;
  color: teal;
  padding: 5px;
`;
const RatingContainer = styled.div`
  margin-top: 10px;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  font-size: 14px;
  color: grey;
`;
const TopBarnd = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: flex-start;
  ${mobile({ })}
`;
const Quality = styled.span`
  padding: 5px;
  color: #181616ba;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: #b8b5b587;
  font-size: 12px;
  font-weight: 500;
  ${mobile({ fontSize: "13px", padding: "3px", fontWeight: "bold" })}
`;
const ProductDetailsContainer = styled.div`
  border: 1px solid #b8b5b587;
  border-radius: 10px;
  ${mobile({ flexDirection: "column" })}
`;
const TitlePro = styled.h1`
  font-size: 22px;
  padding: 10px;
  ${mobile({ fontSize: "14px", padding: "5px" })}
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
const Key = styled.span`
  font-size: 15px;
  color: #695f5f;
  font-weight: bold;
  ${mobile({ fontSize: "12px" })}
`;
const Value = styled.span`
  font-size: 14px;
  color: #695f5f;
  margin-left: 10px;
  ${mobile({ fontSize: "12px", marginLeft: "3px" })}
`;
const Reviews = styled.div`
  padding: 10px;
  ${mobile({ fontSize: "10px", marginLeft: "5px", padding: "5px" })}
`;
const ReviewTitle = styled.h1`
  font-size: 22px;
  ${mobile({ fontSize: "16px" })}
`;
const SellProductsMercheat = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 10px;

  ${mobile({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: "10px",
  })}
`;
const SellProductTitle = styled.span`
  font-size: 13px;
  font-weight: bold;
`;
const SellProductBtn = styled.button`
  padding: 5px 15px;
  width: 14%;
  border-radius: 10px;
  border: none;
  outline: none;
  background: #daf019;
  background: -webkit-linear-gradient(to right, #edde5d, #f09819);
  background: linear-gradient(to right, #edde5d, #f09819);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "3px 10px", marginLeft: "10px" })}
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  ${mobile({ padding: "10px" })}
`;
const ReviewReview = styled.h1`
  font-size: 20px;
  ${mobile({ fontSize: "15px" })}
`;
const Input = styled.input`
  width: 40%;
  border: 0.5px solid lightgrey;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  ${mobile({ width: "100%" })}
`;
const SendReview = styled.div`
  /* border: 1px solid black; */
  display: flex;
  align-items: center;
`;
const SendReviewBtn = styled.button`
  padding: 10px;
  border: none;
  outline: none;
  background-color: teal;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  /* flex-direction: column; */
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const disPatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "sub") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    // Update Cart
    disPatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>₹ {product.price}</Price>
          <ColDirContainer>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color?.map((c) => (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>

              <UsefullIcons>
                <Icons>
                  <LocalShippingOutlinedIcon fontSize="medium" />
                  <Text>Free Delivery</Text>
                </Icons>
                <Icons>
                  <AssignmentReturnOutlinedIcon fontSize="medium" />
                  <Text>Easy Return and Exchange Policy</Text>
                </Icons>
                <Icons>
                  <EmojiEventsOutlinedIcon fontSize="medium" />
                  <Text>Top Brand</Text>
                </Icons>
                <Icons>
                  <SecurityOutlinedIcon fontSize="meReviewTitledium" />
                  <Text>Secure Transaction</Text>
                </Icons>
              </UsefullIcons>
              <RatingContainer>
                <TopBarnd>
                  <Quality>
                    Quality Assurance
                    <VerifiedSharpIcon className="VerifyBatch" />
                  </Quality>
                  <Title>{product.companyName}</Title>
                </TopBarnd>
                <Rating>
                  <CheckIcon className="checkIcon" fontSize="inherit" />
                  10K+ Rating
                </Rating>
                <Rating>
                  <CheckIcon className="checkIcon" fontSize="inherit" />
                  10 days ago launch
                </Rating>
                <Rating>
                  <CheckIcon className="checkIcon" fontSize="inherit" />
                  Varified Seller
                </Rating>
              </RatingContainer>
            </FilterContainer>
            <AddContainer>
              <Price>₹ {product.price}</Price>
              <AspectedDelivery>
                <span style={{ color: "teal", marginRight: "5px" }}>
                  FREE delivery
                </span>
                Monday, 29 May.
              </AspectedDelivery>
              <Address>
                <LocationCity style={{ marginRight: "10px", color: "grey" }} />
                19th Floor, Concorde Tower C, UB City, No.24, Vittal Mallya
                Road, Bangalore 560001, India.
              </Address>
              <AmountContainer>
                {/* onClick Method for Increase or Decrease the amount of Quantity */}

                <RemoveCircle
                  className="removeIcon"
                  onClick={() => handleQuantity("sub")}
                />
                <Amount>{quantity}</Amount>
                <AddCircle
                  className="addIcon"
                  onClick={() => handleQuantity("add")}
                />
              </AmountContainer>
              <BtnConatiner>
                <FavoriteBorderOutlined className="Favourte" />
                <Button onClick={handleClick}> Add To Cart</Button>
                <ButtonBuy>Buy Now</ButtonBuy>
              </BtnConatiner>
            </AddContainer>
          </ColDirContainer>

          <SellProductsMercheat>
            <SellProductTitle>Have one to sell ? </SellProductTitle>
            <SellProductBtn>
              Sell <ArrowRightAltSharp className="Sell" fontSize="small" />
            </SellProductBtn>
          </SellProductsMercheat>

          <ProductDetailsContainer>
            <TitlePro>Product Details : </TitlePro>
            <Details>
              <Key>Product Dimensions : </Key>
              <Value>{product.product_Dimensions}</Value>
            </Details>
            <Details>
              <Key>Date First Launch : </Key>
              <Value> {format(product.createdAt)}</Value>
            </Details>
            <Details>
              <Key>Manufacturer : </Key>
              <Value> {product.manufacturer}</Value>
            </Details>
            <Details>
              <Key>Item Weight : </Key>
              <Value> {product.itemWeight}</Value>
            </Details>
          </ProductDetailsContainer>
        </InfoContainer>
      </Wrapper>
      <Reviews>
        <ReviewTitle> Reviews With Images</ReviewTitle>
        <InputContainer>
          <ReviewReview>Write a review </ReviewReview>
          <SendReview>
            <Input placeholder="Write Review" />
            <PermMediaOutlinedIcon className="Media" />
            <SendReviewBtn>Send</SendReviewBtn>
          </SendReview>
        </InputContainer>
        <UserRating />
      </Reviews>
      <NewsLatter />
      <Footer />
    </Container>
  );
};

export default Product;
