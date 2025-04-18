//入口文件
import Router, { RouterContext } from "./Router"
import Route from "./Route";
import Switch from "./Switch";


import useHistory from "./hooks/useHistory";
import useListen from "./hooks/useListen";
import useLocation from "./hooks/useLocation";

//hoc 
import withRouter from "./HOC/withRouter";

export {
    Router,
    Switch,
    Route,
    RouterContext,
    useHistory,
    useListen,
    useLocation,
    withRouter
}