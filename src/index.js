import React from 'react'
import ReactDOM from 'react-dom'
import BasicLayout from '@/BasicLayout'
import { HashRouter } from 'react-router-dom'
import './mock.js'
import './reset.less'



//项目入口
ReactDOM.render(
    <HashRouter>
        <BasicLayout />
    </HashRouter>,
    document.getElementById('root')
)


