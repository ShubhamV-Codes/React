import {createContext, useContext, useState} from 'react';

const CountContext = createContext();

function CountContextProvider({children}){
    const[count, setCount]=useState(0);
    return(
        <>
        <CountContext.Provider value = {{count, setCount}}>
            {children}
        </CountContext.Provider>
        </>
    )
}

function Increase (){
    const {setCount} = useContext(CountContext);
    function inc(){
        setCount(c=>c+1);
    }
    return (
        <>
        <button onClick={inc}>Increase</button>       
        </>
    )
}

function Decrease (){
    const {setCount} = useContext(CountContext);
    function dec(){
        setCount(c=>c-1);
    }
    return (
        <>
        <button onClick={dec}>Decrease</button>       
        </>
    )
}

function Value(){
    const {count} = useContext(CountContext);

    return<>
    <span> Here is the Value = {count} </span>
    </>

}

function ContextAPI(){
    return (
        <CountContextProvider>
            <Increase />
            <Decrease />
            <Value />
        </CountContextProvider>
    )
}
export default ContextAPI;