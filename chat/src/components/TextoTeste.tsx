import React from 'react'

interface ITextoTeste {
    text: string
}

const TextoTeste: React.FC<ITextoTeste> = (props) => {
    return (
        <h1 className="text-3xl font-bold underline">
            {props.text}
        </h1>
    )
}

export default TextoTeste