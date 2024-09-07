import { useState } from 'react'
import './App.css'

function App() {
  const [getCelsius, setCelsius] = useState(0)
  const [getFahrenheit, setFahrenheit] = useState(32)

  const handleCelsius = (valor) => {


    console.log(valor)
    setCelsius(valor)

    if (valor == "") {
      setFahrenheit("")
      return
    }

    const formulaFahrenheit = (valor * 1.8) + 32
    setFahrenheit(formulaFahrenheit.toFixed(2))


  }

  const handleFahrenheit = (valor) => {
    setFahrenheit(valor)

    if (valor == "") {
      setCelsius("")
      return
    }

    const formulaCelsius = (valor - 32) / 1.8
    setCelsius(formulaCelsius.toFixed(2))

  }

  return (
    <>
    <div
    className='estilos'
    id='estilos'
    >
      
    
      <h1>Convertidor De Temperaturas</h1>
      <div>
        <label>Ingrese la temperatura en celsius</label>
        <br />
        <input
          className={"celsius"}
          id={"celsius"}
          value={getCelsius}
          onChange={(e) => handleCelsius(e.target.value)}
          type='number'
        />
      </div>

      <div>
        <label>Ingrese la temperatura en Fahrenheit</label>
        <br />
        <input
          className={"fahrenheit"}
          id={"fahrenheit"}
          value={getFahrenheit}
          onChange={(e) => handleFahrenheit(e.target.value)}
          type='number'
        />
      </div>
      </div>


    </>
  )
}

export default App
