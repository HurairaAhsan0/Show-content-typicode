import React from 'react'
import "../Styles/App.css"

function CardVal(props) {
  const { CardContent, CardAction,EditContent } = props;
  return (
    <div className='container'>
      <div className='card-content'>{CardContent} </div>
      <div className='card-action'>{CardAction}</div>
      <div className='Edit-content'>{EditContent}</div>
    </div>
  )
}

export default CardVal;


