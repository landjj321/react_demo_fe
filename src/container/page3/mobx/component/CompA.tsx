import React from "react";
import { inject, observer } from "mobx-react";

@inject("Communi")
@observer
class CompA extends React.Component {
  /* 组件A */
  state = { CompAsay: "" };
  render() {
    const { CompAsay } = this.state;
    const { mesB } = this.props.Communi;
    return (
      <div className="box">
        <p>我是组件A</p>
        <div> B组件对我说：{mesB} </div>
        我对B组件说：{" "}
        <input
          onChange={(e) => this.setState({ CompAsay: e.target.value })}
          placeholder="CompAsay"
        />
        <button onClick={() => this.props.Communi.setMesA(CompAsay)}>
          确定
        </button>
      </div>
    );
  }
}

export default CompA;
