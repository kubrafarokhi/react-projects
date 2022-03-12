import React from 'react'
import './items.css';

const Items = ({items, deleteItem}) => {
  return (
    <div className='center-items'>
       {
           items?.map((item, index)=>{
               return (
                <div className="bb" key={index}>
                    <h3 className='text-input'>{item}</h3>
                    <button onClick={()=>deleteItem(index)}>Remove</button>
                </div>
               )
           })
       } 
       
    </div>
  )
}

export default Items