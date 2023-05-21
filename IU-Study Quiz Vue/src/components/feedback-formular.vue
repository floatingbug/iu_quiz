<template>
  <div class="feedback-formular-container" v-bind:class="rootClassName">
    <input
      type="text"
      name="Name Feedback"
      required
      :placeholder="NameFeedback"
      class="feedback-formular-name input"
    />
    <input
      type="text"
      name="Name Feedback"
      required
      :placeholder="FeedbackText"
      class="feedback-formular-feedback input"
    />
    <button type="submit" class="feedback-formular-absenden button">
      {{ Absenden }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'FeedbackFormular',
  props: {
    FeedbackText: {
      type: String,
      default: 'Ihr Feedback',
    },
    rootClassName: String,
    Absenden: {
      type: String,
      default: 'Absenden',
    },
    NameFeedback: {
      type: String,
      default: 'Geben Sie ihren Namen an',
    },
  },
}
</script>

<style scoped>
.feedback-formular-container {
  width: 720px;
  height: 410px;
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
}
.feedback-formular-name {
  width: 720px;
  height: 95px;
  padding: var(--dl-space-space-halfunit);
  font-size: 24px;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-500);
  border-width: 3px;
}
.feedback-formular-feedback {
  top: 110px;
  right: -3px;
  width: 720px;
  height: 234px;
  padding: var(--dl-space-space-halfunit);
  position: absolute;
  font-size: 24px;
  text-align: left;
  font-family: Open Sans;
  border-color: var(--dl-color-gray-500);
  border-width: 3px;
}
.feedback-formular-absenden {
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
.feedback-formular-root-class-name {
  top: 360px;
  left: 0px;
  right: 0px;
  margin: auto;
  position: absolute;
}
</style>
