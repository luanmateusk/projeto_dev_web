import React from 'react'


interface IContainer {
    children: React.ReactElement | React.ReactElement[];
}

const Container: React.FC<IContainer> = (props) => {
    return (
        <div className="border">
            {
                props.children
            }
        </div>
    )
}

export default Container

