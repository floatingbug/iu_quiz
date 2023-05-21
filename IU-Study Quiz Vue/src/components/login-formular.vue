<template>
  <div class="login-formular-container" v-bind:class="rootClassName">
    <input
      type="email"
      name="Name Feedback"
      required
      :placeholder="EmailadresseLogin"
      class="login-formular-e-mail-adresse input"
    />
    <input
      type="password"
      name="Name Feedback"
      required
      :placeholder="Passwort"
      class="login-formular-passwort input"
    />
    <span class="login-formular-e-mail-adress">{{ Email }}</span>
    <span class="login-formular-passwort1">{{ Passwort1 }}</span>
    <router-link to="/home-eingeloggt" class="login-formular-einloggen button">
      {{ Einloggen }}
    </router-link>
    <router-link to="/registrieren" class="login-formular-registrieren button">
      {{ Registrieren }}
    </router-link>
    <button type="button" class="login-formular-passwort-vergessen button">
      {{ PasswortVergessen }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LoginFormular',
  props: {
    Passwort: {
      type: String,
      default: 'Passwort',
    },
    Email: {
      type: String,
      default: 'E-Mail Adresse',
    },
    PasswortVergessen: {
      type: String,
      default: 'Passwort vergessen?',
    },
    Einloggen: {
      type: String,
      default: 'Einloggen',
    },
    Registrieren: {
      type: String,
      default: 'Registrieren',
    },
    EmailadresseLogin: {
      type: String,
      default: 'E-Mail Adresse',
    },
    Passwort1: {
      type: String,
      default: 'Passwort',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.login-formular-container {
  width: 800px;
  height: 323px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.login-formular-e-mail-adresse {
  top: 40px;
  left: 0px;
  width: 800px;
  height: 65px;
  padding: var(--dl-space-space-halfunit);
  position: absolute;
  font-size: 24px;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-500);
  border-width: 3px;
}
.login-formular-passwort {
  top: 145px;
  left: 0px;
  width: 800px;
  bottom: bottom;
  height: 65px;
  padding: var(--dl-space-space-halfunit);
  position: absolute;
  font-size: 24px;
  text-align: left;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-500);
  border-width: 3px;
}
.login-formular-e-mail-adress {
  top: 5px;
  left: 1px;
  position: absolute;
  font-size: 24px;
  font-family: Open Sans;
}
.login-formular-passwort1 {
  top: 110px;
  left: 1px;
  position: absolute;
  font-size: 24px;
  font-family: Open Sans;
}
.login-formular-einloggen {
  left: 1px;
  width: 155px;
  bottom: 0px;
  height: 50px;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.4;
  border-width: 4px;
  border-radius: 15px;
  text-decoration: none;
  background-color: #00a7b5;
}
.login-formular-registrieren {
  right: 0px;
  width: 200px;
  bottom: 0px;
  height: 50px;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.4;
  border-width: 4px;
  border-radius: 15px;
  text-decoration: none;
  background-color: #00a7b5;
}
.login-formular-passwort-vergessen {
  right: 0px;
  width: 250px;
  bottom: 60px;
  height: 35px;
  position: absolute;
  font-size: 20px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.4;
  border-width: 0px;
  border-radius: 0px;
  background-color: transparent;
}
.login-formular-root-class-name {
  top: 150px;
  right: 40px;
  position: absolute;
}
</style>
