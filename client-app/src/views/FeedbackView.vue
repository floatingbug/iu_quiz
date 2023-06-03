<script setup>
</script>


<template>
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
                <div>
                    <button>Absenden</button>
                </div>
        </div>
    </div>
</template>


<style scoped>
.container{
    position: relative;
    top: 0;
    display: block;
    text-align: center;
    justify-content: center;
    color:black;
   
}

p{
    font-weight: 700;
    font-size:xx-large;
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
    padding: 9vh;
    text-align: left;
}

button{
    position: relative;
    width: 10vw;
    left: 32.5vw;
    margin-top: 1vw;
}
</style>