import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Children from "./Children&Props.jsx"
import Clock from "./clock.jsx"
import Apple from "./key.jsx";
createRoot(document.getElementById('root')).render(
     <>
    <App />
    <Clock />
    <Apple key={1} title="GO and Hit the GYM" done={true} />
    <Apple key={2} title="GO and Eat Healthy" done={false} />
    <Children title="User Info" >
        <p> Name: Shubham Vishwakarma</p>
    </Children> 
    </>
  
)
