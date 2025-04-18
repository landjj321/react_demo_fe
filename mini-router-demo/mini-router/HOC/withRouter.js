import React, { Component } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

import { RouterContext } from "../Router";

export default function withRouter() {
    const WrapComponent = (props) => {
        const { wrappedComponentRef, ...remainingProps } = props
        const context = useContext(RouterContext)
        return <Component {...remainingProps}
            ref={wrappedComponentRef}
            {...context}
        />
    }
    // 通过hoistNonReactStatics继承原始组件的静态属性
    return hoistNonReactStatics(WrapComponent, Component)
}

