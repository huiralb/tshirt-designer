<template>
  <div class="controls" 
        :style="styleObj" 
        @click="styleObj['opacity']=1" 
        @mousemove="active"></div>
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
        .resizable({
          // resize from all edges and corners
          edges: { left: true, right: true, bottom: true, top: true },

          // keep the edges inside the parent
          restrictEdges: {
            outer: 'parent',
            endOnly: true,
          },

          // minimum size
          restrictSize: {
            min: { width: 100, height: 50 },
          },

          inertia: true,
        })
        .on('resizemove', (event) => {
          let target = event.target;
          let width = event.rect.width
          let height = event.rect.height
          let left = event.deltaRect.left
          let top = event.deltaRect.top

          target.style.width = width+'px'
          target.style.height = height+'px'
          this.$emit('onresize', {width: width, height: height})
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

