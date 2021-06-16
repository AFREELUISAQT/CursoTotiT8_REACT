import React from 'react';

function App() {
  return (

    <div style={{ color: "red" }}>

      <p style={{ fontSize: 20 }}>Luisa Quinones Torres</p>

      <div style={{ fontSize: 18, backgroundColor: "yellow" }}>
        <p>Minhas comidas favoritas:</p>
        <ol>
          <li>Lasanha</li>
          <li>Churrasco</li>
          <li>Cachapa</li>
        </ol>
      </div>

      <div style={{ fontSize: 15, backgroundColor: "orange" }}>
        <p>Minhas séries favoritas:</p>
        <ul style={{listStyle:"none"}}>
          <li>O Mentalista</li>
          <li>Friends</li>
          <li>The Big Bang Theory</li>
        </ul>
      </div>

    </div>
  )
}

export default App
