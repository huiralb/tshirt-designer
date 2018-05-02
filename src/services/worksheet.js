import { fabric } from "fabric";

export default class Worksheet {
  constructor(id){
    return this.init(id)
  }
  init(id){
    this._canvas = new fabric.Canvas(id, {
      width: 530,
      height: 630
    })

    return this._canvas
  }
  static canvas() {
    setTimeout(() => {
      
      return this._canvas
    }, 2000);
  }
}
