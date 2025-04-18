import React, { Component } from 'react';


const FancyButton = React.forwardRef((props, ref) => {
    return (
        <div>
            <button onClick={props.fnHandle && props.fnHandle()}
                ref={ref}
            >
                {props.children}
            </button>
        </div>
    )
})

export default FancyButton