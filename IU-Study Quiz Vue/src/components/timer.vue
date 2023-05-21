<template>
  <div class="timer-container" v-bind:class="rootClassName">
    <label class="timer-antwort-2">{{ Timer }}</label>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: {
    rootClassName: String,
    Timer: {
      type: String,
      default: '01 : 00',
    },
  },
}
</script>

<style scoped>
.timer-container {
  width: 200px;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.timer-antwort-2 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 200px;
  height: 50px;
  margin: auto;
  position: absolute;
  font-size: 38px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  border-radius: 25px;
}
.timer-root-class-name {
  top: 200px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
.timer-root-class-name1 {
  top: 200px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
.timer-root-class-name2 {
  top: 200px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
.timer-root-class-name3 {
  top: 200px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
.timer-root-class-name4 {
  top: 200px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
.timer-root-class-name5 {
  top: 200px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
