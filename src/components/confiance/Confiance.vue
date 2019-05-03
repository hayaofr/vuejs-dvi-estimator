<template>
    <b-form @submit="onSubmit" class="editForm" novalidate>
        <div class="tab-pane fade in active">
            <h4 class="head text-center">Votre niveau de confiance dans la spec/l'équipe projet</h4>
            <br/>
            <div class='row'>
                <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>
                    <b-form-group
                            id="confiance"
                            label="Votre niveau de confiance dans la spec/l'équipe projet"
                            label-for="confianceId">

                        <b-form-select class="form-control input-md" :state="true" v-model="confiance" :plain="true" id="confianceId">
                            <option value="0">Je sens l'arnaque</option>
                            <option value="1">J'ai un doute mais ça devrait le faire</option>
                            <option value="2">Les yeux fermés</option>
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
            confiance: {
                get() {
                    return this.$store.state.techno;
                },
                set(value) {
                    this.$store.commit("setConfiance", value);
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
            },
            goToNext() {
                this.$router.push("/murphy/");
            }

        }
    };

</script>

<style scoped>

</style>
