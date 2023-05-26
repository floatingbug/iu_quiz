<script setup>
<<<<<<< HEAD
</script>

<template>
    <div class="container">
        <img src="../assets/logo.png" alt="LOGO">
        <div class="btn-container-1">
            <button>Quiz Starten</button>
        </div>
    </div>
</template>

<style scoped>
.container{
    position: relative;
    height: 50vh;
}

.btn-container-1 {
    position: absolute;
    min-width: 200px;
    width: 30%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10vh;
} 

button {
    width: 100%;
}

img {
    position: absolute;
    min-width: 200px;
    max-width: 80vw;
    left: 50%;
    transform: translateX(-50%);
}
</style>
=======
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
>>>>>>> server
