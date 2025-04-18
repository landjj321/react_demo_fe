import React, { useCallback, useState, useEffect, createContext, useMemo } from "react";
import { createBrowserHistory as createHistory } from "history";

// createBrowserHistory 产生的控制浏览器真实地址的history对象

// createHashHistory 产生的控制浏览器hash的history对象
// createMemoryHistory 产生的控制内存中地址数组的history对象


// 提供路由更新派发
// 用于保存路由状态。用 Provider 传递 context 。
export const RouterContext = createContext();
export let rootHistory = null;
export default function Router(props) {

    // 缓存history属性
    const history = useMemo(() => {
        rootHistory = createHistory()
        return rootHistory
    }, [])

    const [location, setLocation] = useState(history.location);
    // 通过 useEffect 进行真正的路由监听，当路由改变，通过 useState ，改变 location 对象，会改变 Provider 里面 value 的内容，通知消费 context 的 Route ，Switch 等组件更新。
    useEffect(() => {
        //监听 location变化,通知更新
        const unlisten = history.listen((location) => {
            setLocation(location);
        })
        return function () {
            unlisten && unlisten();
        }
    }, [])

    return <RouterContext.Provider
        value={{
            location,
            history,
            match: { path: "/", url: "/", params: {}, isExact: location.pathname === "/" }
        }}
    >
        {props.children}
    </RouterContext.Provider>

}


