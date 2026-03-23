import {useState} from 'react';

// Custom Hook 
function useCounter(){
    const[count, setCount] =useState(0);

    function increaseCount(){
        setCount(count=>count+1);
    }
    function decreaseCount(){
        setCount(count=>count-1);
    }
    
    return{
        count:count, 
        increaseCount:increaseCount,
        decreaseCount:decreaseCount
    }
}

function Counter(){
     const{count, increaseCount, decreaseCount}=useCounter();
    return(
        <div>
        <button onClick={increaseCount} style ={{backgroundColor:"#2fe635", borderRadius:"20px", margin:"20px",cursor:"pointer"}}>Increase </button>
        <button onClick={decreaseCount} style ={{backgroundColor:"#ff3a3a", borderRadius:"20px", margin:"20px", cursor:"pointer"}}>Decrease </button>
        <span style={{backgroundColor:"#e7d9f5", borderRadius:"5px", padding:"10px", margin:"20px"}}>Value: {count}
        </span>
        </div>
    )
    
}

function customHookOne(){
    return(
        <>
        <h2 style ={{color:"#0d2c88"}}>1. Custom Counter Hook for Clean Code [CustomHookOne.jsx]</h2>
        <Counter />
        <Counter />
        <Counter />
        </>
    )
   
}

export default customHookOne ;