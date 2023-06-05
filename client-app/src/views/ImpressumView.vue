<script setup>
</script>


<template>
    <img src="../assets/logo.png" alt="LOGO" />
    <div class="container">
        <p>Die IU-Study Quiz Anwendung ist im Rahmen einer Projektarbeit von</p> 
        <p>David, Thomas, Ehsan, Nico, Pierre und Daniel erstellt worden. </p>
        <p>Geschäftsadresse der IU Internationale Hochschule: </p>
        <p>IU Internationale Hochschule GmbH </p>
        <p>Juri-Gagarin-Ring 152 </p>
        <p>D-99084 Erfurt </p>
        <p>Geschäftsführung: Dr. Carmen Thoma, Prof. Dr. Holger Sommerfeldt, Dr. Sven Schütt </p>
        <p>Amtsgericht Jena </p>
        <p>RB 516133Ust-ID: DE259481187 </p>
        <p>Kontakt Aufnahme kann über info@iu-study-quiz.org oder das Kontaktformular erfolgen.</p>
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
                <input
                    id="email"
                    v-model="EMail"
                    type="email"
                    placeholder="E-Mail Adresse"
                    />
            </div>
            <div>
                <input class="large-input"
                    id="text"
                    v-model="Text"
                    type="text"
                    placeholder="Ihre Nachricht"
                />
            </div>
        </div>
            <div>
                <button>Senden</button>
            </div>
    </div>
</template>


<style scoped>
.container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color:black;
    padding-bottom: 2%;
}

p{
    font-weight: 700;
    font-size: larger;
}

.container-input{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    display: block;
    width: 10vw;
    margin-top: 2vh;
    margin-bottom: 30%;
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
    input, .large-input {
        width: 80vw;
        margin: 0 auto;
    }

    button {
        width: 50vw;
        margin-bottom: 40%;
    }
}
</style>


