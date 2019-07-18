<template>
  <Instance class="instance--level">
    <svg :height="svgHeight" :width="svgWidth" ref="svg">

      <g v-for="(shape, i) in shapes" :ref="`shape-${ i }`" v-bind:key="`shape-${ i }`">
        <polygon :points="setPoints(shape)" />

        <point v-for="(point, j) in shape" :shape="shape" :point="point" :selected="[pointSelected[0], pointSelected[1]].join() == [i, j].join()" @click.native="setPoint(i, j)" :id="`point-${ i }-${ j }`" v-bind:key="`point-${ j }-${ i }`" />
      </g>

      <g ref="lines"></g>

      <g v-for="(shape, i) in shapes" v-bind:key="`shape-point-${ i }`">
        <use v-for="(point, j) in shape" :xlink:href="`#point-${ i }-${ j }`" v-bind:key="`shape-point-${ j }-${ i }`" />
      </g>
    </svg>

    <level-complete slot="interface" v-if="completed" />
  </Instance>
</template>

<script>
  import { EventBus } from "../event_bus"
  import Vue from "vue"
  import LevelComplete from "../interface/level-complete"
  import Instance from "../instance"
  import Point from "../entities/point"
  import "polygon-overlap"

  export default {
    components: {
      Instance,
      Point,
      LevelComplete
    },
    data() {
      return {
        shapes: [],
        pointSelected: false,
        firstPoint: {},
        secondPoint: [],
        completed: false,
        svgHeight: 300,
        svgWidth: 300
      }
    },
    mounted() {
      this.initiateLevel()

      EventBus.$on("initiateLevel", () => { this.initiateLevel() })
    },
    methods: {
      setPoints(shape) {
        return shape.join(" ")
      },
      setPoint(shape, point) {
        this.pointSelected = !this.pointSelected

        if (this.pointSelected) {
          this.firstPoint = { shape: shape, point: point }
          this.pointSelected = [ shape, point ]
        } else {
          this.secondPoint = { shape: shape, point: point }
          this.pointSelected = false

          this.moveSelectedPoints(this.firstPoint, this.secondPoint)
          this.moveSelectedPoints(this.secondPoint, this.firstPoint)
        }
      },
      moveSelectedPoints(oldValue, newValue) {
        let newValueCurrent = this.shapes[oldValue.shape][oldValue.point].split(",").map(Number)
        let oldValueCurrent = this.shapes[newValue.shape][newValue.point].split(",").map(Number)

        let differenceX = oldValueCurrent[0] - newValueCurrent[0]
        let differenceY = oldValueCurrent[1] - newValueCurrent[1]

        const distance = this.getDistance(oldValueCurrent, newValueCurrent) + 1
        const pixelsPerSecond = 1250
        const fps = 60
        const interval = 1000 / fps

        let transitionDuration = distance / pixelsPerSecond * 1000
        if (transitionDuration < 100) transitionDuration = 100
        const steps = Math.ceil(transitionDuration / interval)

        let stepX = differenceX / steps
        let stepY = differenceY / steps

        let iteration = 0
        const intervalTimer = setInterval(() => {
          iteration++

          newValueCurrent[0] = newValueCurrent[0] + stepX
          newValueCurrent[1] = newValueCurrent[1] + stepY

          if (iteration == steps) {
            clearInterval(intervalTimer)
          }

          Vue.set(this.shapes[oldValue.shape], oldValue.point, newValueCurrent.join(","))
        }, interval)

        setTimeout(() => {
          Vue.set(this.shapes[oldValue.shape], oldValue.point, oldValueCurrent.join(","))
        }, transitionDuration)
      },
      checkIntersectionOfAllLines() {
        this.$refs.lines.innerHTML = ""

        let lines = []
        this.shapes.forEach(shape => {
          shape.forEach((line, index) => {
            let lineArray = []

            lineArray[0] = line.split(",").map(Number)

            if (shape[index + 1]) {
              lineArray[1] = shape[index + 1].split(",").map(Number)
            } else {
              lineArray[1] = shape[0].split(",").map(Number)
            }

            lines.push(lineArray)
          })
        })

        let allLinesClear = true

        for (const [i, line] of lines.entries()) {
          for (const [j, line2] of lines.entries()) {

            if (this.checkLineIntersect(
                  line[0][0],
                  line[0][1],
                  line[1][0],
                  line[1][1],
                  line2[0][0],
                  line2[0][1],
                  line2[1][0],
                  line2[1][1]))
            {
              const lineElement = document.createElementNS("http://www.w3.org/2000/svg", "line")

              lineElement.setAttribute("stroke-width", "5px")
              lineElement.setAttribute("stroke", "currentColor")
              lineElement.setAttribute("x1", line[0][0])
              lineElement.setAttribute("x2", line[1][0])
              lineElement.setAttribute("y1", line[0][1])
              lineElement.setAttribute("y2", line[1][1])
              lineElement.setAttribute("stroke", "var(--red)")

              this.$refs.lines.append(lineElement)

              allLinesClear = false
            }
          }
        }

        this.completed = allLinesClear
      },
      getDistance(point1, point2) {
        let xs = 0
        let ys = 0

        xs = point2[0] - point1[0]
        xs = xs * xs

        ys = point2[1] - point1[1]
        ys = ys * ys

        return Math.sqrt(xs + ys)
      },
      checkLineIntersect(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
        const forgiveness = 0.05

        const s1x = p1x - 1 - p0x
        const s1y = p1y - 1 - p0y
        const s2x = p3x - 1 - p2x
        const s2y = p3y - 1 - p2y

        const s = (-s1y * (p0x - p2x) + s1x * (p0y - p2y)) / (-s2x * s1y + s1x * s2y)
        const t = ( s2x * (p0y - p2y) - s2y * (p0x - p2x)) / (-s2x * s1y + s1x * s2y)

        return s >= 0 + forgiveness && s <= 1 - forgiveness && t >= 0 + forgiveness && t <= 1 - forgiveness
      },
      initiateLevel() {
        this.complete = false

        this.setLevelData()
        this.resizeSVG()

        this.$nextTick(() => {
          this.checkIntersectionOfAllLines()
        })
      },
      setLevelData() {
        this.shapes = this.$root.levelData[this.$root.currentLevel].shapes
      },
      resizeSVG() {
        const allCoordinates = this.shapes.flat().map(item => item.split(","))
        const highestY = allCoordinates.reduce((prev, current) => parseInt(prev[1]) > parseInt(current[1]) ? prev : current)[1]
        const highestX = allCoordinates.reduce((prev, current) => parseInt(prev[0]) > parseInt(current[0]) ? prev : current)[0]
        const lowestY = allCoordinates.reduce((prev, current) => parseInt(prev[1]) < parseInt(current[1]) ? prev : current)[1]
        const lowestX = allCoordinates.reduce((prev, current) => parseInt(prev[0]) < parseInt(current[0]) ? prev : current)[0]

        this.svgHeight = parseInt(highestY) + parseInt(lowestY)
        this.svgWidth = parseInt(highestX) + parseInt(lowestX)
      }
    },
    watch: {
      shapes() {
        this.checkIntersectionOfAllLines()
      }
    }
  }
</script>

<style lang="scss">
  .instance--level {
    display: grid;
    grid-auto-columns: auto;
    grid-auto-rows: auto;
    place-items: center;
  }

  polygon {
    fill: transparent;
    stroke: var(--white);
    stroke-width: 4px;
    pointer-events: none;
  }

  line {
    pointer-events: none;
  }

  .interface--level-complete {
    opacity: 0;
    animation: fade-in 1000ms 500ms forwards;
  }
</style>
