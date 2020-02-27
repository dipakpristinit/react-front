import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MainRouter from './MainRouter';

const App = () => (
  <BrowserRouter  basename={process.env.PUBLIC_URL} >
    <MainRouter /> 
  </BrowserRouter>
)

export default App;
