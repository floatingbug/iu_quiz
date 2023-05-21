import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import KoopQuizNachLetzterFrage from './views/koop-quiz-nach-letzter-frage'
import Home from './views/home'
import EinzelQuizRichtigeAntwort from './views/einzel-quiz-richtige-antwort'
import KollaQuizErgebnis from './views/kolla-quiz-ergebnis'
import EinzelQuizLetzteFrage from './views/einzel-quiz-letzte-frage'
import KoopQuizErgebnis from './views/koop-quiz-ergebnis'
import Registrieren from './views/registrieren'
import Impressum from './views/impressum'
import KoopQuizRichtigeAntwort from './views/koop-quiz-richtige-antwort'
import KollaQuizRichtigeAntwort from './views/kolla-quiz-richtige-antwort'
import Scoreboard from './views/scoreboard'
import CreateLobby from './views/create-lobby'
import KoopQuizLetzteFrage from './views/koop-quiz-letzte-frage'
import EinzelQuizSpieleinstellungen from './views/einzel-quiz-spieleinstellungen'
import KollaQuizLetzteFrage from './views/kolla-quiz-letzte-frage'
import Lobby from './views/lobby'
import KoopQuizFragen from './views/koop-quiz-fragen'
import EinzelQuizNachLetzterFrage from './views/einzel-quiz-nach-letzter-frage'
import KoopQuizSpieleinstellungen from './views/koop-quiz-spieleinstellungen'
import JoinLobby from './views/join-lobby'
import AdminBereich from './views/admin-bereich'
import Gruppenspiel from './views/gruppenspiel'
import KollaQuizNachLetzterFrage from './views/kolla-quiz-nach-letzter-frage'
import FeedbackGeben from './views/feedback-geben'
import EinzelQuizFragen from './views/einzel-quiz-fragen'
import Hilfe from './views/hilfe'
import EinzelQuizErgebnis from './views/einzel-quiz-ergebnis'
import HomeEingeloggt from './views/home-eingeloggt'
import KollaQuizSpieleinstellungen from './views/kolla-quiz-spieleinstellungen'
import Login from './views/login'
import KollaQuizFragen from './views/kolla-quiz-fragen'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Koop-Quiz-nach-letzter-Frage',
      path: '/koop-quiz-nach-letzter-frage',
      component: KoopQuizNachLetzterFrage,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Einzel-Quiz-richtige-Antwort',
      path: '/einzel-quiz-richtige-antwort',
      component: EinzelQuizRichtigeAntwort,
    },
    {
      name: 'Kolla-Quiz-Ergebnis',
      path: '/kolla-quiz-ergebnis',
      component: KollaQuizErgebnis,
    },
    {
      name: 'Einzel-Quiz-letzte-Frage',
      path: '/einzel-quiz-letzte-frage',
      component: EinzelQuizLetzteFrage,
    },
    {
      name: 'Koop-Quiz-Ergebnis',
      path: '/koop-quiz-ergebnis',
      component: KoopQuizErgebnis,
    },
    {
      name: 'Registrieren',
      path: '/registrieren',
      component: Registrieren,
    },
    {
      name: 'Impressum',
      path: '/impressum',
      component: Impressum,
    },
    {
      name: 'Koop-Quiz-richtige-Antwort',
      path: '/koop-quiz-richtige-antwort',
      component: KoopQuizRichtigeAntwort,
    },
    {
      name: 'Kolla-Quiz-richtige-Antwort',
      path: '/kolla-quiz-richtige-antwort',
      component: KollaQuizRichtigeAntwort,
    },
    {
      name: 'Scoreboard',
      path: '/scoreboard',
      component: Scoreboard,
    },
    {
      name: 'Create-Lobby',
      path: '/create-lobby',
      component: CreateLobby,
    },
    {
      name: 'Koop-Quiz-letzte-Frage',
      path: '/koop-quiz-letzte-frage',
      component: KoopQuizLetzteFrage,
    },
    {
      name: 'Einzel-Quiz-Spieleinstellungen',
      path: '/einzel-quiz-spieleinstellungen',
      component: EinzelQuizSpieleinstellungen,
    },
    {
      name: 'Kolla-Quiz-letzte-Frage',
      path: '/kolla-quiz-letzte-frage',
      component: KollaQuizLetzteFrage,
    },
    {
      name: 'Lobby',
      path: '/lobby',
      component: Lobby,
    },
    {
      name: 'Koop-Quiz-Fragen',
      path: '/koop-quiz-fragen',
      component: KoopQuizFragen,
    },
    {
      name: 'Einzel-Quiz-nach-letzter-Frage',
      path: '/einzel-quiz-nach-letzter-frage',
      component: EinzelQuizNachLetzterFrage,
    },
    {
      name: 'Koop-Quiz-Spieleinstellungen',
      path: '/koop-quiz-spieleinstellungen',
      component: KoopQuizSpieleinstellungen,
    },
    {
      name: 'Join-Lobby',
      path: '/join-lobby',
      component: JoinLobby,
    },
    {
      name: 'Admin-Bereich',
      path: '/admin-bereich',
      component: AdminBereich,
    },
    {
      name: 'Gruppenspiel',
      path: '/gruppenspiel',
      component: Gruppenspiel,
    },
    {
      name: 'Kolla-Quiz-nach-letzter-Frage',
      path: '/kolla-quiz-nach-letzter-frage',
      component: KollaQuizNachLetzterFrage,
    },
    {
      name: 'Feedback-geben',
      path: '/feedback-geben',
      component: FeedbackGeben,
    },
    {
      name: 'Einzel-Quiz-Fragen',
      path: '/einzel-quiz-fragen',
      component: EinzelQuizFragen,
    },
    {
      name: 'Hilfe',
      path: '/hilfe',
      component: Hilfe,
    },
    {
      name: 'Einzel-Quiz-Ergebnis',
      path: '/einzel-quiz-ergebnis',
      component: EinzelQuizErgebnis,
    },
    {
      name: 'Home-eingeloggt',
      path: '/home-eingeloggt',
      component: HomeEingeloggt,
    },
    {
      name: 'Kolla-Quiz-Spieleinstellungen',
      path: '/kolla-quiz-spieleinstellungen',
      component: KollaQuizSpieleinstellungen,
    },
    {
      name: 'Login',
      path: '/login',
      component: Login,
    },
    {
      name: 'Kolla-Quiz-Fragen',
      path: '/kolla-quiz-fragen',
      component: KollaQuizFragen,
    },
  ],
})
