import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Main } from './Components/Main/Main';
import {GlobalStyle} from './GlobalStyling';


function App() {
  return (

    <Router>
      <GlobalStyle />
    <Main/>
    </Router> 
  );
}

export default App;
