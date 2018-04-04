<template>
  <div>
    <canvas id="worksheet"></canvas>
  </div>
</template>

<script>
import { fabric } from "fabric";
import store from "@/store";

export default {
  created () {
    this.init()
  },
  methods: {
    init () {
      let canvas = new fabric.Canvas('worksheet', {
        width: 300,
        height: 300,
        backgroundColor: '#dddddd'
      })
  
      store.commit('setCanvas', canvas)
    }
  }
}
</script>

