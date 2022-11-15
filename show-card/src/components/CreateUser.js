import React, {useState} from 'react';
import axios from "axios"
import { styled } from '@mui/system';
import "../Styles/App.css";
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';

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

const StyledMultiLineElement = styled('textarea')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height:2;
  padding: 12px;
  border-radius: 12px;
  width:14em;
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

const ButtonComponent = styled('button')({
  color: 'white',
  backgroundColor: '#007FFF',
  textTransform: "uppercase",
  padding: 10,
  borderRadius: 6,
  marginTop:"15px",
  marginLeft:"1.2em",
  borderColor:'#007FFF',

  '&:hover': {
    borderColor: '#FFFFFF',
  }
});
  


function CreateUser() {

  const[UserId,setUserId]=useState("")
  const[id,setid]=useState("")
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
      <div className='Form-content'> 
        <>
        <PersonAddAltSharpIcon  sx={{color:"#007FFF",marginBottom:"50px",fontSize:"60px",marginTop:0}}/>
    <div className='content-center'>
       <label htmlFor="UserId">User ID</label>
       <StyledInputElement  slots={{ input: StyledInputElement }} 
      name="UserId" 
      onChange={UserHandler} 
      placeholder="User Id" 
      value={UserId}
      id="UserId"
      /> 
      </div>
          <br/>
         <div className='content-center'>
          <label htmlFor="Id">ID </label>
         <StyledInputElement slots={{ input: StyledInputElement }}  
          name="Id" 
          onChange={idHandler} 
          placeholder="Id" 
          value={id}
          id="Id"
          />
          </div>
          <br/>
         <div className='content-center'>
          <label htmlFor="title">Title</label> 
         <StyledInputElement slots={{ input: StyledInputElement }} 
          type="text" 
          name="Title" 
          onChange={titleHandler} 
          placeholder="Title" 
          value={Title }
          id="title"
          />
          </div>
          
         <br/>
          {/* <div className='content'> */}
          <label style={{marginRight:"6.4em"}} htmlFor="des">Description</label>
         <StyledMultiLineElement slots={{ input: StyledInputElement }}
          type="Description" 
          name="Description" 
          onChange={DescriptionHandler} 
          placeholder="Description" 
          value={Description}
          id="des"
          />
          {/* </div> */}
          <div className='content-center'>
        <ButtonComponent  onClick={submitButton} slots={{button:ButtonComponent}}  >Submit User</ButtonComponent>
        </div>
          </>
        </div>

       
  )
}

export default CreateUser;