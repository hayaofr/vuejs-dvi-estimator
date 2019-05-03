<template>
    <b-form  @submit="onSubmit" class="editForm" novalidate>
        <div class="tab-pane fade in active">
            <h4 class="head text-center">Estimation à vue de nez</h4>
            <br/>
            <div class='row'>
                <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                    <b-form-group
                            id="vuedenez"
                            label="Estimation à Vue de Nez (J/H)"
                            label-for="vuedenezId">
                        <b-form-input
                                id="vuedenezId"
                                v-model="vuedenez"
                                type="text"
                                required
                                :state="validation"
                                placeholder="Estimation Vue de Nez"
                        ></b-form-input>
                        <div class="alert alert-danger" v-show="!validation" >L'estimation est nécessaire</div>
                    </b-form-group>

                    <div class="form-group text-center">
                        <b-button class="btn btn-success btn-outline-rounded btn-info"  :disabled="!validation"
                                @click="goToNext" type="button"> Suivant <span style="margin-left:10px;"
                                                                                              class="glyphicon glyphicon-arrow-right"></span>
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </b-form>

</template>

<script>

    export default {

        components: {

        },
        computed: {
            vuedenez: {
                get() {
                    return this.$store.state.vuedenez;
                },
                set(value) {
                    this.$store.commit("setVuedenez", value);
                }
            }
            ,
            validation() {
                return !isNaN(parseFloat(this.$store.state.vuedenez)) && isFinite(this.$store.state.vuedenez);
            },
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
            },
            goToNext() {
                this.$router.push("/techno/");
            }

        }
    };

</script>

<style scoped>

</style>


