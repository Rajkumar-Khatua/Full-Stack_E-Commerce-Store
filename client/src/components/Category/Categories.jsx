import CategoryItems from "./categoryItems";
import "./CI.scss";
import { categories } from "../../../Data";
import { mobile } from "../../responsiveDesign";
import styled from "styled-components";
import "react-horizontal-scrolling-menu/dist/styles.css";
import HorizontalScroll from "react-horizontal-scrolling";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0px" })}/* background-color: #e952c892; */
`;

const Categories = () => {
  return (
    <HorizontalScroll hideScrollBar="true" className="HSB">
      <Container>
        {categories.map((item) => (
          <CategoryItems item={item} key={item.id} />
        ))}
      </Container>
    </HorizontalScroll>
  );
};

export default Categories;
