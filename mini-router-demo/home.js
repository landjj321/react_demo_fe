import React from 'react'
import { Router, Route, useHistory, useListen, Switch } from './mini-router'
import Index1 from './pages/index1';
import Index2 from './pages/index2';
import Index3 from './pages/index3';
import "./home.css";



function Menu() {

    const history = useHistory();
    const go = (url) => history.push(url);
    const path = history.location.pathname;
    
    return (<div>
        <span
            className={path == '/index1' && 'red'}
            onClick={() => {
                go("/index1")
            }}>index1</span> |
        <span
            className={path == '/index2' && 'red'}
            onClick={() => {
                go("/index2")
            }}>index2</span> |
        <span
            className={path == '/index3' && 'red'}
            onClick={() => {
                go("/index3")
            }}>index3</span>
    </div>)

}



function Top() {
    /* 路由监听 */
    useListen((location) => {
        console.log('当前路由是：', location)
    })
    console.log(111)
    return <div>--------top------</div>
}

function Home() {

    return (<div className='box'>
        <Router>
            <Top></Top>
            <Menu></Menu>
            <Switch>
                <Route component={Index1} path="/index1"></Route>
                <Route component={Index2} path="/index2"></Route>
                <Route component={Index3} path="/index3"></Route>
            </Switch>
        </Router>
    </div>)
}


export default Home;