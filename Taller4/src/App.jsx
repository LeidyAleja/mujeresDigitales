import React, { useState } from "react"
import "./App.css"
import axios from "axios";


function App() {
  const [consejo, setConsejos] = useState("Presiona el dado para recibir un consejo nuevo");

  const cambiarConsejos = async () => {
    const advices = await axios.get('https://api.adviceslip.com/advice');
    const slip = advices?.data?.slip?.advice;
    setConsejos(slip);
  };

  return (
    <div className="container">
      <div className="advice-box">
        <h1>Advice #117</h1>
        <p>{consejo}</p>
        <img src="../src/pattern-divider-desktop.svg" alt="divider" className="divider-desktop" />
        <img src="../src/pattern-divider-mobile.svg" alt="divider" className="divider-mobile" />
        <button onClick={cambiarConsejos} className="dado">
          <img src="../src/icon-dice.svg" alt="dado" />
        </button>
      </div>
    </div>
  );
}

export default App;

