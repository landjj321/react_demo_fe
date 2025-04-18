import React from "react";
import { observer, inject } from 'mobx-react';

const getUserInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "alien", mes: "let us learn React!" });
    }, 1000);
  });
};

@inject("Root")
@observer
class Child extends React.Component {
  async componentDidMount() {
    /*  模拟数据交互 */
    const res = await getUserInfo();
    this.props.Root.setInfo(res);
  }
  render() {
    const { info } = this.props.Root;
    return (
      <div className="box">
        <p> 姓名：{info.name} </p>
        <p> 想对大家说：{info.mes} </p>
      </div>
    );
  }
}

export default Child;
