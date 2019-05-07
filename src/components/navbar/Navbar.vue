<template>
    <div>
        <div class="board-inner" id="status-buttons">
            <ul class="nav nav-tabs" id="myTab">
                <div class="liner"></div>

                <!-- circular user icon -->
                <li>
                    <router-link exact to="/vuedenez" active-class="active">
                        <span class="round-tabs one">
                            <i class="glyphicon glyphicon-scale"></i>
                        </span>
                    </router-link>
                </li>
                <!-- circular user icon -->
                <li>
                    <router-link exact to="/techno" active-class="active">
                        <span class="round-tabs two">
                            <i class="glyphicon glyphicon-heart"></i>
                        </span>
                    </router-link>
                </li>
                <!-- circular user icon -->
                <li>
                    <router-link exact to="/confiance" active-class="active">
                        <span class="round-tabs three">
                            <i class="glyphicon glyphicon-file"></i>
                        </span>
                    </router-link>
                </li>
                <!-- circular user icon -->
                <li>
                    <router-link exact to="/murphy" active-class="active">
                        <span class="round-tabs four">
                            <i class="glyphicon glyphicon-refresh"></i>
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link exact to="/result" active-class="active">
                        <span class="round-tabs five">
                            <i class="glyphicon glyphicon-calendar"></i>
                        </span>
                    </router-link>
                </li>
            </ul>
            <div class="clearfix"></div>
        </div>

    </div>

</template>

<script>

    export default {
        name: "navbar",

        components: {},
        computed: {}
    };


</script>

<style scoped>

</style>
