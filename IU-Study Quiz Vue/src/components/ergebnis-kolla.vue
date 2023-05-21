<template>
  <div class="ergebnis-kolla-container" v-bind:class="rootClassName">
    <label class="ergebnis-kolla-antwort-2">{{ Spieler2Punkte }}</label>
    <label class="ergebnis-kolla-frage">{{ RichtigeAntwort }}</label>
    <label class="ergebnis-kolla-antwort-1">{{ Spieler1Punkte }}</label>
    <label class="ergebnis-kolla-antwort-4">{{ Spieler4Punkte }}</label>
    <label class="ergebnis-kolla-antwort-3">{{ Spieler3Punkte }}</label>
    <span class="ergebnis-kolla-antworttext-1">{{ Punktzahl1 }}</span>
    <span class="ergebnis-kolla-antworttext-11">{{ Antworttext }}</span>
    <span class="ergebnis-kolla-antworttext-2">{{ Punktzahl2 }}</span>
    <span class="ergebnis-kolla-antworttext-4">{{ Punktzahl4 }}</span>
    <span class="ergebnis-kolla-antworttext-3">{{ Punktzahl3 }}</span>
  </div>
</template>

<script>
export default {
  name: 'ErgebnisKolla',
  props: {
    Antworttext: {
      type: String,
      default: 'Antworttext richtig',
    },
    Punktzahl2: {
      type: String,
      default: 'Punktzahl 2',
    },
    Spieler1Punkte: {
      type: String,
      default: 'Spieler1',
    },
    rootClassName: String,
    Spieler3Punkte: {
      type: String,
      default: 'Spieler3',
    },
    Spieler4Punkte: {
      type: String,
      default: 'Spieler4',
    },
    Punktzahl1: {
      type: String,
      default: 'Punktzahl 1',
    },
    Punktzahl4: {
      type: String,
      default: 'Punktzahl 4',
    },
    RichtigeAntwort: {
      type: String,
      default: 'Richtige Antwort',
    },
    Spieler2Punkte: {
      type: String,
      default: 'Spieler2',
    },
    Punktzahl3: {
      type: String,
      default: 'Punktzahl 3',
    },
  },
}
</script>

<style scoped>
.ergebnis-kolla-container {
  width: 840px;
  height: 530px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.ergebnis-kolla-antwort-2 {
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
  background-color: #00a7b580;
}
.ergebnis-kolla-frage {
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
.ergebnis-kolla-antwort-1 {
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
  background-color: #00a7b580;
}
.ergebnis-kolla-antwort-4 {
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
  background-color: #00a7b580;
}
.ergebnis-kolla-antwort-3 {
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
  background-color: #00a7b580;
}
.ergebnis-kolla-antworttext-1 {
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
.ergebnis-kolla-antworttext-11 {
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
.ergebnis-kolla-antworttext-2 {
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
.ergebnis-kolla-antworttext-4 {
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
.ergebnis-kolla-antworttext-3 {
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
.ergebnis-kolla-root-class-name {
  top: 270px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
