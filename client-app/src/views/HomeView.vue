<script setup>
</script>

<template>
    <div class="container">
        <div class="logo-container">
            <div class="logo">
                <img src="../assets/logo.png" alt="LOGO">
            </div>
        </div>
        <div class="btn-container-1">
            <button>Quiz Starten</button>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50vh;
}

.btn-container-1 {
    display: flex;
    justify-content: center;
    margin-top: 200px;
    width: 50%;
    height: 8%;
} 

.btn-container-1 button {
    width: 100%;
    font-size: 1.4rem;
}

.logo-container {
    display: flex;
    justify-content: center;
    margin-top: 20%;
}

@media(max-width: 615px){
    .btn-container-1 {
        width: 90%;
    }

}
</style>
