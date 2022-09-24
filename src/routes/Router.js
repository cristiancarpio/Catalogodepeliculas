import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { NavBar } from '../components/NavBar';
import App from '../containers/App';
import Nuevapeli from '../containers/Nuevapeli'
 

function Router() {
  return (
    <BrowserRouter>
       <NavBar/>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route exact path="/nuevo" element={<Nuevapeli/>}/>
      </Routes> 
    </BrowserRouter>
  )
}

export default Router