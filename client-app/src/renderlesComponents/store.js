import { reactive } from 'vue'

const store = reactive({
    isLoggedIn: false,
    loggedInAsAdmin: false
})

export { store }
