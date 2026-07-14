import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});
document.addEventListener("keydown", (event) => {

    if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }

});
window.addEventListener("blur", () => {
    document.body.style.filter = "blur(20px)";
});

window.addEventListener("focus", () => {
    document.body.style.filter = "none";
});
createRoot(document.getElementById('root')).render(

  

  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
