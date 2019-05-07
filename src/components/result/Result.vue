<template>
    <div>
        <div class="tab-pane fade in active">
            <h4 class="head text-center">Résultat de l'estimation</h4>
            <br/>
            <div class='row'>
                <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                    <div class="text-center">
                        {{result}} J/H
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        components: {},
        computed: {
            result: {
                get() {
                    return this.$store.state.result;
                },
                set(value) {
                    this.$store.commit("setResult", value);
                }
            }
        },
        methods: {}
    };

</script>

<style scoped>

</style>
