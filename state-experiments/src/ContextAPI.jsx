import {useState, createContext, useContext} from 'react';

// ContextAPI Initializing
const BulbContext = createContext();


// Wrap Our Context Provider

function BulbProvider({children}){
    const [bulbOn, setBulbOn]=useState(true);
    return (
    <BulbContext.Provider value={{bulbOn,setBulbOn}}>
      {children}
    </BulbContext.Provider>

)}



function ContextAPI (){

    return(
      <> 
       {/* ContextAPI-Provider */}
       <BulbProvider>
        <Light />
        </BulbProvider>
      </>
    )
}

function Light(){
    return (
    <>
      <LightBulb />
      <LightSwitch />
    </>
    )
}

function LightBulb(){
    //Destructing Context 
    const {bulbOn}=useContext(BulbContext);
    return(
        <>
        {bulbOn ? "Bulb is On" : "Bulb is switched off"}
        </>
    )
}

function LightSwitch(){
    const {bulbOn, setBulbOn}= useContext(BulbContext);
    function Toggle(){
        setBulbOn(!bulbOn);
    }
    return (
        <>
        <button onClick = {Toggle}> Toggle the Bulb </button>
        </>
    )
}

export default ContextAPI ;