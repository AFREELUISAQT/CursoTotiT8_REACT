import React, { useState } from 'react';

function MyFirstInput() {

    const [textoLivre, setTextoLivre] = useState('')
    const handleName = (event) => {
        setTextoLivre(event.target.value)
    }

    return (
        <div>
            <form>
                <label>
                    My First Input:_
                 <input
                        type="text"
                        value={textoLivre}
                        onChange={(event) => handleName(event)} />
                </label>
                <h6>Retornando o digitado:</h6>
                <p>{textoLivre}</p>
            </form>
        </div>
    )
}

export default MyFirstInput