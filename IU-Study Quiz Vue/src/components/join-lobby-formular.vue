<template>
  <div class="join-lobby-formular-container" v-bind:class="rootClassName">
    <input
      type="text"
      name="Name Feedback"
      required
      :placeholder="LobbyID"
      class="join-lobby-formular-spielername input"
    />
    <router-link
      to="/gruppenspiel"
      class="join-lobby-formular-create-lobby button"
    >
      {{ JoinLobby }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'JoinLobbyFormular',
  props: {
    rootClassName: String,
    LobbyID: {
      type: String,
      default: 'Lobby ID',
    },
    JoinLobby: {
      type: String,
      default: 'Join lobby',
    },
  },
}
</script>

<style scoped>
.join-lobby-formular-container {
  width: 720px;
  height: 150px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.join-lobby-formular-spielername {
  top: 0px;
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
.join-lobby-formular-create-lobby {
  left: 0px;
  width: 410px;
  bottom: 0px;
  height: 60px;
  margin: auto;
  position: absolute;
  font-size: 20px;
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
.join-lobby-formular-root-class-name {
  top: 310px;
  left: 40px;
  position: absolute;
}
</style>
