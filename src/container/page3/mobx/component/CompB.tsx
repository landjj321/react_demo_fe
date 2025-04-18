import React from "react";
import { inject, observer } from "mobx-react";

@inject("Communi")
@observer
class CompB extends React.Component {
  /* 组件B */
  state = { compBsay: "" };
  render() {
    const { compBsay } = this.state;
    const { mesA } = this.props.Communi;
    return (
      <div className="box pt50">
        <p>我是组件B</p>
        <div> A组件对我说：{mesA} </div>
        我对A组件说：
        <input
          onChange={(e) => this.setState({ compBsay: e.target.value })}
          placeholder="CompAsay"
        />
        <button onClick={() => this.props.Communi.setMesB(compBsay)}>
          确定
        </button>
      </div>
    );
  }
}

export default CompB;
