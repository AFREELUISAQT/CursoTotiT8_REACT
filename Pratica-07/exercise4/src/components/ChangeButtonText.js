import React, { useState } from 'react';


function ChangeButtonText () {

    const [textoBotao, setTextoBotao] = useState('Meu primeiro texto')

    const alterarTextoBotao = () => {
        setTextoBotao('Mudei')
    }

    return (
        <button onClick={alterarTextoBotao} >
            {textoBotao}
        </button>
    )

}

export default ChangeButtonText