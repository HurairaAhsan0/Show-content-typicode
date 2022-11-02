import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"


const ListofUser = (props) => {
const [data,setdata]=useState([])
const HandleClick=()=>{
console.log(data)
}

 useEffect(() => {
  const  url="https://jsonplaceholder.typicode.com/posts";
  axios.get(url)
 .then((response)=>{
  const res=response.data;
  setdata(res.map((i)=>{
    console.log(i.userId)
      return (
        <div key={i.id} >
        <Card sx={{ maxWidth: 250 }}>
    <CardContent>
      <Typography gutterBottom variant="h7" component="div">
        Id:{i.id}
      </Typography>
      <Typography gutterBottom variant="h7" component="div">
          userId:{i.userId}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
      {i.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
     Description: {i.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Link to="/User/Edit">
      <Button size="small" >Edit</Button>
      </Link>
      <Link to="/User/List" >
      <Button size="small" >Show More</Button>
      </Link>
    </CardActions>
  </Card>
    </div>
  ) 
}))
})
}, [])
  return ( 
    <div>
      <Link to="/User/Create">
      <Button size="small" onClick={props.UserForm} >Create User</Button>
      </Link>
      <div>
      {data}
      {HandleClick}
      </div>
    </div>
  )
}

export default ListofUser;
