import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";

function App() {
  const jokesComponents = jokesData.map(function (joke) {
    return (
      <Joke
        key={joke.id}
        question={joke.question}
        answer={joke.answer}
        cor={joke.cor}
      />
    );
  });

  return <div>{jokesComponents}</div>;
}

export default App;
