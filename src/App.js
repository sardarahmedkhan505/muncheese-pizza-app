import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Main } from './Components/Main/Main';
import Product from './Components/Products/Products';
import {GlobalStyle} from './GlobalStyling';
import { productData,productDataTwo } from './Components/Products/data';
import Trending from './Components/Trending/Trending';
import Footer from './Components/Footer/Footer';

function App() {
  return (

    <Router>
      <GlobalStyle />
    <Main/>
    <Product heading='Choose your favorite' data={productData}/>
    <Trending/>
    <Product heading='Sweet Treats for You' data={productDataTwo}/>
    <Footer/>
    </Router> 
  );
}

export default App;
