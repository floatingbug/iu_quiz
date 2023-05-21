<template>
  <div
    class="einzel-richtige-antwort-zum-ergebnis-container"
    v-bind:class="rootClassName"
  >
    <label class="einzel-richtige-antwort-zum-ergebnis-richtige-antwort">
      {{ RichtigeAntwort }}
    </label>
    <span class="einzel-richtige-antwort-zum-ergebnis-antworttext">
      {{ RichtigeAntworttext }}
    </span>
    <router-link
      to="/einzel-quiz-ergebnis"
      class="einzel-richtige-antwort-zum-ergebnis-zum-ergebnis button"
    >
      {{ zumErgebnis }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'EinzelRichtigeAntwortZumErgebnis',
  props: {
    RichtigeAntwort: {
      type: String,
      default: 'Richtige Antwort',
    },
    zumErgebnis: {
      type: String,
      default: 'zum Ergebnis',
    },
    RichtigeAntworttext: {
      type: String,
      default: 'Richtige Antworttext',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.einzel-richtige-antwort-zum-ergebnis-container {
  width: 840px;
  height: 530px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.einzel-richtige-antwort-zum-ergebnis-richtige-antwort {
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
.einzel-richtige-antwort-zum-ergebnis-antworttext {
  top: 80px;
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
.einzel-richtige-antwort-zum-ergebnis-zum-ergebnis {
  left: 0px;
  right: 0px;
  width: 410px;
  bottom: 0px;
  height: 55px;
  margin: auto;
  position: absolute;
  font-size: 24px;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.5;
  border-width: 4px;
  border-radius: 15px;
  text-transform: uppercase;
  text-decoration: none;
  background-color: #00a7b5;
}
.einzel-richtige-antwort-zum-ergebnis-root-class-name {
  top: 270px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
