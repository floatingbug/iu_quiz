<script setup>
</script>

<template>
    <div class="container-lobby">
        <div class="container-logo">
            <div class="logo">
                <img src="" alt="LOGO">
            </div>
        </div>
        <div class="container-btn-1">
            <button>Create Lobby</button>
            <button>Join Lobby</button>
        </div>
    </div>
</template>


<style scoped>
.container-lobby{
    display: flex;
    flex-direction: column;
}

.container-btn-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 10vh;
    margin-top: 10vh;
    margin-left: 10vw;
} 

.container-logo {
    display: flex;
    justify-content: flex-end;
    margin-top: 10vh;
}

.logo {
    margin-right: 10vw;
}

@media(max-width: 604px){
    .container-btn-1{
        margin-left: 0vw;
        align-items: center;
    }

    button{
        width: 80%;
    }
}
</style>
