<template>
  <section class="instance">
    <slot name="interface"></slot>

    <div class="instance__content" :style="transform.position" ref="content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  import { EventBus } from "./event_bus"
  import Impetus from "impetus"

  export default {
    props: {
      enableDrag: {
        default: true,
        type: Boolean
      }
    },
    data: function () {
      return {
        elementPositionY: 0,
        elementPositionX: 0
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
      EventBus.$on("resetBoardPosition", () => {
        this.elementPositionY = 0
        this.elementPositionX = 0
      })

      if (this.enableDrag) this.setImpetus()

      console.log(this.enableDrag)
    },
    methods: {
      setImpetus() {
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
      moveParallax(element, x, y) {
        const elementsToMove = element.querySelectorAll("[instance-parallax-background]")

        elementsToMove.forEach(function(element) {
          let elementSpeed = element.getAttribute("instance-parallax-background") / 100
          let elementBackgroundSpeed = element.getAttribute("instance-parallax-background-image") / 100

          element.style.transform = `translateY(${ y * elementSpeed }px) translateX(${ x * elementSpeed }px)`

          if (elementBackgroundSpeed) element.style.backgroundPosition = `calc(50% + ${ x * elementBackgroundSpeed }px) calc(50% + ${ y * elementBackgroundSpeed }px)`
        })
      }
    },
    watch: {
      draggable() {
        if (this.draggable) this.setImpetus
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

  .instance__title {
    margin-top: 0;
    margin-bottom: 5vmax;
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

  .interface--fullscreen {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: var(--black);
    box-shadow: 0 0 20px 20px var(--black);
    font-size: 28px;
    z-index: 1000;
  }

  .interface--fullscreen__tray {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10vmax;
    font-size: 18px;
  }
</style>
