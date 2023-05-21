<template>
  <div class="nachricht-formular-container" v-bind:class="rootClassName">
    <input
      type="text"
      name="Name Feedback"
      required
      :placeholder="NameNachricht"
      class="nachricht-formular-name input"
    />
    <input
      type="email"
      name="Name Feedback"
      required
      :placeholder="Emailadresse"
      class="nachricht-formular-e-mail input"
    />
    <input
      type="text"
      name="Name Feedback"
      required
      :placeholder="FeedbackText"
      class="nachricht-formular-feedback input"
    />
    <button type="submit" class="nachricht-formular-senden button">
      {{ Senden }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'NachrichtFormular',
  props: {
    Senden: {
      type: String,
      default: 'Senden',
    },
    Emailadresse: {
      type: String,
      default: 'E-Mail Adresse',
    },
    textarea_placeholder: {
      type: String,
      default: 'placeholder',
    },
    NameNachricht: {
      type: String,
      default: 'Geben Sie ihren Namen an',
    },
    FeedbackText: {
      type: String,
      default: 'Ihr Feedback',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.nachricht-formular-container {
  width: 900px;
  height: 348px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.nachricht-formular-name {
  width: 900px;
  height: 70px;
  padding: var(--dl-space-space-halfunit);
  font-size: 24px;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-500);
  border-width: 3px;
}
.nachricht-formular-e-mail {
  top: 90px;
  left: 0px;
  width: 900px;
  height: 70px;
  padding: var(--dl-space-space-halfunit);
  position: absolute;
  font-size: 24px;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-500);
  border-width: 3px;
}
.nachricht-formular-feedback {
  top: 180px;
  right: -3px;
  width: 900px;
  bottom: 80px;
  height: 100px;
  padding: var(--dl-space-space-halfunit);
  position: absolute;
  font-size: 24px;
  text-align: left;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-500);
  border-width: 3px;
}
.nachricht-formular-senden {
  left: 0px;
  width: 250px;
  bottom: 0px;
  height: 50px;
  position: absolute;
  font-size: 18px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 1.5;
  border-width: 4px;
  border-radius: 15px;
  background-color: #00a7b5;
}
.nachricht-formular-root-class-name {
  top: 450px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
