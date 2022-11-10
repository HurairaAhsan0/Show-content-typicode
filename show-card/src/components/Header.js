import React from 'react'
import { Button,AppBar,Toolbar } from "@mui/material";
// import SvgIcon from "@mui/material/SvgIcon";
import {Link } from "react-router-dom";
import "../Styles/App.css"

const Header = () => {
  return (
    
      <AppBar position="static" sx={{bgcolor:"#dbb858",color:"white",borderRadius:"4px" }}>
        <Toolbar sx={{justifyContent:"space-between",}}>
        <Link to="/" className='btn'>
        <Button size="small"  sx={{bgcolor:"black",color:"white"}}>Home</Button>
      </Link>

        {/* <Link to="/" className='btn'>
       <SvgIcon sx={{bgcolor:"black"}} />
      </Link> */}

       <Link to="/User/Create" className='btn'>
       <Button  size="small" sx={{bgcolor:"black",color:"white"}} >Create User</Button>
       </Link>
        </Toolbar>
      </AppBar>
   
  )
}

export default Header
