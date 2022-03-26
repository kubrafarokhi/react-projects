import React, { useState } from 'react';
import Star from './Star/Star'
;
const StarComponentContainer = () => {
  const [rating, setRating] = useState(0)
  return (
    <div>
        <div>Rate Me</div>
        <Star rating={rating} onRating={(rate)=>setRating(rate)} />
        <div>Rating {rating}</div>
    </div>
  )
}

export default StarComponentContainer