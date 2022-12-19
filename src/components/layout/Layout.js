import React,{useContext} from 'react'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import {Outlet} from 'react-router-dom'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { themeContext } from '../../contexts/ThemeContextProvider';

function Layout() {
let [theme]=useContext(themeContext)




  return (
    <div style={theme}>
     
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout