<template>
    <b-form @submit="onSubmit" class="editForm" novalidate>
        <div class="tab-pane fade in active">
            <h4 class="head text-center">Votre maîtrise de la techno</h4>
            <br/>
            <div class='row'>
                <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                    <b-form-group
                            id="techno"
                            label="Votre maitrise de la technologie"
                            label-for="technoId">

                        <b-form-select class="form-control input-md" :state="true" v-model="techno" :plain="true" id="technoId">
                            <option value="0">Je suis une bille</option>
                            <option value="1">Entre deux eaux</option>
                            <option value="2">Je pratique tous les matins au ptit dej</option>
                        </b-form-select>

                    </b-form-group>
                    <div class="form-group text-center">
                        <b-button class="btn btn-success btn-outline-rounded btn-info"
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

        components: {},
        computed: {
            techno: {
                get() {
                    return this.$store.state.techno;
                },
                set(value) {
                    this.$store.commit("setTechno", value);
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
            },
            goToNext() {
                this.$router.push("/confiance/");
            }

        }
    };

</script>

<style scoped>

</style>
