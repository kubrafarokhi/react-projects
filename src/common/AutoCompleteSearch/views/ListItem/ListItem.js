import React from 'react';
import './list.css';

function ListItem({name}) {
  return (
    <li className='list-item'>
      {name}
    </li>
  )
}

export default ListItem