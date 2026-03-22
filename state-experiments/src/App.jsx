import {useState} from 'react';

function App() {

  return (
    <div>
      <LightBulb />
    </div>
  )
}

function LightBulb(){
   const[isOn , setIsOn] = useState(false);
  return (
    <>
    <BulbState  isOn = {isOn}/>
    <ToggleBulbState isOn = {isOn} setIsOn = {setIsOn} />
    <Theory />
    </>
  )
}

function BulbState({isOn}){
  return (
    <>
    <div className = "bulb-state" style ={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh'}}>
    {isOn ? <img src="https://static.vecteezy.com/system/resources/previews/026/797/983/original/led-bulbs-transparent-png.png" style={{width: '100px', height: '100px'}} /> : <img src = "https://static.vecteezy.com/system/resources/previews/024/734/284/large_2x/cartoon-illustration-light-bulb-symbol-of-idea-new-solution-and-creativity-graphic-design-with-contour-clip-art-print-for-signboard-showcase-greeting-card-isolated-on-white-background-vector.jpg" style={{width: '100px', height: '100px'}} />} 
    </div>
    </>
  )
}

function ToggleBulbState({isOn, setIsOn}){
  return (
    <>
    <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
    <button onClick={() => setIsOn(!isOn)} style={{backgroundColor:"#acff7c" ,borderRadius: "100%", height:"50px", cursor:"pointer"}}>Switch</button>
    </div>
    </>
  )
}

function Theory(){
  return(
    <div style ={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh'}}>
      <p style={{fontSize: '18px', color: '#25301e'}}>
        In this example, we have a LightBulb component that maintains the state of whether the bulb is on or off using the useState hook. The BulbState component displays the appropriate image based on the state, while the ToggleBulbState component provides a button to toggle the state. This demonstrates how we can manage and update state in a React application.
      <b>Here, State Variable is defined in LCA(Least Common Ancestor) of the Component LighBulb and ToggleBulbState because both function components need same state variable to perform their operations, So We Change state varibles location to the LCA LightBulb and send as Props to the Children and then they can access it and do their operations</b></p>
    </div>
  )
}

export default App;
