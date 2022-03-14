import React, { useState } from 'react'

const HooksUseState = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(preCount => preCount + 1);
    }
  return (
    <div>
        <button onClick={()=> setCount(count + 1)}>Click {count}</button> 
        <button onClick={incrementCount}>Click {count}</button>
    </div>
  )
}

export default HooksUseState;


// useState with objects
const HooksUseStateWithObjects = () =>{
    const [user, setUser] = useState({firstName:'', lastName:''});
    return (
        <div>
            <input type="text" value={user.firstName} onChange={(e)=> setUser({...user, firstName: e.target.value})}/>
            <input type="text" value={user.lastName} onChange={(e)=> setUser({...user, lastName: e.target.value})}/>
            <h2>firstName :{user.firstName}</h2>
            <h2>lastName: {user.lastName}</h2>
            <h2>{JSON.stringify(user)}</h2>
        </div>
    )
}
// useState with arrays
const HooksUseStateWithArrays = () => {
    const [items, setItems] = useState([]);

    const addItem = () =>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <button onClick={addItem}>Add Items</button>
            <ul>
                {items & items.map((item, i)=>{
                    return <li key={i}>{item.name}</li>
                })}
            </ul>
        </div>
    )
}