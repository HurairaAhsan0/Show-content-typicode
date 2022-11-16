import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import "../../Styles/App.css"


const Header=()=> {
  return (
    <AppBar position="static" style={{ background: '#000000' }}>
      <CssBaseline />
      <Toolbar >
        <Stack direction="row" spacing={10}>
        <Typography variant="h5" color="primary[500]">
          <Link to="/">
          Home
          </Link>
        </Typography>
        <Typography   variant="h5"  >
          <Link to="/User/Create">
          Create User
          </Link>
        </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Header;



    // <div>
    //   <AppBar sx={{height:50,bgcolor:"#5c6dff"}}>
    //     <Toolbar>
    //       <Stack direction="row" spacing={80} >
    //     <Link to="/">
    //     <Button size="small" varient="outlined" sx={{bgcolor:"black",color:"white",m:1,height:25}}>Home</Button>
    //   </Link>
    //    <Link to="/User/Create" >
    //    <Button size="small" sx={{bgcolor:"black",color:"white",m:1,height:25}} >Create User</Button>
    //    </Link>
    //       </Stack>
    //     </Toolbar>
    //   </AppBar>
    //    </div>
   
//   )
// }

// export default Header
