import {useState, useEffect} from 'react';



function Counter(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        setInterval(()=>{
            setCount(c=>c+1)
        },3000)
    },[])
    return(<>
        <CurrentCount count={count} />
        <Increase setCount={setCount} />
        <Decrease />
    </>)
}

function Increase({setCount}){
    const increment = () => {
        setCount(c=>c+1);
    }
    return(
        <>
        <button onClick={increment}> Increment </button>
        </>
    )
}
function Decrease(){
    
    return(
        <>
        <h1> This is the Decrease Function and this is not getting any prop from so it could not be rerendered every time</h1>
        </>
    )
}

function CurrentCount({count}){
    return(
        <>
        <h1> The Current Count is {count} </h1>
        </>
    )
}

function Memoized(){
    return <Counter />
}
export default Memoized;