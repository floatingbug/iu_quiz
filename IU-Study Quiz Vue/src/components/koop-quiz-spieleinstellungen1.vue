<template>
  <div
    class="koop-quiz-spieleinstellungen1-container"
    v-bind:class="rootClassName"
  >
    <router-link
      to="/koop-quiz-fragen"
      class="koop-quiz-spieleinstellungen1-quiz-starten button"
    >
      {{ QuizStarten }}
    </router-link>
    <span class="koop-quiz-spieleinstellungen1-themenbereich">
      {{ Themenbereich }}
    </span>
    <span class="koop-quiz-spieleinstellungen1-anzahl-fragen">
      {{ AnzahlFragen }}
    </span>
    <span class="koop-quiz-spieleinstellungen1-anzahl-fragen1">
      {{ ZeitProFrage }}
    </span>
    <select
      name="Thema"
      required
      class="koop-quiz-spieleinstellungen1-gruppenname"
    >
      <option value="Thema 1" selected>Thema 1</option>
      <option value="Option 1">Option 1</option>
      <option value="Thema 2">Thema 2</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
    <select
      name="Thema"
      required
      class="koop-quiz-spieleinstellungen1-anzahl-fragen2"
    >
      <option value="Anzahl Fragen" selected>10</option>
      <option value="Anzahl Fragen">20</option>
      <option value="Option 1">Option 1</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
    <select
      name="Thema"
      required
      class="koop-quiz-spieleinstellungen1-zeit-pro-frage"
    >
      <option value="Zeit pro Frage" selected>30 sec</option>
      <option value="Option 1">Option 1</option>
      <option value="Zeit pro Frage">45 sec</option>
      <option value="Option 2">Option 2</option>
      <option value="Option 3">Option 3</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'KoopQuizSpieleinstellungen1',
  props: {
    QuizStarten: {
      type: String,
      default: 'Quiz starten',
    },
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
  },
}
</script>

<style scoped>
.koop-quiz-spieleinstellungen1-container {
  width: 600px;
  height: 396px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.koop-quiz-spieleinstellungen1-quiz-starten {
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
.koop-quiz-spieleinstellungen1-themenbereich {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}
.koop-quiz-spieleinstellungen1-anzahl-fragen {
  top: 110px;
  left: 0px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}
.koop-quiz-spieleinstellungen1-anzahl-fragen1 {
  top: 220px;
  left: 0px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}
.koop-quiz-spieleinstellungen1-gruppenname {
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
.koop-quiz-spieleinstellungen1-anzahl-fragen2 {
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
.koop-quiz-spieleinstellungen1-zeit-pro-frage {
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
.koop-quiz-spieleinstellungen1-root-class-name {
  top: 300px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
