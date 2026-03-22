import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ContextAPI from "./ContextAPI.jsx";

createRoot(document.getElementById('root')).render(
    <>
      <App />
      <ContextAPI />
    </>
)
