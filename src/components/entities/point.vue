<template>
  <g>
    <circle :cx="setPointPosition(point, 0)" :cy="setPointPosition(point, 1)" r="14" fill="currentColor" v-if="selected" class="selected-shadow" />
    <circle :cx="setPointPosition(point, 0)" :cy="setPointPosition(point, 1)" r="10" fill="currentColor" :class="selected ? 'selected' : ''" />
  </g>
</template>

<script>
  export default {
    props: ["shape", "point", "selected"],
    data() {
      return {
        isSelected: false
      }
    },
    methods: {
      setPointPosition(point, position) {
        return point.split(",")[position]
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
  }

  .selected-shadow {
    animation: grow-circle-outside 150ms forwards;
  }

  @keyframes grow-circle {
    30% {
      r: 8;
      stroke: #111;
      stroke-width: 0px;
    }

    80% {
      r: 12;
      stroke: #111;
      stroke-width: 4px;
    }

    100% {
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
</style>
