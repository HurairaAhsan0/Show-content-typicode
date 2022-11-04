import React from 'react'
import { Button } from "@mui/material";
import {Link } from "react-router-dom"
const Header = () => {
  return (
    <div>
     <Link to="/User/Create">
        <Button size="small" varient="outlined" sx={{bgcolor:"black", position:'relative' }}>Create User</Button>
      </Link>
    </div>
  )
}

export default Header
