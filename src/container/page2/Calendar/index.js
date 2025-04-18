import React, { Component } from 'react'
import './style.less'
import Calendar from '@/component/Calendar'



export default class CalendarPage extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div className="calendar_wrap">
                <div className="wrap">
                    <Calendar></Calendar>
                </div>

            </div>
        )
    }
}
