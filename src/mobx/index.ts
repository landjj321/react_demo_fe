import { observable, action } from "mobx";

interface Info {
  name: string;
  mes: string;
}
class Root {
  constructor() {}
  @observable info: Info = { name: "xxx", mes: "xxx" };
  // @observable number = 1
  @action setInfo(info: Info) {
    this.info = info;
  }
}
export default new Root();
