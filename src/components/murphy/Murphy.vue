<template>
    <b-form @submit="onSubmit" class="editForm" novalidate>
        <div class="tab-pane fade in active">
            <div class='row'>
                <div class='col'>
                    <VueWinWheel :segments="options"/>
                </div>
                <div class="col">
                    <div class="row murphyrow">
                        <div class="text-center">
                            <h4 v-if="murphy!=0">{{murphy}} : {{libelleMurphy}}</h4>
                        </div>
                    </div>
                    <div class="row murphyrow murphyrowbottom">
                        <div class="form-group text-center">
                            <b-button class="btn btn-success btn-outline-rounded btn-info"
                                      @click="goToNext" type="button"> Suivant <span style="margin-left:10px;"
                                                                                     class="glyphicon glyphicon-arrow-right"></span>
                            </b-button>
                        </div>
                    </div>
                </div>
                <b-modal id="bv-modal-murphy" centered  no-fade hide-footer>
                    <template slot="modal-header">
                        <div class="d-block text-center">
                            <h5>Loi de Murphy en cours d'exécution !</h5>
                        </div>
                    </template>
                    <div class="d-block text-center">
                        <h3><img alt="loading" src="../../assets/images/loading-bars.svg" width="64"
                                 height="64"/></h3>
                    </div>
                </b-modal>
            </div>
        </div>
    </b-form>

</template>

<script>


    import VueWinWheel from '../winwheel/VueWinwheel';

    export default {
        data() {
            return {
                options: [
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text: 'Lot 1'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text: 'Lot 2'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text: 'Lot 3'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text: 'Lot 4'
                    },
                    {
                        textFillStyle: '#fff',
                        fillStyle: '#000',
                        text: 'Lot 5'
                    },
                    {
                        textFillStyle: '#000',
                        fillStyle: '#fadede',
                        text: 'Lot 6'
                    }
                ]
            }
        },
        components: {
            VueWinWheel
        },
        computed: {
            murphy: {
                get() {
                    return this.$store.state.murphy;
                },
                set(value) {
                    this.$store.commit("setMurphy", value);
                }
            },
            libelleMurphy: {
                get() {
                    return this.$store.state.libelleMurphy;
                },
                set(value) {
                    this.$store.commit("setLibelleMurphy", value);
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
            },
            goToNext() {
                this.$bvModal.show("bv-modal-murphy");
                setTimeout(() => {
                    this.$store.commit("computeEstimate");
                    this.$bvModal.hide("bv-modal-murphy");
                    this.$router.push("/result/");
                }, 5000)

            }

        }
    };

</script>

<style scoped>

</style>
