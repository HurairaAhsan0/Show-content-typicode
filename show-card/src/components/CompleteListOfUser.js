import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const CompleteListOfUser=()=> {
 const {userid}=useParams();
 console.log(userid)
 const [data,setdata]=useState([])
 
 const block=data.map((val)=>{
    console.log(val.userId)
  return(
    <div key={val.id}>
   { userid===val.title ?
    <div>
   <h3>userId:{val.userId}</h3>
   <h3>Id:{val.id}</h3>
   <h3>title:{val.title}</h3>
   <h3>Description:{val.body}</h3>
   </div>
    : " "  }
    </div>
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
