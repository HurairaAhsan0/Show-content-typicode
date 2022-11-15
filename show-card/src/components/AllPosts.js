import React from 'react';
import { useEffect,useState,useRef } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';




const AllPosts=()=> {
 const {userid,Name}=useParams();
 const [Posts,setPosts]=useState([])
 const [Comments,setComments]=useState([])
 const commentId = useRef([])
 
 const block=Posts.map((val)=>{
  return(
    <div key={val.id} className="Card">
   { parseInt(userid)===val.userId ?  
            <div>
             <CardContent sx={{borderRadius:"6px",bgcolor:"white"}}>
                  <Typography gutterBottom variant="h8" sx={{fontSize:"22px"}} component="div">
                    Author:{Name}
                  </Typography>
                  <Typography gutterBottom variant="body1" sx={{ fontSize:"23px",fontFamily:"serif"}} component="div">
                  {val.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{fontSize:"14px"}} >
                    Description: {val.body}
                  </Typography>
                </CardContent>
                <CardActions sx={{borderRadius:"6px",bgcolor:"white"}}>
                    <Link className='underline' to={`/User/Comments/${val.userId}/${commentId}`}>
                  <Button>Comments</Button>
                  </Link>
                  <Link to={`/User/Edit/${Name}/${val.title.toUpperCase()}/${val.body}`} className="underline">
                  <Button>Edit</Button>
                  </Link>
                </CardActions>
            </div>
 : " "   
  } </div>
  )
})

 Comments.map((val)=>{
  commentId.current=val.email;
  return(
  <div>
  </div>
  )
 })

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url)
      .then((response) => {
        const res = response.data;
        setPosts(res)
      })
    const comment = "https://jsonplaceholder.typicode.com/comments";
    axios.get(comment)
      .then((response) => {
        const result = response.data;
        setComments(result)
      })
    }, [])
  return (
 <div>
   {block}
 </div>
  );
}
export default AllPosts;



