<script setup></script>

<template>
    <div class="container">
        <div class="footer">
            <p>Entwickler: David, Thomas, Ehsan, Nico, Pierre, Daniel</p>
            <p>Wir weisen darauf hin das es sich hierbei um einen Prototypen handelt</p>
            <p>Funktionen und Haptik können andere Ergebnise erzielen als erwünscht!</p>
            <div class="container-links">
                <router-link to="/impressum">Impressum</router-link>
                <router-link to="/feedback">Feedback geben</router-link>
                <router-link to="/hilfe">Hilfe</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
	position: relative;
    width: 100%;
    height: 13%;
	bottom: 0px;
}

.footer {
    width: 100%;
    height: 100%;
    bottom: 0px;
    background-color: #00a7b5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 18px;
}

p {
    display: flex;
    justify-content: center;
    font-weight: 700;
    color: black;
}

.container-links {
    display: flex;
    justify-content: space-evenly;
    font-size: 16px;
    margin-bottom: 10px;
}

.container-links > a {
    text-decoration: none;
    color: white;
    font-size: 110%;
    font-weight: bold;
}

@media(max-width: 460px) {
    .footer {
        font-size: 0.7rem;
        padding-left: 10px;
        padding-right: 10px;
    }

    .container-links {
        font-size: 0.7rem;
        padding-left: 10px;
        padding-right: 10px;
    }

}
</style>
