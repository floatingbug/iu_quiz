<script setup>
import Scoreboard from '../components/Scoreboard.vue'
</script>

<template>
    <div class="container">
        <button>Einzel</button>
        <button>Kooperativ</button>
        <button>Kollaborativ</button>        
    </div>

    <div class="container1">
        <Scoreboard/>
    </div>
</template>

<style scoped>
.container{
    position: relative;
    top: -1.5vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10%;
}    
button{
    min-width: 30px;
    width: 100%;
    margin: 0.5%;
}

@media (min-width: 600px) { 
  .container button {
    width: 50%;
  }
}

@media (min-width: 900px) { 
  .container button {
    width: 16%; 
  }
}
</style>

