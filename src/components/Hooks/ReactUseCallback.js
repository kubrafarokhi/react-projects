import React, { useCallback } from 'react'

const Title = () =>{
    console.log('Rendering Title')
    return (
        <div>Header Title</div>
    )
}
export default React.memo(Title)

const Count = () =>{
    console.log('Rendering Count')
    return (
        <div>Header Title</div>
    )
}
export default React.memo(Count)

const Button = ({handleAge}) =>{
    console.log('Rendering Button')
    return (
        <div>Header Title</div>
    )
}
export default React.memo(Button)

function ReactUseCallback() {
    const [age, setAge] = useState(10);
    const [salary, setSalary] = useState(1000);

    const handleAge = useCallback(()=>{
        setAge(age + 1)
    },[age])

    const handleSalary = useCallback(()=>{
        setSalary(salary + 1000)
    }, [salary])
    
  return (
    <div>
        <Title/>
        <Count age='Age' count={age}/>
        <Button handleAge={handleAge}>Increment Age</Button>
        <Count text='Salary' count={salary}/>
        <Button handleSalary={handleSalary}>Increment Salary</Button>
    </div>
  )
}

export default ReactUseCallback