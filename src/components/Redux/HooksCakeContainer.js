import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyCake} from '../../redux/cakes/cakesActions';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numberofCakes);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>useSelector Number of Cakes:{numOfCakes}</h1>
        <button onClick={()=>dispatch(buyCake())}>Click Me</button>
    </div>
  )
}

export default HooksCakeContainer