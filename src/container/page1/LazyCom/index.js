import React, { Component, Suspense, lazy } from 'react';
// import Comp from './comp.js';

const Comp = lazy(() => import("./comp.js"));


console.log(Comp);

const Com = (props) => {
    const { a, b, c } = props;

    return (<div>
        <h1>{a}</h1>
        <h1>{b}</h1>
        <h1>{c}</h1>
    </div>)
}

// eslint-disable-next-line react/no-multi-comp
class LazyCom extends Component {
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
                <Suspense fallback={<div>Loading...</div>}>
                    <Comp />
                </Suspense>
            </div>
        );
    }
}

export default LazyCom;