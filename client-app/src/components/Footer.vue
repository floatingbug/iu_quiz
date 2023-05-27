<script setup>

</script>

<template>
    <div class="container">
        <div class="footer">
            <p>Entwickler: David, Thomas, Ehsan, Nico, Pierre, Daniel</p>
            <div class="container-links">
                <router-link to="/impressum">Impressum</router-link>
                <router-link to="/feedback">Feedback geben</router-link>
                <router-link to="/help">Hilfe</router-link>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    position: relative;
    height: 52%;
}

.footer {
    position: absolute;
    width: 100%;
    height: 15%;
    top: 37%;
    background-color: #00a7b5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

p {
    display: flex;
    justify-content: center;
    font-weight: 700;
    color:black;
    font-size: 125%;
}

.container-links {
    display: flex;
    justify-content: space-evenly;
}

.container-links>a {
    text-decoration: none;
    color: white;
    font-size: 125%;
}
</style>
