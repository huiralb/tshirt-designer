<template>
  <div class="controls" :style="`opacity:${opacity}`" @click="opacity = 1">
    <vue-draggable-resizable 
      :w="width" 
      :h="height"
      :x="x"
      :y="y"
      v-on:dragging="onDrag" 
      v-on:resizing="onResize"
      />
  </div>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable";

export default {
  components: {
    VueDraggableResizable
  },
  props: {
    klass: {
      type: Object
    }
  },
  data () {
    return {
      width: this.klass.width || 0,
      height: this.klass.height || 0,
      x: this.klass.left || 0,
      y: this.klass.top || 0,
      opacity: 0
    }
  },
  methods: {
    onResize(x, y, width, height){
      this.$emit('resize', {left: x, top: y, width, height})
    },
    onDrag(x, y){
      this.$emit('drag', {left: x, top: y})
    },
  }
}
</script>

<style>
.vdr{
  border: 1px solid #ddd;
  background: transparent;
  cursor: pointer;
}
</style>
