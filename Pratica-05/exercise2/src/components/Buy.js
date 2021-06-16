import React from 'react';

function Buy(props) {
    return (

        <div>
            <ul>
                <li>Comprar: {props.name} - Quantidade: {props.quantity}</li>
            </ul>
            
        </div>
    )
}

export default Buy