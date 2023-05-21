<template>
  <div class="registrieren-formular-container" v-bind:class="rootClassName">
    <input
      type="email"
      name="Name Feedback"
      required
      :placeholder="EmailadresseLogin"
      class="registrieren-formular-e-mail input"
    />
    <input
      type="password"
      name="Name Feedback"
      required
      :placeholder="PasswortBestaetigen1"
      class="registrieren-formular-passwort input"
    />
    <input
      type="password"
      name="Name Feedback"
      required
      :placeholder="Passwort"
      class="registrieren-formular-passwort1 input"
    />
    <span class="registrieren-formular-e-mail-adress">{{ Email }}</span>
    <span class="registrieren-formular-passwort-besttigen">
      {{ PasswortBestaetigen }}
    </span>
    <span class="registrieren-formular-passwort2">{{ Passwort11 }}</span>
    <router-link
      to="/home-eingeloggt"
      class="registrieren-formular-registrieren button"
    >
      {{ Registrieren }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RegistrierenFormular',
  props: {
    EmailadresseLogin: {
      type: String,
      default: 'E-Mail Adresse',
    },
    PasswortBestaetigen: {
      type: String,
      default: 'Passwort bestätigen',
    },
    PasswortVergessen: {
      type: String,
      default: 'Passwort vergessen?',
    },
    Email: {
      type: String,
      default: 'E-Mail Adresse',
    },
    Passwort: {
      type: String,
      default: 'Passwort',
    },
    Einloggen: {
      type: String,
      default: 'Einloggen',
    },
    PasswortBestaetigen1: {
      type: String,
      default: 'Passwort bestätigen',
    },
    Passwort11: {
      type: String,
      default: 'Passwort',
    },
    Registrieren: {
      type: String,
      default: 'Registrieren',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.registrieren-formular-container {
  width: 800px;
  height: 381px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.registrieren-formular-e-mail {
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
.registrieren-formular-passwort {
  top: 250px;
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
.registrieren-formular-passwort1 {
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
.registrieren-formular-e-mail-adress {
  top: 5px;
  left: 1px;
  position: absolute;
  font-size: 24px;
  font-family: Open Sans;
}
.registrieren-formular-passwort-besttigen {
  top: 220px;
  left: 1px;
  position: absolute;
  font-size: 24px;
  font-family: Open Sans;
}
.registrieren-formular-passwort2 {
  top: 110px;
  left: 1px;
  position: absolute;
  font-size: 24px;
  font-family: Open Sans;
}
.registrieren-formular-registrieren {
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
.registrieren-formular-root-class-name {
  top: 150px;
  right: 40px;
  position: absolute;
}
</style>
