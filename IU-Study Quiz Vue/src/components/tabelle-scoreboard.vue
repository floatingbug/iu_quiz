<template>
  <div class="tabelle-scoreboard-container" v-bind:class="rootClassName"></div>
</template>

<script>
export default {
  name: 'TabelleScoreboard',
  props: {
    link_text: {
      type: String,
      default: 'https://example.com',
    },
    text: {
      type: String,
      default: 'Link',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.tabelle-scoreboard-container {
  width: 900px;
  height: 400px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(0deg, rgb(189, 195, 199) 0.00%,rgb(0, 167, 181) 100.00%);
}
.tabelle-scoreboard-root-class-name {
  top: 380px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
  background-image: linear-gradient(0deg, rgb(189, 195, 199) 0.00%,rgb(0, 167, 181) 100.00%);
}
</style>
