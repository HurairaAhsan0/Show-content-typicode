import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Card from './Card';




const AllPosts=()=> {
 const {userid}=useParams();

 const [data,setdata]=useState([])
 
 const block=data.map((val)=>{
    console.log(val.userId)
  return(
    <div key={val.id} className="Card">
   { parseInt(userid)===val.userId ?  
              <Card
             CardContent={<CardContent sx={{borderRadius:"6px"}}>
                  <Typography gutterBottom variant="h8" sx={{fontSize:"22px"}} component="div">
                    userId:{val.userId}
                  </Typography>
                  <Typography gutterBottom variant="body1" sx={{ fontSize:"23px",fontFamily:"serif"}} component="div">
                  {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{fontSize:"14px"}} >
                    Description: {val.body}
                  </Typography>
                </CardContent>}
                                />
 : " "   
  } </div>
  )
})

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url)
      .then((response) => {
        const res = response.data;
        setdata(res)
        console.log(res)
       
      })
  }, [])
  return (
 <div>
   {block}
 </div>
  );
}
export default AllPosts;



