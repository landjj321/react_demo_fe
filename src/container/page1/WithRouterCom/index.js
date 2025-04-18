import React, { Component } from 'react';
class WithRouterCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [1, 2, 3]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.state.arr.push(1)
            this.setState({ arr: this.state.arr })

        }, 1000)
    }

    render() {

        return (
            <div>
                <h2>22222</h2>
                {this.state.arr.map((item, index) => <p key={index}>{item}</p>)}
                {/* <FancyButton>123</FancyButton> */}
            </div>
        );
    }
}

export default WithRouterCom;