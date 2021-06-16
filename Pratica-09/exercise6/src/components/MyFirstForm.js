import React, { useState } from 'react';


function handleClick() {
    document.getElementById("form1").clear();
}


function MyFirstForm() {

    const [nome, setNome] = useState('');
    const handleName = (event) => {
        setNome(event.target.value)
    }

    const [idade, setIdade] = useState(0);
    const handleIdade = (event) => {

        if (idade < 0) {
            alert('Não é possível preencher idade negativa')
            console.log('Não é possível preencher idade negativa')
            return
        }

        setIdade(event.target.value)
    }

    return (
        <div>

            <form id="form1">

                <label> Nome: </label>
                <input
                    type="text"
                    value={nome}
                    placeholder="Preencha seu nome"
                    onChange={(event) => handleName(event)} />

                <label> Idade: </label>
                <input
                    type="number"
                    // min="0"
                    value={idade}
                    onChange={(event) => handleIdade(event)} />

                <p>Meu nome é: {nome}, e tenho: {idade} anos. </p>

                <button
                    style={{
                        color: "yellow",
                        backgroundColor: "black",
                        fontSize: 40,
                        borderRadius: 20
                    }}
                    onClick={handleClick}>
                    Limpar !
                </button>

            </form>

        </div>
    )
}

export default MyFirstForm