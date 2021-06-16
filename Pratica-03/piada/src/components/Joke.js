import React from "react";

function Joke(props) {
  return (
    <div>
      <h3>Pergunta: {props.question}</h3>
      <h3>Resposta: {props.answer}</h3>
      <h3>Cor Favorita: {props.cor}</h3>

      <hr />
    </div>
  );
}

export default Joke;
