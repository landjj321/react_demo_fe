
import React, { Component } from 'react';
import FancyButton from "../../../component/FancyButton"

class RefCom extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.ref  = React.createRef()
    }

    handleClick(){
        console.log(this.ref.current)
        
    }

    render() { 
        return (<div>

            <div className="wrap" onClick={()=>this.handleClick()}>
                <FancyButton ref={this.ref}>123</FancyButton>
            </div>
        </div>);
    }
}
 
export default RefCom;