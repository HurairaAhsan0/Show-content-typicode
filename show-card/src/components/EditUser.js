import React, {useState,useEffect} from 'react';
import axios from "axios"
import {useParams} from "react-router-dom"
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button } from '@material-ui/core';
import CardVal from './CardVal';
import { styled } from '@mui/system';
import "../Styles/App.css"

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};


const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
`,
);
  

function EditUser() {

const {title,description,userid,iid}=useParams();
console.log(title)
console.log(description)

  const[UserId,setUserId]=useState("")
  const[id,setid]=useState("")
  const[Title,setTitle]=useState("")
  const[Description,setDescription]=useState("")
  
    
useEffect(() => {
  setUserId(userid);
  setid(iid);

}, [userid,iid])

    const UserHandler = (e) =>{
        setUserId( e.target.value)
    }
    const idHandler = (e) =>{
        setid(e.target.value )
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
          url: `https://jsonplaceholder.typicode.com/posts/${parseInt(id)}`,
          method: 'PUT',
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
            console.log(response)

          });
    }

    return (
        <CardVal EditContent={ 
      <div style={{marginTop:"10%"}}>
      <div className='content-center'>
         <label htmlFor="UserId">User ID</label>
         <input  slots={{ input: StyledInputElement }} style={{borderRadius:"8px"}} 
        name="UserId" 
        onChange={UserHandler} 
        placeholder="User Id" 
        value={userid && UserId}
        id="UserId"
        /> 
        </div>
            <br/>
           <div className='content-center'>
            <label htmlFor="Id">ID  </label>
           <input slots={{ input: StyledInputElement }} style={{borderRadius:"8px"}} 
            name="Id" 
            onChange={idHandler} 
            placeholder="Id" 
            value={iid && id}
            id="Id"
            />
            </div>
            <br/>
           <div className='content-center'>
            <label htmlFor="title">Title</label> 
           <TextareaAutosize slots={{ input: StyledInputElement }} style={{height:40,borderRadius:"8px"}} 
            type="text" 
            name="Title" 
            onChange={titleHandler} 
            placeholder="Title" 
            value={title && Title }
            id="title"
            />
            </div>
            
           <br/>
            <div className='content-center'>
            <label htmlFor="des">Description</label>
           <TextareaAutosize slots={{ input: StyledInputElement }} style={{height:40,borderRadius:"8px"}}
            type="Description" 
            name="Description" 
            onChange={DescriptionHandler} 
            placeholder="Description" 
            value={description && Description}
            id="des"
            />
            </div>
            <div style={{margin:"0.7em"}}>
          <Button  onClick={submitButton} style={{background:"black",border:"1px solid black",color:"white",borderRadius:"8px",width:"9em",marginLeft:"4em"}}>Submit User</Button>
          </div>
        </div>
          }
          />

         
    )
}

export default EditUser;