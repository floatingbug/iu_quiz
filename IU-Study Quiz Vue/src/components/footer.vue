<template>
  <nav class="footer-nav" v-bind:class="rootClassName">
    <router-link to="/impressum" class="footer-impressum">
      {{ Impressum }}
    </router-link>
    <router-link to="/feedback-geben" class="footer-feedback-geben">
      {{ FeedbackGeben }}
    </router-link>
    <router-link to="/hilfe" class="footer-hilfe">{{ Hilfe }}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    FeedbackGeben: {
      type: String,
      default: 'Feedback geben',
    },
    Impressum: {
      type: String,
      default: 'Impressum',
    },
    rootClassName: String,
    Hilfe: {
      type: String,
      default: 'Hilfe',
    },
  },
}
</script>

<style scoped>
.footer-nav {
  flex: 0 0 auto;
  width: 1040px;
  height: 35px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.footer-impressum {
  color: var(--dl-color-gray-white);
  width: 400px;
  height: 30px;
  font-size: 16px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 2;
  margin-left: 0px;
  text-decoration: none;
}
.footer-feedback-geben {
  color: var(--dl-color-gray-white);
  width: 400px;
  height: 30px;
  font-size: 16px;
  font-style: normal;
  text-align: center;
  font-family: Open Sans;
  font-weight: 700;
  line-height: 2;
  margin-left: var(--dl-space-space-sixunits);
  text-decoration: none;
}
.footer-hilfe {
  color: var(--dl-color-gray-white);
  width: 400px;
  height: 30px;
  font-size: 16px;
  align-self: center;
  font-style: normal;
  text-align: center;
  font-weight: 700;
  line-height: 2;
  margin-left: var(--dl-space-space-sixunits);
  text-decoration: none;
  animation-fill-mode: var(--dl-color-primary-500);
}
.footer-root-class-name {
  align-self: center;
}
.footer-root-class-name1 {
  align-self: center;
}
.footer-root-class-name2 {
  align-self: center;
}
.footer-root-class-name3 {
  align-self: center;
}
.footer-root-class-name4 {
  align-self: center;
}
.footer-root-class-name5 {
  align-self: center;
}
.footer-root-class-name6 {
  align-self: center;
}
.footer-root-class-name7 {
  align-self: center;
}
.footer-root-class-name8 {
  align-self: center;
}
.footer-root-class-name9 {
  align-self: center;
}
.footer-root-class-name10 {
  align-self: center;
}
.footer-root-class-name11 {
  align-self: center;
}
.footer-root-class-name12 {
  align-self: center;
}
.footer-root-class-name13 {
  align-self: center;
}
.footer-root-class-name14 {
  align-self: center;
}
.footer-root-class-name15 {
  align-self: center;
}
.footer-root-class-name16 {
  align-self: center;
}
.footer-root-class-name17 {
  align-self: center;
}
.footer-root-class-name18 {
  align-self: center;
}
.footer-root-class-name19 {
  align-self: center;
}
.footer-root-class-name20 {
  align-self: center;
}
.footer-root-class-name21 {
  align-self: center;
}
.footer-root-class-name22 {
  align-self: center;
}
.footer-root-class-name23 {
  align-self: center;
}
.footer-root-class-name24 {
  align-self: center;
}
.footer-root-class-name25 {
  align-self: center;
}
.footer-root-class-name26 {
  align-self: center;
}
.footer-root-class-name27 {
  align-self: center;
}
.footer-root-class-name28 {
  align-self: center;
}
.footer-root-class-name29 {
  align-self: center;
}
.footer-root-class-name30 {
  align-self: center;
}
.footer-root-class-name31 {
  align-self: center;
}
.footer-root-class-name32 {
  align-self: center;
}
@media(max-width: 767px) {
  .footer-nav {
    align-items: flex-start;
    flex-direction: column;
  }
  .footer-impressum {
    margin-bottom: var(--dl-space-space-unit);
  }
  .footer-feedback-geben {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
  .footer-hilfe {
    margin-left: 0;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
