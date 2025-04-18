import React, { Component } from 'react'
import {Input,Icon} from "antd"
import  "./style.less"
import { observer, inject } from 'mobx-react';


@inject("store")
@observer
export default class todoList extends Component {

    state={
        txt:'',
    }

    componentDidMount(){
        const {store} =  this.props;
        store.initTodos();
        this.setState({ txt:'' })
    }

    handleChange(event){
        this.setState({
            txt:event.target.value
        })
    }

    handleKeyUp(e){
        if(e.keyCode ==13){
            this.props.store.addTodo(this.state.txt)
            this.setState({
                txt:''
            })
        }


        this.setState({

        })
        
    }

    render() {

        const {store}  = this.props;
        return (
            <div className="todoList">

                <div style={{ marginBottom: 16 }}>
                    <Input 
                        value={this.state.txt}
                        placeholder="请输入你要做的事情"
                        onKeyUp = {(e)=>this.handleKeyUp(e)}
                        onChange= {(event)=>this.handleChange(event)}
                        addonAfter={<span>{store.todosCount}</span>} 
                        defaultValue="mysite" />
                </div>
                { 
                    this.props.store.todos.map((item,index)=>{
                        return (
                            <div key={index}>
                                {item}
                            </div>
                        )
                    })
                }

                
            </div>
        )
    }
}


