<script setup>
</script>


<template>
    <img src="../assets/logo.png" alt="LOGO" />
    <div class="container">
        <p>-Um Fragen Einsenden zu können müssen Sie eingeloggt sein.</p> 
        <p>-Hier können weiter Sätze eingefügt werden!.</p>
    </div>
</template>


<style scoped>
.container{
    position: relative;
    display: block;
    text-align: center;
    justify-content: center;
    color:black;
}

p{
    font-weight: 700;
    font-size: larger;
}

img {
    min-width: 180px;
    max-width: 20vw;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
}

@media screen and (max-width: 768px) {
    .container {
        text-align: center;
        padding-bottom: 20%;
    }

}
</style>