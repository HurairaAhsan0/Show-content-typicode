import React from 'react'
import { Button,AppBar,Toolbar } from "@mui/material";
// import SvgIcon from "@mui/material/SvgIcon";
import {Link } from "react-router-dom";
import "../Styles/App.css"

const Header = () => {
  return (
      <AppBar position="static" sx={{bgcolor:"#1d4491",color:"white",borderRadius:"4px" }}>
        <Toolbar sx={{justifyContent:"space-between"}}>
        <Link to="/" >
        <Button className='btn'  sx={{bgcolor:"black",color:"white"}}>Home</Button>
      </Link>

        {/* <Link to="/" className='btn'>
       <SvgIcon sx={{bgcolor:"black"}} />
      </Link> */}

       <Link to="/User/Create" >
       <Button className='btn' sx={{bgcolor:"black",color:"white"}} >Create User</Button>
       </Link>
        </Toolbar>
      </AppBar>
   
  )
}

export default Header
