import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardVal from './CardVal';




const CompleteListOfUser=()=> {
 const {userid}=useParams();

 const [data,setdata]=useState([])
 
 const block=data.map((val)=>{
    console.log(val.userId)
  return(
    <div key={val.id}>
   { parseInt(userid)===val.userId ?
    <div>
       <Box>
             <Card>
              <CardVal
             CardContent={<CardContent>
                  <Typography gutterBottom variant="h8" component="div">
                    userId:{val.userId}
                  </Typography>
                  <Typography gutterBottom variant="h8" component="div">
                    Id:{val.id}
                  </Typography>
                  <Typography gutterBottom variant="body1" sx={{ fontFamily:'sans-serif', FontSize: 10,}} component="div">
                  Title: {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary" >
                    Description: {val.body}
                  </Typography>
                </CardContent>}
                                />
                                </Card>
                              </Box>
   </div>
 : ""   
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
export default CompleteListOfUser;



