<template>
  <section class="instance">
    <slot name="interface"></slot>

    <div class="instance__content" :style="transform.position" ref="content">
      <slot></slot>
    </div>

    <div
      :instance-parallax-background="background.speed"
      :instance-parallax-background-image="background.backgroundSpeed ? background.backgroundSpeed : 0"
      :class="`instance__background instance__background--${background.name} ${ + enableDrag ? '' : ' instance__background--transition'}`"
      v-for="background in backgrounds">
    </div>
  </section>
</template>

<script>
  import Impetus from "impetus"

  export default {
    props: {
      backgrounds: {
        default: () => [
          { name: "stars", speed: 0, backgroundSpeed: 10 },
          { name: "stars-infinite", speed: 0, backgroundSpeed: 10 },
          { name: "earth", speed: 2, backgroundSpeed: 10 }
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
      transform: function() {
        return {
          position: `transform: translateY(${this.elementPositionY}px) translateX(${this.elementPositionX}px)`
        }
      }
    },
    mounted: function() {
      if (!this.enableDrag) return

      const self = this

      new Impetus({
        update: function (x, y) {
          self.elementPositionX = x
          self.elementPositionY = y

          self.moveParallax(self.$el, x, y)
        }
      })
    },
    methods: {
      moveParallax: function(element, x, y) {
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
      newPositionY: function(oldValue, newValue) {
        this.moveParallax(this.$el, this.elementPositionX, this.newPositionY)
      }
    }
  }
</script>

<style lang="scss">
  .instance {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    transform: none;
  }

  .instance__content {

  }

  .instance__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-position: center;
    background-repeat: no-repeat, repeat;

    &--transition {
      transition: transform 1000ms, background-position 1000ms;
    }
  }

  .instance__background--stars {
    background: url("../assets/bg_milkyway_main_3x.jpg") no-repeat;
    background-position: center center;
    background-color: transparent;
  }

  .instance__background--stars-infinite {
    background: url("../assets/bg_stars_with_clusters_3x.jpg") repeat;
    background-color: #25182C;
    z-index: -2;
  }

  .instance__background--earth {
    left: 70vw;
    top: 20vh;
    height: calc(150px * var(--pixel-modifier));
    width: calc(150px * var(--pixel-modifier));
    border-radius: 50%;
    background: blue;
  }
</style>
