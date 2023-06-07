import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Autocomplete, Avatar, Badge, TextField } from "@mui/material";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { mobile } from "../../responsiveDesign";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Parent = styled.div`
  height: 50px;
  /* border-bottom: 0.5px solid lightgray; */
  position: sticky;
  top: 0;
  padding-bottom: 2px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 999;

  ${mobile({ height: "50px", padding: "2px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  /* margin-top: 15px; */
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.span`
  font-size: 20px;
  font-weight: bolder;
  color: #1c8d73;
  ${mobile({ fontSize: "14px" })}
`;
const Language = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "none" })}
`;
const Middle = styled.div`
  /* margin-top: 15px; */
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  ${mobile({
    marginLeft: "5px",
    flex: 1,
    marginLeft: "0px",
    marginRight: "12px",
  })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 10px;
  width: 50%;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ border: "none", padding: "2px" })}

  &:hover {
    border-color: rgb(26, 24, 27);
    transition: all 1s ease;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  border-right: 0.5px solid lightgray;

  ${mobile({ display: "15px", borderRight: "none", display: "none" })}
`;

const Right = styled.div`
  /* margin-top: 15px; */
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Login = styled.span`
  margin-left: 20px;
  padding: 10px 15px;
  cursor: pointer;

  ${mobile({ marginLeft: "5px", padding: "5px" })}

  border-radius: 10px;
  color: #ec0a7b;

  &:hover {
    color: #ffffff;
    background: #833ab4;
    background: -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
    background: linear-gradient(to right, #fcb045, #fd1d1d, #833ab4);
  }
`;
const Register = styled.span`
  margin-left: 20px;
  padding: 10px 15px;
  background: #00f260;
  background: -webkit-linear-gradient(to right, #0575e6, #00f260);
  background: linear-gradient(to right, #0575e6, #00f260);
  cursor: pointer;
  border-radius: 10px;
  color: #ffff;

  ${mobile({ marginLeft: "5px", padding: "5px" })}
`;
const Navbar = () => {
  const options = ["English", "Hindi"];
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  const quantity = useSelector((state) => state.cart.quantity);
  // console.log(quantity)
  return (
    <Parent>
      <Wrapper>
        <Left>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <Logo>Raj Store</Logo>
          </Link>
          <Language>
            {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div> */}
            <h5 className="value">{`Chosen Language: '${inputValue} '`}</h5>

            {/* <Autocomplete
            className="options"
            
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id='controllable-states-demo'
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Languages'
                />
              )}
            /> */}
          </Language>
        </Left>
        <Middle>
          <SearchContainer>
            <Input />
            <SearchOutlinedIcon className="SearchIcon" />
          </SearchContainer>
        </Middle>
        <Right>
          <RightItems>
            <Link to="/cart">
              <Badge badgeContent={quantity} showZero color="primary">
                <ShoppingCartIcon style={{ color: "#525151" }} />
              </Badge>
            </Link>
            <FavoriteBorderOutlinedIcon className="rightItems" />
            <LightModeOutlinedIcon className="rightItems" />

            {/* <span className='Login'>Login</span> */}
            <Login> Login</Login>
            {/* <span className='register '>Register</span> */}
            <Register>Register</Register>
          </RightItems>
          {/* <Avatar
            sx={{
              height: 35,
              width: 35,
              textAlign: "center",
              backgroundColor: "green",
            }}>
            H
          </Avatar> */}
        </Right>
      </Wrapper>
    </Parent>
  );
};

export default Navbar;
