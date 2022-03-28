import React from 'react'
import './items.css';

const Items = ({items, editItem ,deleteItem}) => {
  return (
    <div className='center-items'>
       {
           items?.map((item, index)=>{
               return (
                <div className="bb" key={index}>
                    <h3 className='text-input'>{item}</h3>
                    <button onClick={()=>editItem(index)}>Edit</button>
                    <button onClick={()=>deleteItem(index)}>Remove</button>
                </div>
               )
           })
       } 
       
    </div>
  )
}

export default Items