import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CommentIcon from '@mui/icons-material/Comment';
import Badge from '@material-ui/core/Badge';
import EditIcon from '@mui/icons-material/Edit';




const AllPosts=()=> {
 const {userid,Name}=useParams();
 const [Posts,setPosts]=useState([])

 
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
                <CardActions sx={{borderRadius:"6px",bgcolor:"white",justifyContent:"flex-end",borderColor:"#007FFF"}}>
                    <Link className='underline' to={`/User/Comments/${val.id}`}>
                    <Badge badgeContent={5}>
                   <CommentIcon sx={{color:"#007FFF",fontSize:"30px",paddingRight:"4px"}} />
                   </Badge>
                  </Link>
                  <Link to={`/User/Edit/${Name}/${val.title.toUpperCase()}/${val.body}`} className="underline">
                  <EditIcon sx={{color:"#007FFF",fontSize:"30px",paddingRight:"4px"}} />
                  </Link>
                </CardActions >
            </div>
 : " "   
  } </div>
  )
})



  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios.get(url)
      .then((response) => {
        const res = response.data;
        setPosts(res)
      })
    }, [])
  return (
 <div>
   {block}
 </div>
  );
}
export default AllPosts;



