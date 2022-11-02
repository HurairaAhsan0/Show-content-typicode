import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import EditUser from './EditUser';


const ListofUser =() => {
  const [data,setdata]=useState([])
  const [Values,setValues]=useState([])
  console.log(data)
  const handleValues=()=>{
    console.log(Values)
   return Values.map((val)=>{
      const {userId,id,title,description}=val;
      return <EditUser userId={userId} id={id} title={title} description={description} />
    })
  }
  
  
  const block= Values.map((w)=>{
    console.log(w.userId)
    const b=w.userId;

    // for (let index = 0; index < c.length; index++) {
    //   const element = c;
      
    // }
  return (
    <div key={w.id}>
      { w.userId===b   ? (
     <div >
    <Card sx={{ maxWidth: 250 }}>
   <CardContent>
     <Typography gutterBottom variant="h7" component="div">
       Id:{w.id}
     </Typography>
     <Typography gutterBottom variant="h7" component="div">
         userId:{w.userId}
     </Typography>
     <Typography gutterBottom variant="h5" component="div">
     {w.title}
     </Typography>
     <Typography variant="body2" color="text.secondary">
    Description: {w.body}
     </Typography>
   </CardContent>
   <CardActions>
     <Link to="/User/Edit">
     <Button size="small" onClick={handleValues} >Edit</Button>
     </Link>
     <Link to="/User/List" >
     <Button size="small" >Show More</Button>
     </Link>
   </CardActions>
 </Card>
   </div>
   ) :"nothing"}
   </div>
  )
})




 useEffect(() => {
  const  url="https://jsonplaceholder.typicode.com/posts";
  axios.get(url)
 .then((response)=>{
  const res=response.data;
  setValues(res)
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
      <Button size="small">Create User</Button>
      </Link>
      <div>
      {/* {data} */}
      {block}
      </div>
    </div>
  )
}

export default ListofUser;
