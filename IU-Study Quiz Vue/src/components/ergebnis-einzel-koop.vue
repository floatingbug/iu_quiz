<template>
  <div class="ergebnis-einzel-koop-container" v-bind:class="rootClassName">
    <label class="ergebnis-einzel-koop-richtige-antwort">
      {{ RichtigeAntwort }}
    </label>
    <label class="ergebnis-einzel-koop-punktzahl">{{ Punktzahl }}</label>
    <span class="ergebnis-einzel-koop-punkte">{{ Punkte }}</span>
    <span class="ergebnis-einzel-koop-antworttext">
      {{ RichtigeAntworttext1 }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'ErgebnisEinzelKoop',
  props: {
    rootClassName: String,
    RichtigeAntworttext1: {
      type: String,
      default: 'Richtige Antworttext',
    },
    RichtigeAntwort: {
      type: String,
      default: 'Richtige Antwort',
    },
    Punkte: {
      type: String,
      default: 'Punkte',
    },
    Punktzahl: {
      type: String,
      default: 'Punktzahl:',
    },
  },
}
</script>

<style scoped>
.ergebnis-einzel-koop-container {
  width: 840px;
  height: 290px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.ergebnis-einzel-koop-richtige-antwort {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 840px;
  height: 150px;
  margin: auto;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  border-color: var(--dl-color-gray-black);
  border-width: 4px;
  border-radius: 25px;
  background-color: #00a7b5;
}
.ergebnis-einzel-koop-punktzahl {
  top: 190px;
  left: 0px;
  right: 0px;
  width: 420px;
  height: 100px;
  margin: auto;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  border-color: var(--dl-color-gray-black);
  border-width: 4px;
  border-radius: 25px;
  background-color: #00a7b5;
}
.ergebnis-einzel-koop-punkte {
  top: 240px;
  left: 0px;
  right: 0px;
  width: 400px;
  margin: auto;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
}
.ergebnis-einzel-koop-antworttext {
  top: 110px;
  left: 0px;
  right: 0px;
  width: 400px;
  margin: auto;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
}
.ergebnis-einzel-koop-root-class-name {
  top: 270px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
.ergebnis-einzel-koop-root-class-name1 {
  top: 270px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
