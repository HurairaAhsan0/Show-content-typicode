import React, {useState} from 'react';
import axios from "axios"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';
import CardVal from './CardVal';
import "../Styles/App.css"

function CreateUser() {



  const[UserId,setUserId]=useState(0)
  const[id,setid]=useState(0)
  const[Title,setTitle]=useState("")
  const[Description,setDescription]=useState("")
   

    const UserHandler = (e) =>{
        setUserId( e.target.value )
    }
    const idHandler = (e) =>{
        setid( e.target.value )
    }
    const titleHandler = (e) =>{
        setTitle( e.target.value )
    }
    const DescriptionHandler = (e) =>{
        setDescription( e.target.value )
    }

    const submitButton = () =>{
        console.log(Description)
        console.log(Title)
        console.log(id)
        console.log(UserId)
        const postRequest = {
          url: `https://jsonplaceholder.typicode.com/posts`,
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: {
            UserId: UserId,
            id: id,
            title:Title,
            description:Description
          }
        };
        axios(postRequest)
          .then(response => {
            
            console.log(response);
          });
    }

    return (
      <CardVal EditContent={
    <div>
    <div className='content-center'>
       <label htmlFor="UserId">User ID:</label>
       <input 
      name="UserId" 
      onChange={UserHandler} 
      placeholder="User Id" 
      value={UserId}
      id="UserId"
      /> 
      </div>
          <br/>
         <div className='content-center'>
          <label htmlFor="Id">ID:  </label>
         <input  
          name="Id" 
          onChange={idHandler} 
          placeholder="Id" 
          value={id}
          id="Id"
          />
          </div>
          <br/>
         <div className='content-center'>
          <label htmlFor="title">Title:</label> 
         <TextareaAutosize 
          type="text" 
          name="Title" 
          onChange={titleHandler} 
          placeholder="Title" 
          value={Title}
          id="title"
          />
          </div>
         <br/>
          <div className='content-center'>
          <label htmlFor="des">Description:</label>
         <TextareaAutosize 
          type="Description" 
          name="Description" 
          onChange={DescriptionHandler} 
          placeholder="Description" 
          value={Description}
          id="des"
          />
          </div>
          <div className='btn'>
          <Button  onClick={submitButton}>Submit User</Button>
          </div>
      </div>
        }
        />

       
  )
}

export default CreateUser;