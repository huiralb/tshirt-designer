<template>
  <div class="controls" :style="styleObj" @click="styleObj['opacity']=1" @mousemove="active"></div>
</template>

<script>
import interact from "interactjs";

export default {
  props: {
    klass: {
      type: Object
    }
  },

  data () {
    return {
      styleObj: {
        top: this.klass.top+'px',
        left: this.klass.left+'px',
        width: this.klass.width+'px',
        height: this.klass.height+'px',
        opacity: 0
      }
    }
  },

  methods: {
    active () {
     
      interact('.controls')
        .draggable({
          onmove: this.onDragMove
        })
    },
    onDragMove (event) {
      let target = event.target;
      let originX = parseFloat( target.style.left.replace('px', '') )
      let originY = parseFloat( target.style.top.replace('px', '') )
      let x = originX + event.dx
      let y = originY + event.dy

      target.style.left = `${x}px`
      target.style.top = `${y}px`
      target.style.opacity = 1

      this.$emit('ondrag', {left: x, top: y})
    }
  }
}

</script>


<style>
.controls{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 0;
  height: 0;
  border: 2px solid #ddd;
  background: transparent;
  cursor: pointer;
}
</style>

