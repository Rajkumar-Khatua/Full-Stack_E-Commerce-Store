import React from 'react';
import "./home.scss"
import Slider from '../../components/Slider/Slider';
import Categories from '../../components/Category/Categories';
import Navbar from '../../components/Navbar/Navbar';
import Announcement from '../../components/Announcement/Announcement';
import Footer from '../../components/Footer/Footer';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Products from '../../components/Products/Products';
import styled from 'styled-components';

const TitleCat = styled.h1`
  
`
const Home = () => {
    return (
        <div className='home'>
           <Announcement/>
           <Navbar/>
           <Slider/>
           {/* <TitleCat>Categories</TitleCat> */}
           <Categories/>
           <Products/>
           <NewsLatter/>
           <Footer/>
        </div>
    )
    }

export default Home;
