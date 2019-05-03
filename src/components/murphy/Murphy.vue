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
                this.$router.push("/result/");
            }

        }
    };

</script>

<style scoped>

</style>
