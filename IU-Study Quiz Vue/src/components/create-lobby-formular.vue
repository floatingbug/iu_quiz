<template>
  <div class="create-lobby-formular-container" v-bind:class="rootClassName">
    <input
      type="text"
      name="Name Feedback"
      required
      :placeholder="Gruppenname"
      class="create-lobby-formular-gruppenname input"
    />
    <input
      type="text"
      name="Name Feedback"
      required
      :placeholder="Spielername"
      class="create-lobby-formular-spielername input"
    />
    <router-link
      to="/gruppenspiel"
      class="create-lobby-formular-create-lobby button"
    >
      {{ CreateLobby }}
    </router-link>
    <span class="create-lobby-formular-gruppenname1">{{ GruppennameText }}</span>
    <span class="create-lobby-formular-gruppenname2">{{ SpielernameText }}</span>
  </div>
</template>

<script>
export default {
  name: 'CreateLobbyFormular',
  props: {
    CreateLobby: {
      type: String,
      default: 'Create Lobby',
    },
    rootClassName: String,
    Gruppenname: {
      type: String,
      default: 'Geben Sie für ihre Gruppe einen Namen ein',
    },
    Spielername: {
      type: String,
      default: 'Geben sie Ihren Spielernamen ein',
    },
    GruppennameText: {
      type: String,
      default: 'Gruppenname:',
    },
    SpielernameText: {
      type: String,
      default: 'Spielername:',
    },
  },
}
</script>

<style scoped>
.create-lobby-formular-container {
  width: 720px;
  height: 290px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.create-lobby-formular-gruppenname {
  top: 35px;
  left: 0px;
  right: 0px;
  width: 720px;
  height: 70px;
  margin: auto;
  padding: var(--dl-space-space-halfunit);
  position: absolute;
  font-size: 24px;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-500);
  border-width: 3px;
}
.create-lobby-formular-spielername {
  top: 145px;
  right: -3px;
  width: 720px;
  height: 70px;
  padding: var(--dl-space-space-halfunit);
  position: absolute;
  font-size: 24px;
  text-align: left;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-500);
  border-width: 3px;
}
.create-lobby-formular-create-lobby {
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
.create-lobby-formular-gruppenname1 {
  top: 0px;
  left: 0px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}
.create-lobby-formular-gruppenname2 {
  top: 110px;
  left: 0px;
  position: absolute;
  font-size: 24px;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 700;
}
.create-lobby-formular-root-class-name {
  top: 300px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
  align-self: center;
}
</style>
