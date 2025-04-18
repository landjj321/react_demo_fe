import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Icon from "../Icon"

import "./style.less"
export default class Slide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isClose: true,
        }
    }

    toggle = () => {
        this.setState({
            isClose: !this.state.isClose
        });
    };

    render() {
        return (
            <div className={this.state.isClose ? 'slide' : 'slide toggled'}>
                <div className={'nav'}>
                    <button className={this.state.isClose ? 'close is-closed' : 'close is-open'} onClick={() => this.toggle()}>
                        <span className="top"></span>
                        <span className="middle"></span>
                        <span className="bottom"></span>
                    </button>


                    <ul className="sidebar-nav">
                        {
                            this.props.navs.map((item, index) => {
                                return (
                                    <Link to={item.url} key={index} >
                                        <li className="sidebar-brand" style={{ paddingLeft: this.state.isClose ? '10px' : '' }}>
                                            <Icon iconName={item.icon} className="icon" style={{ 'width': '24px', 'height': '24px', color: '#fff' }}></Icon>
                                            {this.state.isClose ? '' : <span className="name"> {item.name} </span>}

                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>

                </div>
                <div className="con">
                    {this.props.children}
                </div>

            </div>
        )
    }
}
