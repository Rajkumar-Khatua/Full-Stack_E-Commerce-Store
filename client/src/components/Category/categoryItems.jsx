import styled from "styled-components";
import { mobile } from "../../responsiveDesign";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 40vh;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  position: relative;
  ${mobile({ padding: "6px" })}
  transition: 0.5s ease-in;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  height: 350px;
  width: 350px;
  cursor: pointer;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  ${mobile({
    borderRadius: 0,
    height: "220px",
    width: "220px",
    borderRadius: "50%",
  })}

  &:hover {
    border: 5px solid #20b375d5;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Title = styled.h2`
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  ${mobile({ fontSize: "12px", marginBottom: "5px" })}
`;
const Button = styled.button`
  padding: 0.5em 3em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: 500;
  font-size: 20px;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 300%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;

    @keyframes glowing-button-85 {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  }
  ${mobile({ backgroundColor: "transparent", padding: "0.2em 1em", fontSize:"12px" })}
`;
const TitleCat = styled.h1``;


const CategoryItems = ({ item }) => {
  return (
    // <TitleCat>Categories</TitleCat>
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Buy Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItems;
