<template>
    <div id="app">
        <!--<Home id="home"/>-->
        <!--<Oeuvre id="oeuvre"/>-->
        <Joconde/>
    </div>
</template>

<script>
    //import Home from "./components/Home";
    //import Oeuvre from "./components/Oeuvre";
    import Joconde from "./components/oeuvres/Joconde";


    export default {
        name: 'App',
        components: {
            // Home,
            //Oeuvre,
            Joconde
        }
    }
</script>

