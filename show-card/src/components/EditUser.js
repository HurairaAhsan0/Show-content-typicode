import React, {useState} from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

function EditUser(props) {


console.log(props)

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
          url: 'https://jsonplaceholder.typicode.com/posts/id',
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
            
            console.log(response);
          });
    }

    return (
        <div>
            
            <Link to="/">
            <button>Back</button>
          </Link>
        <br />

          { UserId !==undefined ?
      (  <input 
            type="number" 
            name="UserId" 
            onChange={UserHandler} 
            placeholder="UserId" 
            value={UserId}/> 
            ):"value is undefined"
                      }

            <br/>
            { id !==undefined ?
           (<input 
            type="number" 
            name="Id" 
            onChange={idHandler} 
            placeholder="Id" 
            value={id}/>
            ):"value is undefined"
           }
            <br/>
            { Title!==undefined ?
           ( <input 
            type="text" 
            name="Title" 
            onChange={titleHandler} 
            placeholder="Title" 
            value={Title}/>
            ):"value is undefined"
           }
            <br/>
            { Description !==undefined ?
           ( <input 
            type="Description" 
            name="Description" 
            onChange={DescriptionHandler} 
            placeholder="Description" 
            value={Description}/>
            ):"value is undefined"
           }
            <br/>
          <Link to="/User/Create">
            <button onClick={submitButton}>Submit User</button>
          </Link>
        </div>
    )
}

export default EditUser;