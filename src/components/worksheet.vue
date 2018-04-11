<template>
  <div id="worksheet">
    <canvas id="canvas"></canvas>
    <img id="img-model" :src="imgSrc" style="width: 530px; height: 630px">
    <Control 
      v-for="(object, i) in objects" 
      :klass="object" 
      @drag="updateControl"
      @resize="updateControl"
      :key="i" />
  </div>
</template>

<script>
import { fabric } from "fabric";
import store from "@/store";
import Control from "./control";

export default {
  components: {
    Control
  },
  mounted () {
    this.init()
    this.addText()
  },
  data () {
    return {
      imgSrc: '/img/crew_front.png'
    }
  },
  methods: {
    init () {
      let canvas = new fabric.Canvas('canvas', {
        width: 530,
        height: 630,
      })
      canvas.renderAll()
      store.commit('setCanvas', canvas)
    },
    addText(){
      const text = new fabric.Text('Hello World', { left: 100, top: 100})
      this.canvas.add(text)
      this.canvas.renderAll()
    },
    updateControl(payload){
      let obj = this.canvas.getObjects()[0]
      obj.set(payload)
      this.canvas.renderAll()
    },
  },
  computed: {
    canvas () {
      return store.state.worksheet.canvas
    },
    objects () {
      let _objects = []
      if(!this.canvas) return _objects

      this.canvas.forEachObject(obj=>{
        _objects.push(obj.toObject())
      });
      return _objects
    },
    activeObject () {
      if(!this.objects.length) return {}
      return this.canvas.getObjects()[0]
    }
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

