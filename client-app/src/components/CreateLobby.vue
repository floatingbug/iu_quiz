<script setup>

</script>

<template>
    <div class="container">
        <div class="container-input">
            <label for="groupname">Gruppennamen:</label>
            <input type="text">
        </div>
        <div class="container-input">
            <label for="playername">Spielername:</label>
            <input type="text">
        </div>
        <div class="container-input input-button">
            <button>Create Lobby</button>
        </div>
    </div>
</template>


<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 15vh;
    margin-top: 10vh;
    margin-left: 10vw;
}

.container-input {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    width: 0;
    min-width: 200px;
    height: 2.5vh;
    flex:1;
}

label {
    font-size: 1.4rem;
    flex:1;
    text-align: right;
    padding-right: 1vw;
}

.input-button button{
    width: 50%;
    height: 50%;
    font-size: 1rem;
}

@media(max-width: 935px){
    .container-input{
        flex-direction: column;
        align-items: flex-start;
    }
    .container{
        width: 80%;
        height: 20vh;
        align-items: flex-start;
    }
        label{
        text-align: left;
    }
    input{
        width: 50%;
    }
    .input-button button{
        width: 50%;
    }
}
</style>
