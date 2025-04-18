import React, { Component } from 'react';


const Com = (props) => {

    const { a, b, c } = props;

    console.log(a, b, c)

    return (<div>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <h1>{c}</h1>
    </div>)
}

// eslint-disable-next-line react/no-multi-comp
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: 2,
            c: 3
        }
    }
    render() {
        const { a, b, c } = this.state;
        return (
            <div>
                <Com {...{ a, b, c }} />
            </div>
        );
    }
}

export default index;