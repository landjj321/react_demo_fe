import { action, observable } from "mobx";

class Communi {
  constructor() {}
  @observable mesA = "";
  @observable mesB = "";
  @action setMesA(mes: string) {
    this.mesA = mes;
  }
  @action setMesB(mes: string) {
    this.mesB = mes;
  }
}
export default new Communi();
