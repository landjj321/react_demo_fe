import { useContext } from "react";
import { RouterContext } from "../Router"

/* 用useContext获取上下文中的history对象 */
export default function useLocation() {
    return useContext(RouterContext).location;
}