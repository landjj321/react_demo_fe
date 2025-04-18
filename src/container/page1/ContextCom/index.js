import React, { Component } from 'react';
import { withDict } from '../../../contexts/DictContext.js'

class ContextCom extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        console.log(this.props.c, this.props.b, 'contextCom')
    }
    render() {
        return (
            <div className="contextCom">
                Context
                {this.props.a}
                <button onClick={() => this.props.history.push('/page1/withrouter')}>aa</button>
            </div>
        );
    }
}
export default withDict(ContextCom);