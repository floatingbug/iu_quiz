<template>
  <div
    class="einzel-quiz-spieleinstellungen-container"
    v-bind:class="rootClassName"
  >
    <router-link
      to="/einzel-quiz-fragen"
      class="einzel-quiz-spieleinstellungen-quiz-starten button"
    >
      {{ QuizStarten }}
    </router-link>
    <span class="einzel-quiz-spieleinstellungen-themenbereich">
      {{ Themenbereich }}
    </span>
    <span class="einzel-quiz-spieleinstellungen-anzahl-fragen">
      {{ AnzahlFragen }}
    </span>
    <span class="einzel-quiz-spieleinstellungen-anzahl-fragen1">
      {{ ZeitProFrage }}
    </span>
    <select
      name="Thema"
      required
      class="einzel-quiz-spieleinstellungen-gruppenname"
    >
      <option value="Thema 1" selected>Thema 1</option>
      <option value="Thema 2">Thema 2</option>
    </select>
    <select
      name="Thema"
      required
      class="einzel-quiz-spieleinstellungen-anzahl-fragen2"
    >
      <option value="Anzahl Fragen" selected>10</option>
      <option value="Anzahl Fragen">20</option>
    </select>
    <select
      name="Thema"
      required
      class="einzel-quiz-spieleinstellungen-zeit-pro-frage"
    >
      <option value="Zeit pro Frage" selected>30 sec</option>
      <option value="Zeit pro Frage">45 sec</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'EinzelQuizSpieleinstellungen',
  props: {
    AnzahlFragen: {
      type: String,
      default: 'Anzahl Fragen:',
    },
    Themenbereich: {
      type: String,
      default: 'Gruppenname:',
    },
    rootClassName: String,
    ZeitProFrage: {
      type: String,
      default: 'Zeit pro Frage:',
    },
    QuizStarten: {
      type: String,
      default: 'Quiz starten',
    },
  },
}
</script>

<style scoped>
.einzel-quiz-spieleinstellungen-container {
  width: 600px;
  height: 396px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.einzel-quiz-spieleinstellungen-quiz-starten {
  left: 0px;
  right: 0px;
  width: 300px;
  bottom: 0px;
  height: 55px;
  margin: auto;
  position: absolute;
  font-size: 18px;
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
.einzel-quiz-spieleinstellungen-themenbereich {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}
.einzel-quiz-spieleinstellungen-anzahl-fragen {
  top: 110px;
  left: 0px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}
.einzel-quiz-spieleinstellungen-anzahl-fragen1 {
  top: 220px;
  left: 0px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}
.einzel-quiz-spieleinstellungen-gruppenname {
  top: 35px;
  left: 0px;
  width: 600px;
  height: 50px;
  position: absolute;
  font-size: 24;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-black);
  border-width: 2px;
}
.einzel-quiz-spieleinstellungen-anzahl-fragen2 {
  top: 145px;
  left: 0px;
  width: 600px;
  height: 50px;
  position: absolute;
  font-size: 24;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-black);
  border-width: 2px;
}
.einzel-quiz-spieleinstellungen-zeit-pro-frage {
  top: 265px;
  left: 0px;
  width: 600px;
  height: 50px;
  position: absolute;
  font-size: 24;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-black);
  border-width: 2px;
}
.einzel-quiz-spieleinstellungen-root-class-name {
  top: 300px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
  align-self: center;
}
</style>
