import React from 'react'
import axios from "axios"

const ListofUser = () => {
  const  url="https://jsonplaceholder.typicode.com/posts";
  const response=axios.get(url)
  .then(()=>{console.log({response})})
  .catch((err)=>{console.log(err)})
  return (
    <div>
 
    </div>
  )
}

export default ListofUser
