import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import Card from './Card';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/system';

const ButtonComponent = styled(Button)({
  color: 'white',
  backgroundColor: '#007FFF',
  padding: 8,
  borderRadius: 4,

  '&:hover': {
    backgroundColor: '#007FFF',
  }
});

export const ListofUser = (props) => {

  const [Values, setValues] = useState([])
  const [UserValue, setUserValue] = useState([])


  const blocked = Values.map((w, i) => {
    return (
      <div key={w.id}  >
        {w.id === 1 || w.id === 11 || w.id === 21 || w.id === 31 || w.id === 41 || w.id === 51 || w.id === 61
          || w.id === 71 || w.id === 81 || w.id === 91 ?
          (
            <div className='Card'>
              <Card
                CardContent={<CardContent>
                  {UserValue.map((user) => {
                    return (
                      <div key={user.id}>
                        {user.id === w.userId ? (<Typography gutterBottom sx={{ fontSize: "20px", color: "black" }} variant="h8" component="div" >
                          Author: {user.name}
                        </Typography>) : " "}
                      </div>)
                  })}
                  <Typography gutterBottom variant="body1" sx={{ fontFamily: 'serif', fontSize: "22px", color: "black" }} component="div">
                    {w.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ fontSize: "14px", color: "black" }} >
                    Description: {w.body}
                  </Typography>
                </CardContent>}
                CardAction={<CardActions sx={{ bgcolor: "white", justifyContent: "end",borderRadius:"6px" }} >
                  <Link to={`/User/Edit/${w.id}`} className="underline">
                    <ButtonComponent>
                      Edit
                      <EditIcon/>
                    </ButtonComponent>
                  </Link>
                  <Link to={`/User/List/${w.userId}`} className="underline">
                    <ButtonComponent>Info</ButtonComponent>
                  </Link>
                </CardActions>}
              />
            </div>
          ) : " "}
      </div>
    )
  })





  useEffect(() => {
    const UserRequest = async () => {

      const url = "https://jsonplaceholder.typicode.com/posts";
      await axios.get(url)
        .then((response) => {
          const res = response.data;
          setValues(res);
        })
      // user info request
      await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((result) => {
          setUserValue(result.data)
        })
    }
    UserRequest();
  }, [])
  return (

    <div>
      {blocked}
    </div>

  )
}

export default ListofUser;
