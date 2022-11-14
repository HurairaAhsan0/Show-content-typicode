import React from 'react'
import { AppBar,Toolbar } from "@mui/material";
// import SvgIcon from "@mui/material/SvgIcon";
import {Link } from "react-router-dom";
import "../Styles/App.css"
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import UndoIcon from '@mui/icons-material/Undo';



const Header = () => {
  return (
      <AppBar position="static" sx={{bgcolor:"#FFFFFF",borderRadius:"6px" }}>
        <Toolbar sx={{justifyContent:"space-between"}}>
        <Link to="/">
        <UndoIcon fontSize='large' sx={{color:'#007FFF'}}/>
      </Link>
        <Link to="/">
        <HomeSharpIcon fontSize='large' sx={{color:'#007FFF'}}/>
      </Link>
       <Link to="/User/Create" >
       <AddSharpIcon fontSize='large' sx={{color:'#007FFF'}}/>
       </Link>
        </Toolbar>
      </AppBar>
   
  )
}

export default Header
