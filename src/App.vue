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
        },
        data() {
            return {
                contents: [
                    {
                        image: "",
                        titre: "La Joconde",
                        description: "testtesttest ",
                        index: 0
                    },
                    {
                        image: "",
                        titre: "La Venus de Milo",
                        description: "testtesttest ",
                        index: 1
                    },
                    {
                        image: "",
                        titre: "Toutânkhamon",
                        description: "testtesttest ",
                        index: 2
                    },
                    {
                        image: "",
                        titre: "La liberté guidant le peuple",
                        description: "testtesttest ",
                        index: 3
                    },
                ]
            }
        }
    }
</script>

