import React from 'react'
import { Button } from "@mui/material";
import {Link } from "react-router-dom"
const Header = () => {
  return (
    <div >
     <Link to="/">
        <Button size="small" varient="outlined" sx={{bgcolor:"black", position:"sticky"}}>Home</Button>
      </Link>
    </div>
  )
}

export default Header
