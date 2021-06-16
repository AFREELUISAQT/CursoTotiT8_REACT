import React from 'react';

import Buy from './Buy';
import buyList from './buyList';


function App() {

  const buyComponents = buyList.map(function (buy) {
    return (
      <Buy key={buy.id} name={buy.name} quantity={buy.quantity} />
    )
  })

  return <div>{buyComponents}</div>
}

export default App