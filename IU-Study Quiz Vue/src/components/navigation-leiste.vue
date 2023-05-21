<template>
  <nav class="navigation-leiste-nav" v-bind:class="rootClassName">
    <router-link to="/" class="navigation-leiste-home">{{ Home }}</router-link>
    <router-link to="/lobby" class="navigation-leiste-lobby">
      {{ Lobby }}
    </router-link>
    <router-link to="/scoreboard" class="navigation-leiste-scoreboard">
      {{ Scoreboard }}
    </router-link>
    <router-link to="/login" class="navigation-leiste-login">
      {{ Login }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationLeiste',
  props: {
    Scoreboard: {
      type: String,
      default: 'Scoreboard',
    },
    Home: {
      type: String,
      default: 'Home',
    },
    rootClassName: String,
    Lobby: {
      type: String,
      default: 'Lobby',
    },
    Login: {
      type: String,
      default: 'Login',
    },
  },
}
</script>

<style scoped>
.navigation-leiste-nav {
  flex: 0 0 auto;
  width: 1040px;
  height: 58px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.navigation-leiste-home {
  width: 800px;
  height: 50px;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 2;
  margin-left: 0px;
  text-decoration: none;
}
.navigation-leiste-home:hover {
  border-color: var(--dl-color-gray-black);
  border-width: 3px;
  border-radius: 15px;
  background-color: #00a7b5;
}
.navigation-leiste-lobby {
  width: 800px;
  height: 50px;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 2;
  margin-left: var(--dl-space-space-sixunits);
  text-decoration: none;
}
.navigation-leiste-lobby:hover {
  border-color: var(--dl-color-gray-black);
  border-width: 3px;
  border-radius: 15px;
  background-color: #00a7b5;
}
.navigation-leiste-scoreboard {
  width: 800px;
  height: 50px;
  font-size: 24px;
  align-self: center;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-weight: 700;
  line-height: 2;
  margin-left: var(--dl-space-space-sixunits);
  text-decoration: none;
  animation-fill-mode: var(--dl-color-primary-500);
}
.navigation-leiste-scoreboard:hover {
  border-color: var(--dl-color-gray-black);
  border-width: 3px;
  border-radius: 15px;
  background-color: #00a7b5;
}
.navigation-leiste-login {
  width: 800px;
  height: 50px;
  font-size: 24px;
  font-style: normal;
  text-align: center;
  transition: 0.3s;
  font-weight: 700;
  line-height: 2;
  margin-left: var(--dl-space-space-sixunits);
  text-decoration: none;
  animation-fill-mode: var(--dl-color-primary-500);
}
.navigation-leiste-login:hover {
  border-color: var(--dl-color-gray-black);
  border-width: 3px;
  border-radius: 15px;
  background-color: #00a7b5;
}








.navigation-leiste-root-class-name8 {
  align-self: center;
}

.navigation-leiste-root-class-name10 {
  align-self: center;
}
.navigation-leiste-root-class-name12 {
  align-self: center;
}

.navigation-leiste-root-class-name14 {
  align-self: center;
}

.navigation-leiste-root-class-name16 {
  align-self: center;
}

.navigation-leiste-root-class-name18 {
  align-self: center;
}

.navigation-leiste-root-class-name20 {
  align-self: center;
}

.navigation-leiste-root-class-name22 {
  align-self: center;
}

.navigation-leiste-root-class-name24 {
  align-self: center;
}

.navigation-leiste-root-class-name26 {
  align-self: center;
}

.navigation-leiste-root-class-name28 {
  align-self: center;
}

.navigation-leiste-root-class-name30 {
  align-self: center;
}

.navigation-leiste-root-class-name32 {
  align-self: center;
}

.navigation-leiste-root-class-name34 {
  align-self: center;
}

.navigation-leiste-root-class-name36 {
  align-self: center;
}

.navigation-leiste-root-class-name38 {
  align-self: center;
}

.navigation-leiste-root-class-name40 {
  align-self: center;
}

.navigation-leiste-root-class-name42 {
  align-self: center;
}

.navigation-leiste-root-class-name44 {
  align-self: center;
}

.navigation-leiste-root-class-name46 {
  align-self: center;
}

.navigation-leiste-root-class-name48 {
  align-self: center;
}

.navigation-leiste-root-class-name50 {
  align-self: center;
}

.navigation-leiste-root-class-name52 {
  align-self: center;
}

.navigation-leiste-root-class-name54 {
  align-self: center;
}

.navigation-leiste-root-class-name56 {
  align-self: center;
}

.navigation-leiste-root-class-name58 {
  align-self: center;
}

.navigation-leiste-root-class-name60 {
  align-self: center;
}

.navigation-leiste-root-class-name62 {
  align-self: center;
}

.navigation-leiste-root-class-name64 {
  align-self: center;
}

.navigation-leiste-root-class-name66 {
  align-self: center;
}

.navigation-leiste-root-class-name68 {
  align-self: center;
}

.navigation-leiste-root-class-name70 {
  align-self: center;
}

.navigation-leiste-root-class-name72 {
  align-self: center;
}

@media(max-width: 767px) {
  .navigation-leiste-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .navigation-leiste-home {
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-leiste-lobby {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-leiste-scoreboard {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navigation-leiste-login {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
