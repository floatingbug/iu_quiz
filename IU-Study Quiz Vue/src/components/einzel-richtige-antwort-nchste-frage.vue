<template>
  <div
    class="einzel-richtige-antwort-nchste-frage-container"
    v-bind:class="rootClassName"
  >
    <label class="einzel-richtige-antwort-nchste-frage-richtige-atwort">
      {{ RichtigeAntwort }}
    </label>
    <span class="einzel-richtige-antwort-nchste-frage-antworttext">
      {{ RichtigeAntworttext }}
    </span>
    <router-link
      to="/einzel-quiz-letzte-frage"
      class="einzel-richtige-antwort-nchste-frage-navlink button"
    >
      {{ naechsteFrage }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'EinzelRichtigeAntwortNchsteFrage',
  props: {
    RichtigeAntworttext: {
      type: String,
      default: 'Richtige Antworttext',
    },
    rootClassName: String,
    naechsteFrage: {
      type: String,
      default: 'Nächste Frage',
    },
    RichtigeAntwort: {
      type: String,
      default: 'Richtige Antwort',
    },
  },
}
</script>

<style scoped>
.einzel-richtige-antwort-nchste-frage-container {
  width: 840px;
  height: 530px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.einzel-richtige-antwort-nchste-frage-richtige-atwort {
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
.einzel-richtige-antwort-nchste-frage-antworttext {
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
.einzel-richtige-antwort-nchste-frage-navlink {
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
.einzel-richtige-antwort-nchste-frage-root-class-name {
  top: 270px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
