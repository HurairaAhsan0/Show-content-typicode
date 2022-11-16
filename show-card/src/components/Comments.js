import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { useParams } from 'react-router-dom';

const Comments = () => {
  const [Comment,setComment]=useState([])
  const {Id}=useParams();

  console.log(Id)

  useEffect(() => {
    const comments = "https://jsonplaceholder.typicode.com/comments";
    axios.get(comments)
    .then((response) => {
      const result = response.data;
      setComment(result)
      
    })
  }, [])
  const comments=Comment.map((comm)=>{
  return (
    <div  key={comm.id} id="comments">
      { parseInt(Id)===comm.postId ?
    (<Paper style={{ padding: "40px 20px",margin:"1.5em",borderRadius:"10px"}}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Grid>
        <Grid justifyContent="flex-start" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{comm.name.toUpperCase()}</h4>
          <p style={{ textAlign: "left" }}>
           {comm.body}
          </p>
        </Grid>
      </Grid>
      <Divider variant="fullWidth"/>
      </Paper>):" "
  }
    </div>
  )
})


return(
  <div>
    <h1>Comments</h1>
    {comments}
  </div>
)
}

export default Comments;
