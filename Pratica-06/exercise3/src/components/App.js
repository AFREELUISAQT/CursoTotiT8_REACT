import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count <= 0) {
      alert("O valor não pode passar negativo");
      console.error("O valor não pode passar negativo");
      return;
    }

    setCount(count - 1);
  };

  return (
    <div>
      <div>
        <h1
          style={{
            display: "flex",
            justifyContent: "space-around",
            color: "yellow",
            fontSize: 60,
            textAlign: "center",
          }}
        >
          Acrescentando e Decrementando Valores
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: 80,
            color: "green",
            backgroundColor: "black",
            fontSize: 40,
            borderRadius: 20,
          }}
          onClick={increase}
        >
          Click (+)
        </button>
        <p style={{ color: "blue", fontSize: 60, fontWeight: "bold" }}>
          Seu valor: {count}
        </p>
        <button
          style={{
            height: 80,
            color: "red",
            backgroundColor: "black",
            fontSize: 40,
            borderRadius: 20,
          }}
          onClick={decrease}
        >
          Click (-)
        </button>
      </div>
    </div>
  );
}

export default App;
