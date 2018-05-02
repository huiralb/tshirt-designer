<template>
  <div id="worksheet">
    <canvas id="canvas"></canvas>
    <img id="img-model" :src="imgSrc" style="width: 530px; height: 630px">
    <!-- <Control 
      v-for="(object, i) in objects" 
      :klass="object" 
      @drag="updateControl"
      @resize="updateControl"
      :key="i" /> -->
  </div>
</template>

<script>
import Worksheet from "@/services/worksheet";
import store from "@/store";
import Control from "./control";

export default {
  components: {
    Control
  },
  mounted () {
    this.init()
    // this.addText()
  },
  data () {
    return {
      imgSrc: '/img/crew_front.png',
    }
  },
  methods: {
    init () {
      let canvas = new Worksheet('canvas')
      console.log(Worksheet)

      let box = new fabric.Rect({
        width: 100,
        height: 100,
        fill: 'red',
        left: 100,
        top: 100
      })
      canvas.setActiveObject(box)
      canvas.add(box)

      setTimeout(() => {
        box.set({
          width: 200
        })
        canvas.renderAll()
      }, 1000);
      
      
      store.commit('setCanvas', {canvas, json: JSON.stringify(canvas)})
    },
    addText(canvas){
      const text = new fabric.Text('Hello World', { left: 100, top: 100})
      canvas.add(text)
      text.set({
        width: 150
      })
      canvas.renderAll()
    },
    updateControl(payload){
      let canvas = this.canvas
      let obj = canvas.item(0)

      obj.set(payload)
      obj.set({
        width: obj.width * obj.scaleX
      })
      
      canvas.renderAll()
    },
  },
  computed: {
    canvas () {
      let _canvas = store.state.worksheet.canvas
      _canvas.loadFromJSON(store.state.worksheet.canvasJson, _canvas.renderAll.bind(_canvas), (o)=>{
        console.log(o)
      })
      return _canvas
    },
    // objects () {
    //   let _objects = []
    //   if(!this.canvas) return _objects

    //   this.canvas.forEachObject(obj=>{
    //     _objects.push(obj.toObject())
    //   });
    //   return _objects
    // },
    // activeObject () {
    //   if(!this.objects.length) return {}
    //   return this.canvas.getObjects()[0]
    // }
  }
}
</script>

<style>
#worksheet{
  position: relative;
}
#img-model{
  position: absolute;
  top: 0;
}
</style>

