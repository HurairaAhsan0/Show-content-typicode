import React, { useState, useEffect } from 'react';
import axios from "axios"
import { useParams } from "react-router-dom"
import { styled } from '@mui/system';
import "../Styles/App.css"
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import PersonIcon from '@mui/icons-material/Person';

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
  width: 400px;
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
  line-height: 3;
  padding: 12px;
  border-radius: 12px;
  width:14em;
 margin-left:55px;
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
  marginTop: "15px",
  marginLeft: "1.2em",
  borderColor: '#007FFF',

  '&:hover': {
    borderColor: '#FFFFFF',
  }
});





function EditUser() {

  const { Name,title,description } = useParams();

 
  const [id, setid] = useState("")
  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")


  useEffect(() => {

    setid(Name);
    setTitle(title);
    setDescription(description);
    
  }, [Name,title,description])



 
  const idHandler = (e) => {
    setid(e.target.value)
  }
  const titleHandler = (e) => {
    setTitle(e.target.value)
  }
  const DescriptionHandler = (e) => {
    setDescription(e.target.value)
  }

  const submitButton = () => {
    const postRequest = {
      url: `https://jsonplaceholder.typicode.com/posts/${parseInt(id)}`,
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        id: id,
        title: Title,
        description: Description
      }
    };
    axios(postRequest)
      .then(response => {
        console.log(response.status)

      });
  }

  return (
    <div className='Form-content'>
    <PersonIcon sx={{ color: "#007FFF", marginBottom: "8px", fontSize: "80px" }} />      
    <ModeEditTwoToneIcon sx={{ color: "#007FFF", fontSize: "30px" }} />      
          <div className='content-center'>
          <label htmlFor="Id">Author</label>
          <StyledInputElement slots={{ input: StyledInputElement }}
            name="Id"
            onChange={idHandler}
            placeholder="Id"
            value={Name}
            id="Id"
            />
           </div> 
         
          <div className='content-center'>
          <label htmlFor="Title">Title</label>
          <StyledInputElement slots={{ input: StyledInputElement }}
            type="text"
            name="Title"
            onChange={titleHandler}
            placeholder="Title"
            value={Title}
            id="title"
            />
          </div> 

          
          {/* <div className='content' >  */}
          <label style={{marginRight:"5em",paddingBottom:"3px"}} htmlFor="Description">Description</label>
          <StyledMultiLineElement 
            type="Description"
            name="Description"
            onChange={DescriptionHandler}
            placeholder="Description"
            value={Description}
            id="des"
            />
           {/* </div>  */}
          <ButtonComponent onClick={submitButton} slots={{ button: ButtonComponent }}  >Submit</ButtonComponent>
       
     
    </div>


  )
}

export default EditUser;