<template>
    <div id="app">
        <Home/>
        <Oeuvre/>
    </div>
</template>

<script>
    import Home from "./components/Home";
    import Oeuvre from "./components/Oeuvre";


    export default {
        name: 'App',
        components: {
            Home,
            Oeuvre
        }
    }
</script>

