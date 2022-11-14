
import React from 'react'
import "../Styles/App.css"

function Card(props) {
  const { CardContent, CardAction, FormContent } = props;
  return (
    <div style={{backgroundColor:"white",borderRadius:"10px"}}>
      <div>{CardContent}</div>
      <div>{CardAction}</div>
     <div className='Form-Position'>{FormContent}</div>
    </div>
  )
}

export default Card;
