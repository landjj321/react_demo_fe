import React from 'react';

class Comp extends React.Component {

    constructor(props){
        super(props);
    }

    generateDom = () => {

        const children = [];
        for (let i = 0; i < 20000; i++) {
            children.push(<div key={i}>{i}</div>)
        }

        // return children;

        // children = await new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(children);
        //     }, 2000)
        // })

        // console.log(children);
        return children;
    }


    render() {
        return (
            <div>
                <h1>comp 组件</h1>

                {this.generateDom()}

            </div>
        )
    }

}

export default Comp;