import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import CardVal from './CardVal';




export const ListofUser = (props) => {

  const [Values, setValues] = useState([])
  const [UserValue,setUserValue]=useState([])
  

  const blocked = Values.map((w) => { 
    return (
      <div  key={w.id}>
        { w.id===1 ||  w.id===11 ||  w.id===21 || w.id===31 || w.id===41 || w.id===51 || w.id===61 
        || w.id===71 || w.id===81 || w.id===91  ?
          (
            <Box sx={{ m: 2, Width: 25 }} >
             <Card>
              <CardVal
             CardContent={<CardContent>
                  <Typography gutterBottom variant="h8" component="div">
                    userId:{w.userId}
                  </Typography>
                  {UserValue.map((user)=>{
                    return(
                      <div key={user.id}>
               {  user.id===w.userId ?(<Typography gutterBottom variant="h8" component="div" >
                                     Name: { user.name}
                                   </Typography> ):" " }
                                                 </div>   )      })}
                  <Typography gutterBottom variant="body1" component="div">
                    {w.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary" >
                    Description: {w.body}
                  </Typography>
                </CardContent>}
               CardAction={ <CardActions >
                  <Link to={`/User/Edit/${w.title}/${w.body}/${w.userId}/${w.id}`}>
               <Button size="small" varient="outlined" color='info' >Edit</Button>
               </Link>
               <Link to={`/User/List/${w.userId}`}>
              <Button size="small" >Show More</Button>
              </Link>
                </CardActions>}
                />
              </Card>
            </Box>
          ) : " " }
      </div>
    )
  })
  




  useEffect(() => {
    const UserRequest=async()=>{

      const url = "https://jsonplaceholder.typicode.com/posts";
     await axios.get(url)
      .then((response) => {
        const res = response.data;
        setValues(res);
      })
      // user info request
    await axios.get("https://jsonplaceholder.typicode.com/users")
      .then((result)=>{
        setUserValue(result.data)
      })
    }
    UserRequest();
  }, [])
  return (
    <div >
  <Link to="/User/Create" >
  <Button sx={{bgcolor:"black",m:1}} >Create User</Button>
  </Link>
      <div>
        {blocked}
      </div>
    </div>
  )
}

export default ListofUser;
