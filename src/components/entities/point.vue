<template>
  <g>
    <circle :cx="setPointPosition(point, 0)" :cy="setPointPosition(point, 1)" r="14" fill="currentColor" v-if="state" class="shadow" :class="pointTypes" />
    <circle :cx="setPointPosition(point, 0)" :cy="setPointPosition(point, 1)" r="10" fill="currentColor" :class="pointTypes" />
  </g>
</template>

<script>
  export default {
    props: ["shape", "point", "selected", "levelData"],
    data() {
      return {
        isSelected: false,
        marker: false,
        static: false
      }
    },
    mounted() {
      this.checkMarkers()
    },
    computed: {
      state() {
        if (this.selected) return true
        if (this.marker) return true
        if (this.static) return true

        return false
      },
      pointTypes() {
        let types = []

        if (this.selected) types.push("selected")
        if (this.marker) types.push("marker")
        if (this.static) types.push("static")

        return types
      }
    },
    methods: {
      setPointPosition(point, position) {
        return point.split(",")[position]
      },
      checkMarkers() {
        const markers = this.levelData.markers
        const statics = this.levelData.statics

        if (markers && markers.includes(this.point)) this.marker = true
        if (statics && statics.includes(this.point)) this.static = true
      }
    },
    watch: {
      selected() {
        if (this.selected) this.marker = false
      }
    }
  }
</script>

<style lang="scss">
  circle {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    &.selected {
      animation: grow-circle 150ms forwards;
    }

    &.static {
      r: 4;
      fill: var(--black);
      stroke: var(--black);
      stroke-width: 4px;
    }
  }

  .shadow {
    &.marker {
      animation: pulse-circle-outside 2000ms infinite;
    }

    &.selected {
      animation: grow-circle-outside 150ms forwards;
    }

    &.static {
      r: 12;
      fill: var(--white);
    }
  }

  @keyframes grow-circle {
    30% {
      r: 6;
      stroke: #111;
      stroke-width: 0px;
    }

    80% {
      r: 10;
      stroke: #111;
      stroke-width: 4px;
    }

    100% {
      r: 8;
      stroke: #111;
      stroke-width: 4px;
    }
  }

  @keyframes grow-circle-outside {
    0% {
      r: 0;
    }

    30% {
      r: 12;
    }

    80% {
      r: 16;
    }
  }

  @keyframes pulse-circle-outside {
    0% {
      r: 10;
      opacity: 0.5;
    }

    50%,
    100% {
      r: 30;
      opacity: 0;
    }
  }
</style>
