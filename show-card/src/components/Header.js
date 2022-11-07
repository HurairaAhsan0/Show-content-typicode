import React from 'react'
import { Button,AppBar,Toolbar,Stack } from "@mui/material";
import {Link } from "react-router-dom"

const Header = () => {
  return (
    
    <div>
      <AppBar sx={{height:50,bgcolor:"#5c6dff"}}>
        <Toolbar>
          <Stack direction="row" spacing={80} >
        <Link to="/">
        <Button size="small" varient="outlined" sx={{bgcolor:"black",color:"white",m:1,height:25}}>Home</Button>
      </Link>
       <Link to="/User/Create" >
       <Button size="small" sx={{bgcolor:"black",color:"white",m:1,height:25}} >Create User</Button>
       </Link>
          </Stack>
        </Toolbar>
      </AppBar>
       </div>
   
  )
}

export default Header
