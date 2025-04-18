import React, { Component } from 'react'
import "./style.less"
import * as calendar from "../../utils/calendar";
import Icon from "../Icon"




export default class Calendar extends Component {

    state = {
        today: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            date: new Date().getDate()
        },
        cur_year: '',
        cur_month: '',
        date: [],
        type: 'month',
        index: '-1'

    }


    componentDidMount() {
        let date = new Date();
        this.setState({
            cur_year: date.getFullYear(),
            cur_month: date.getMonth() + 1,
            date: calendar.getMonthAllDays(date.getFullYear(), date.getMonth() + 1).date
        })
    }


    next() {
        let { cur_year, cur_month } = this.state;
        let { date, year, month } = calendar.getNextMonthAllDays(cur_year, cur_month)
        this.setState({
            cur_year: year,
            cur_month: month,
            date: date,
        })
    }

    pre() {
        let { cur_year, cur_month } = this.state;
        let { date, year, month } = calendar.getPreviousMonthAllDays(cur_year, cur_month)
        this.setState({
            cur_year: year,
            cur_month: month,
            date: date,
        })
    }


    render() {
        const { type, today, cur_year, cur_month } = this.state;


        return (
            <div className="calendar">

                <div className="calendar_header">
                    <div className="tab">
                        <span className="left" onClick={() => this.pre()}><Icon iconName="left" style={{ width: '20px', height: '20px' }} ></Icon></span>
                        <span className="right" onClick={() => this.next()}><Icon iconName="right" style={{ width: '20px', height: '20px' }}></Icon></span>
                    </div>
                    <div className="title">
                        <span className="year">{this.state.cur_year},</span>
                        <span className="month">{this.state.cur_month}</span>
                    </div>
                    <div className="util">
                        <span className="add"><Icon iconName="add" style={{ width: '20px', height: '20px' }}></Icon></span>
                        <span className={'calendar' + (type == 'month' ? '' : ' hide')} onClick={() => { this.setState({ type: 'day' }) }}><Icon iconName="calendar" style={{ width: '20px', height: '20px' }}></Icon></span>
                        <span className={'todolist' + (type == 'day' ? '' : ' hide')} onClick={() => { this.setState({ type: 'month' }) }}><Icon iconName="todolist" style={{ width: '20px', height: '20px' }}></Icon></span>
                    </div>
                </div>

                <ul className={type == 'month' ? '' : 'hide'}>
                    <li className="tit">星期天</li>
                    <li className="tit">星期一</li>
                    <li className="tit">星期二</li>
                    <li className="tit">星期三</li>
                    <li className="tit">星期四</li>
                    <li className="tit">星期五</li>
                    <li className="tit">星期六</li>
                    {this.state.date.map((item, index) => {
                        return (<li className={"day" + (this.state.index == index ? ' selected' : '')} onClick={() => { this.setState({ index: index }) }} key={item * Math.random()}>
                            <p className={
                                ((cur_year == today.year) &&
                                    (cur_month == today.month) &&
                                    (item == today.date)) ? 'date today' : 'date'
                            }
                            >{item}</p>
                        </li>)
                    })}
                </ul>

                <div className={type == 'day' ? '' : 'hide'}>
                    byday
                </div>


            </div>


        )
    }
}
