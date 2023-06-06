<script setup>

</script>


<template>
    <img src="../assets/logo.png" alt="LOGO" />
    <div class="container">
        <p>Geben Sie uns ihr Feedback</p> 
        <div class="container-input">
            <div>
                <input
                    id="username"
                    v-model="UserName"
                    type="text"
                    placeholder="Geben Sie Ihren Namen an"
                    />
            </div>
            <div>
                <input class="large-input"
                    id="text"
                    v-model="Text"
                    type="text"
                    placeholder="Ihr Feedback"
                />
            </div>
        </div>
            <div>
                <button>Absenden</button>
            </div>
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

.container-input{
    width: 100vw;
    height: 20vh;
    display: block;
}

input{
    width: 35vw;
    padding: 2vh;
    margin-top: 0.3vw;
    text-align: left;
}

.large-input{
    padding: 5.5vh;
    text-align: left;
}

button{
    position: relative;
    display: block;
    width: 10vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8%;
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

    input, .large-input {
        width: 80vw;
        margin: 0 auto;
    }

    button {
        width: 50vw;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20%;
    }
}
</style>