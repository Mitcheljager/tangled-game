<template>
  <section class="instance">
    <slot name="interface"></slot>

    <div class="instance__content" :style="transform.position" ref="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  import Impetus from "impetus"

  export default {
    props: {
      backgrounds: {
        default: () => [
          { name: "stars", speed: 0, backgroundSpeed: 5 },
          { name: "stars-infinite", speed: 0, backgroundSpeed: 5 }
        ]
      },
      enableDrag: {
        default: true,
        type: Boolean
      }
    },
    data: function () {
      return {
        elementPositionY: 0,
        elementPositionX: 0,
        newPositionY: 0,
        newPositionX: 0
      }
    },
    computed: {
      transform() {
        return {
          position: `transform: translateY(${this.elementPositionY}px) translateX(${this.elementPositionX}px)`
        }
      }
    },
    mounted: function() {
      if (!this.enableDrag) return

      const element = this.$refs.content
      const elementWidth = element.offsetWidth
      const elementHeight = element.offsetHeight

      new Impetus({
        update: (x, y) => {
          this.elementPositionX = x
          this.elementPositionY = y

          // this.moveParallax(this.$el, x, y)
        },
        boundX: [element.offsetWidth * -0.5, element.offsetWidth * 0.5],
        boundY: [element.offsetHeight * -0.5, element.offsetHeight * 0.5]
      })
    },
    methods: {
      moveParallax(element, x, y) {
        const elementsToMove = element.querySelectorAll("[instance-parallax-background]")

        elementsToMove.forEach(function(element) {
          let elementSpeed = element.getAttribute("instance-parallax-background") / 100
          let elementBackgroundSpeed = element.getAttribute("instance-parallax-background-image") / 100

          element.style.transform = `translateY(${ y * elementSpeed }px) translateX(${ x * elementSpeed }px)`

          if (elementBackgroundSpeed) element.style.backgroundPosition = `calc(50% + ${ x * elementBackgroundSpeed }px) calc(50% + ${ y * elementBackgroundSpeed }px)`
        })
      }
    }
  }
</script>

<style lang="scss">
  .instance {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    transform: none;
  }

  .instance__content {

  }

  .interface {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
  }
</style>
