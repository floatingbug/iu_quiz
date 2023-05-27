<script setup>

</script>

<template>
    <div class="container">
        <div class="footer">
            <p>Entwickler: David, Thomas, Ehsan, Nico, Pierre, Daniel</p>
            <div class="container-links">
                <router-link to="/implressum">Impressum</router-link>
                <router-link to="/feedback">Feedback geben</router-link>
                <router-link to="/help">Hilfe</router-link>
            </div>
        </div>
    </div>
</template>


<style scoped>
.container {
    position: relative;
    height: 50%;
}

.footer {
    position: absolute;
    width: 100%;
    height: 15%;
    top: 100%;
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

p {
    display: flex;
    justify-content: center;
}

.container-links {
    display: flex;
    justify-content: space-evenly;
}

.container-links>a {
    text-decoration: none;
    color: black;
}
</style>
