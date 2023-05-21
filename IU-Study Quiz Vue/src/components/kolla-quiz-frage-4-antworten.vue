<template>
  <div
    class="kolla-quiz-frage-4-antworten-container"
    v-bind:class="rootClassName"
  >
    <router-link
      to="/kolla-quiz-richtige-antwort"
      class="kolla-quiz-frage-4-antworten-navlink"
    >
      <label class="kolla-quiz-frage-4-antworten-antwort-2">{{ Antwort2 }}</label>
    </router-link>
    <label class="kolla-quiz-frage-4-antworten-frage">{{ Frage }}</label>
    <router-link
      to="/kolla-quiz-richtige-antwort"
      class="kolla-quiz-frage-4-antworten-navlink1"
    >
      <label class="kolla-quiz-frage-4-antworten-antwort-1">{{ Antwort1 }}</label>
    </router-link>
    <router-link
      to="/kolla-quiz-richtige-antwort"
      class="kolla-quiz-frage-4-antworten-navlink2"
    >
      <label class="kolla-quiz-frage-4-antworten-antwort-4">{{ Antwort4 }}</label>
    </router-link>
    <router-link
      to="/kolla-quiz-richtige-antwort"
      class="kolla-quiz-frage-4-antworten-navlink3"
    >
      <label class="kolla-quiz-frage-4-antworten-antwort-3">{{ Antwort3 }}</label>
    </router-link>
    <span class="kolla-quiz-frage-4-antworten-antworttext-1">
      {{ Antworttext1 }}
    </span>
    <span class="kolla-quiz-frage-4-antworten-antworttext-11">
      {{ Fragetext }}
    </span>
    <span class="kolla-quiz-frage-4-antworten-antworttext-2">
      {{ Antworttext2 }}
    </span>
    <span class="kolla-quiz-frage-4-antworten-antworttext-4">
      {{ Antworttext4 }}
    </span>
    <span class="kolla-quiz-frage-4-antworten-antworttext-3">
      {{ Antworttext3 }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'KollaQuizFrage4Antworten',
  props: {
    rootClassName: String,
    Antworttext2: {
      type: String,
      default: 'Antworttext 2',
    },
    Antwort4: {
      type: String,
      default: 'Antwort 4',
    },
    Antworttext3: {
      type: String,
      default: 'Antworttext 3',
    },
    Fragetext: {
      type: String,
      default: 'Fragetext',
    },
    Antwort1: {
      type: String,
      default: 'Antwort 1',
    },
    Antwort3: {
      type: String,
      default: 'Antwort 3',
    },
    Antworttext4: {
      type: String,
      default: 'Antworttext 4',
    },
    Antwort2: {
      type: String,
      default: 'Antwort 2',
    },
    Frage: {
      type: String,
      default: 'Frage',
    },
    Antworttext1: {
      type: String,
      default: 'Antworttext 1',
    },
  },
}
</script>

<style scoped>
.kolla-quiz-frage-4-antworten-container {
  width: 840px;
  height: 530px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.kolla-quiz-frage-4-antworten-navlink {
  display: contents;
}
.kolla-quiz-frage-4-antworten-antwort-2 {
  top: 190px;
  right: 0px;
  width: 400px;
  height: 150px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  border-color: var(--dl-color-gray-black);
  border-width: 4px;
  border-radius: 25px;
  text-decoration: none;
  background-color: #00a7b580;
}
.kolla-quiz-frage-4-antworten-frage {
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
.kolla-quiz-frage-4-antworten-navlink1 {
  display: contents;
}
.kolla-quiz-frage-4-antworten-antwort-1 {
  top: 190px;
  left: 0px;
  width: 400px;
  height: 150px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  border-color: var(--dl-color-gray-black);
  border-width: 4px;
  border-radius: 25px;
  text-decoration: none;
  background-color: #00a7b580;
}
.kolla-quiz-frage-4-antworten-navlink2 {
  display: contents;
}
.kolla-quiz-frage-4-antworten-antwort-4 {
  top: 380px;
  right: 0px;
  width: 400px;
  height: 150px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  border-color: var(--dl-color-gray-black);
  border-width: 4px;
  border-radius: 25px;
  text-decoration: none;
  background-color: #00a7b580;
}
.kolla-quiz-frage-4-antworten-navlink3 {
  display: contents;
}
.kolla-quiz-frage-4-antworten-antwort-3 {
  top: 380px;
  left: 0px;
  width: 400px;
  height: 150px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  border-color: var(--dl-color-gray-black);
  border-width: 4px;
  border-radius: 25px;
  text-decoration: none;
  background-color: #00a7b580;
}
.kolla-quiz-frage-4-antworten-antworttext-1 {
  top: 270px;
  left: 0px;
  width: 400px;
  margin: auto;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
}
.kolla-quiz-frage-4-antworten-antworttext-11 {
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
.kolla-quiz-frage-4-antworten-antworttext-2 {
  top: 270px;
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
.kolla-quiz-frage-4-antworten-antworttext-4 {
  top: 460px;
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
.kolla-quiz-frage-4-antworten-antworttext-3 {
  top: 460px;
  left: 0px;
  width: 400px;
  margin: auto;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
}
.kolla-quiz-frage-4-antworten-root-class-name {
  top: 270px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
