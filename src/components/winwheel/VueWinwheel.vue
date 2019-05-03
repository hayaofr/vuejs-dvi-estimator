<template>
    <section class="vue-winwheel">
        <div class="mobile-container">
            <div class="wheel-wrapper">
                <div class="canvas-wrapper">
                    <canvas id="canvas" width="210" height="210">
                        <p style="{color: white}" align="center">Sorry, your browser doesn't support canvas. Please try
                            Google Chrome.</p>
                    </canvas>
                </div>
                <div class="button-wrapper">
                    <a class="btn btn-play" href="#" @click.prevent="startSpin()"
                       v-if="!loadingPrize && !wheelSpinning">Lancer!</a>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import * as Winwheel from './Winwheel'

    export default {
        name: 'VueWinWheel',
        props: {
            segments: {
                default() {
                    return [
                        {
                            textFillStyle: '#fff',
                            fillStyle: '#000',
                            text: 'Prize 1'
                        },
                        {
                            textFillStyle: '#000',
                            fillStyle: '#fadede',
                            text: 'Prize 2'
                        },
                        {
                            textFillStyle: '#fff',
                            fillStyle: '#000',
                            text: 'Prize 3'
                        },
                        {
                            textFillStyle: '#000',
                            fillStyle: '#fadede',
                            text: 'Prize 4'
                        },
                        {
                            textFillStyle: '#fff',
                            fillStyle: '#000',
                            text: 'Prize 5'
                        },
                        {
                            textFillStyle: '#000',
                            fillStyle: '#fadede',
                            text: 'Prize 6'
                        },
                        {
                            textFillStyle: '#fff',
                            fillStyle: '#000',
                            text: 'Prize 7'
                        },
                        {
                            textFillStyle: '#000',
                            fillStyle: '#fadede',
                            text: 'Prize 8'
                        }
                    ]
                }
            }
        },
        data() {
            return {
                loadingPrize: false,
                theWheel: null,
                modalPrize: false,
                wheelPower: 1,
                wheelSpinning: false,
                prizeName: 'BUY 1 GET 1',
                WinWheelOptions: {
                    textFontSize: 14,
                    outterRadius: 210,
                    innerRadius: 25,
                    lineWidth: 8,
                    animation: {
                        type: 'spinOngoing',
                        duration: 0.5
                    }
                }
            }
        },
        methods: {
            showPrize() {
                this.modalPrize = true
            },
            hidePrize() {
                this.modalPrize = false
            },
            getLibelleLot(lot) {
                switch(lot) {
                    case "Lot 1":
                        return "Huston, on a un problème !"
                    case "Lot 2":
                        return "Titanic: chantons pendant le naufrage"
                    case "Lot 3":
                        return "Ca passe crème"
                    case "Lot 4":
                        return "Mieux que prévu: les miracles existent"
                    case "Lot 5":
                        return "Syndrôme du batiment:Avec combien de mois de retard votre projet m'sieur ?"
                    case "Lot 6":
                        return "Une spec ? Mais quelle spec ?"
                    default:
                        return "Problème"
                }
            },
            startSpin() {
                if (this.wheelSpinning === false) {
                    this.theWheel.startAnimation()
                    this.wheelSpinning = true
                    this.theWheel = new Winwheel.Winwheel({
                        ...this.WinWheelOptions,
                        numSegments: this.segments.length,
                        segments: this.segments,
                        animation: {
                            type: 'spinToStop',
                            duration: 5,
                            spins: 5,
                            callbackFinished: this.onFinishSpin
                        }
                    })

                    // example input prize number get from Backend
                    // Important thing is to set the stopAngle of the animation before stating the spin.

                    var prizeNumber = Math.floor(Math.random() * this.segments.length) // or just get from Backend
                    var stopAt = 360 / this.segments.length * prizeNumber - 360 / this.segments.length / 2 // center pin
                    // var stopAt = 360 / this.segments.length * prizeNumber - Math.floor(Math.random() * 60) //random location
                    this.theWheel.animation.stopAngle = stopAt
                    this.theWheel.startAnimation()
                    this.wheelSpinning = false
                }
            },
            resetWheel() {
                this.theWheel = new Winwheel.Winwheel({
                    ...this.WinWheelOptions,
                    numSegments: this.segments.length,
                    segments: this.segments
                })

                if (this.wheelSpinning) {
                    this.theWheel.stopAnimation(false) // Stop the animation, false as param so does not call callback function.
                }

                this.theWheel.rotationAngle = 0 // Re-set the wheel angle to 0 degrees.
                this.theWheel.draw() // Call draw to render changes to the wheel.
                this.wheelSpinning = false // Reset to false to power buttons and spin can be clicked again.
            },
            initSpin() {
                this.loadingPrize = true
                this.resetWheel()
                this.loadingPrize = false
            },
            onFinishSpin(indicatedSegment) {
                this.prizeName = indicatedSegment.text
                this.$store.commit("setMurphy", this.prizeName);
                this.$store.commit("setLibelleMurphy",this.getLibelleLot(this.prizeName));
                // this.showPrize()
            }
        },
        computed: {},
        updated() {
        },
        mounted() {
            this.initSpin()
            // this.resetWheel()
        },
        created() {
        }
    }

</script>

<style scoped>
    .vue-winwheel {
        text-align: center;
        background-image: url('/static/img/obstacle-run/bg-spinner-mobile.svg');
        background-size: cover;
        background-position: center bottom;
        background-repeat: no-repeat;
    }

    .vue-winwheel h1 {
        color: #b32656;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 36px;
        line-height: 90px;
        letter-spacing: 4px;
        margin: 0;
    }

    .vue-winwheel h2 {
        margin: 0;
    }

    .vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content {
        width: calc(100vw - 30px);
        padding-top: 52px;
    }

    .vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content h2 {
        text-transform: uppercase;
        color: #b32656;
        margin-bottom: 16px;
        margin-top: 0;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 18px;
        letter-spacing: 1.1px;
        margin: 0;
    }

    .vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content p {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: black;
        text-align: center;
        line-height: 25px;
    }

    .vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content p strong {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    .vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content .modal-dismiss {
        top: 12px;
        right: 12px;
    }

    .vue-winwheel #modalSpinwheel.custom-modal .content-wrapper .content .modal-dismiss i.icon_close {
        font-size: 30px;
        color: #da2a52;
    }

    .vue-winwheel canvas#canvas {
        position: relative;
    }

    .vue-winwheel .canvas-wrapper {
        position: relative;
    }

    .vue-winwheel .canvas-wrapper:after {
        content: '';
        display: block;
        width: 42px;
        background: #c4376f;
        height: 42px;
        position: absolute;
        left: calc(50% - 25px);
        margin: auto;
        border-radius: 100%;
        top: calc(50% - 29px);
        border: 5px solid white;
        box-sizing: content-box;
    }

    .vue-winwheel .canvas-wrapper:before {
        content: '';
        display: block;
        width: 210px;
        background: #0f0f0f;
        height: 210px;
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 100%;
        top: 0;
    }

    .vue-winwheel .wheel-wrapper {
        position: relative;
    }

    .vue-winwheel .wheel-wrapper:before {
        content: '';
        width: 31px;
        height: 23px;
        position: absolute;
        top: -10px;
        left: calc(50% - 15px);
        right: 0;
        display: block;
        z-index: 99999;
        background-image: url('./spinner-marker.svg');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }

    .vue-winwheel .wheel-wrapper .button-wrapper {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 231px;
        height: 118px;
    }

    .vue-winwheel .wheel-wrapper .btn.btn-play {
        padding: 0 58px !important;
        background: #c4376f;
        height: 40px;
        line-height: 40px;
        color: white;
        font-weight: bold;
        text-decoration: none;
        border-radius: 2px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        letter-spacing: 2px;
    }
</style>
