import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ListofUser = () => {
const [data,setdata]=useState([])
const [index,setindex]=useState([])
 useEffect(() => {
  const  url="https://jsonplaceholder.typicode.com/posts";
  axios.get(url)
 .then((response)=>{
  console.log(response.data);


  
    setdata(response.data.map((i)=>{
setindex(i)
   console.log(i)
        return (
          <div key={i.id} >
        <Card sx={{ maxWidth: 200 }}>
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
      {i.body}
     {console.log(i.body)}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" >Edit</Button>
      <Button size="small">Show More</Button>
    </CardActions>
  </Card>
    </div>
  )
}))

})
}, [])
console.log(index)
  return ( 
    <div>
      <Button size="small">Create User</Button>
      <div>
      {data}
      </div>
    </div>
  )
}

export default ListofUser;
