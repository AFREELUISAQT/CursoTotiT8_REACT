import React from 'react';

function TesteStyleInline() {
const styles = {
    color: "yellow",
    backgroundColor: "black",
    fontSize: "4em",

}

    return (
        <div>
            <h1 style={styles}>Probando Style em Const</h1>
            <p style={{ color: "black", backgroundColor: "yellow" }}>...e com método inline</p>
        </div>
    )
}

export default TesteStyleInline