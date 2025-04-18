import { useEffect } from "react";
import { rootHistory } from "../Router";


// 监听路由变化
function useListen(cb) {
    useEffect(() => {
        if (!rootHistory) return () => { }

        /* 绑定路由事件监听器 */
        const unlisten = rootHistory.listen((location) => {
            console.log("监听 useListen");

            cb && cb(location)
        })

        return function () {
            unlisten && unlisten()
        }

    }, [])
}

export default useListen;
