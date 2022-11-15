import React from 'react'
import { AppBar,Toolbar } from "@mui/material";
import {Link } from "react-router-dom";
import "../Styles/App.css"
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import AddSharpIcon from '@mui/icons-material/AddSharp';
// import UndoIcon from '@mui/icons-material/Undo';



const Header = (props) => {
  return (
      <AppBar position="sticky" sx={{bgcolor:"#FFFFFF",borderRadius:"6px" }}>
        <Toolbar sx={{justifyContent:"space-around"}}>
          {/* { props.location.pathname === '/' &&
          <> */}
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
