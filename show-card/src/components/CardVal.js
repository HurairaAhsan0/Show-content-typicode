
import React from 'react'
import "../Styles/App.css"

function CardVal(props) {
  const { CardContent, CardAction,EditContent } = props;
  return (
    <div style={{backgroundColor:"#E8E8E8",borderRadius:"6px",}}> 
    <div className='card-content' style={{backgroundColor:"#E8E8E8",borderRadius:"12px"}}>{CardContent}</div>
      <div className='card-action' style={{backgroundColor:"#E8E8E8"}}>{CardAction}</div>
       <div className='Edit-content' style={{backGround:"#E8E8E8",borderRadius:"10px",marginTop:"8px"}}>{EditContent}</div>
    </div>
  )
}

export default CardVal;
