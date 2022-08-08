import React from 'react';

function Button(props) {
    return (
        <button
            style={{
                color: props.color,
                backgroundColor: props.bgColor,
                borderRadius: props.borderRadius
            }}
            className={"p-3 hover:drop-shadow-xl"}
        >{props.text}</button>
    );
}

export default Button;
