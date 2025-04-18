import { Provider } from "mobx-react";
import React from "react";
import Root from "@/mobx/index.ts";
import Communi from "@/mobx/Communi.ts";
import Child from "./component/Child";
import CompA from "./component/CompA";
import CompB from "./component/CompB";

const MobxDemo = (props: any) => {
  return (
    <Provider Root={Root} Communi={Communi}>
      <div>mobx demo2232</div>
      <Child></Child>
      <CompA></CompA>
      <CompB></CompB>
    </Provider>
  );
};

export default MobxDemo;
