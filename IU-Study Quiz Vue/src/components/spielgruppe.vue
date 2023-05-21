<template>
  <div class="spielgruppe-container" v-bind:class="rootClassName">
    <label class="spielgruppe-spieler-2">{{ Spieler2 }}</label>
    <label class="spielgruppe-spieler-1">{{ Spieler1 }}</label>
    <label class="spielgruppe-spieler-4">{{ Spieler4 }}</label>
    <label class="spielgruppe-spieler-3">{{ Spieler3 }}</label>
    <span class="spielgruppe-name-spieler-1">{{ NameSpieler1 }}</span>
    <span class="spielgruppe-name-spieler-2">{{ NameSpieler2 }}</span>
    <span class="spielgruppe-name-spieler-4">{{ NameSpieler4 }}</span>
    <span class="spielgruppe-name-spieler-3">{{ NameSpieler3 }}</span>
    <router-link
      to="/koop-quiz-spieleinstellungen"
      class="spielgruppe-navlink button"
    >
      {{ KooperativStarten }}
    </router-link>
    <router-link
      to="/kolla-quiz-spieleinstellungen"
      class="spielgruppe-navlink1 button"
    >
      {{ KollaborativStarten }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Spielgruppe',
  props: {
    Spieler3: {
      type: String,
      default: 'Spieler 3',
    },
    NameSpieler2: {
      type: String,
      default: 'Name Spieler 2',
    },
    Spieler4: {
      type: String,
      default: 'Spieler 4',
    },
    rootClassName: String,
    NameSpieler4: {
      type: String,
      default: 'Name Spieler 4',
    },
    KooperativStarten: {
      type: String,
      default: 'Kooperativ Starten',
    },
    KollaborativStarten: {
      type: String,
      default: 'Kollaborativ Starten',
    },
    Spieler2: {
      type: String,
      default: 'Spieler 2',
    },
    Spieler1: {
      type: String,
      default: 'Spieler 1',
    },
    NameSpieler1: {
      type: String,
      default: 'Name Spieler 1',
    },
    NameSpieler3: {
      type: String,
      default: 'Name Spieler 3',
    },
  },
}
</script>

<style scoped>
.spielgruppe-container {
  width: 840px;
  height: 440px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.spielgruppe-spieler-2 {
  top: 0px;
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
  background-color: rgba(191, 38, 38, 0.7);
}
.spielgruppe-spieler-1 {
  top: 0px;
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
  background-color: rgba(0, 116, 240, 0.7);
}
.spielgruppe-spieler-4 {
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
  background-color: rgba(0, 240, 39, 0.7);
}
.spielgruppe-spieler-3 {
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
  background-color: rgba(238, 240, 0, 0.7);
}
.spielgruppe-name-spieler-1 {
  top: 80px;
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
.spielgruppe-name-spieler-2 {
  top: 80px;
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
.spielgruppe-name-spieler-4 {
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
.spielgruppe-name-spieler-3 {
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
.spielgruppe-navlink {
  top: 380px;
  left: 0px;
  width: 400px;
  height: 60px;
  position: absolute;
  font-size: 24px;
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
.spielgruppe-navlink1 {
  top: 380px;
  right: 0px;
  width: 400px;
  height: 60px;
  position: absolute;
  font-size: 24px;
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
.spielgruppe-root-class-name {
  top: 340px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
  align-self: center;
}
</style>
