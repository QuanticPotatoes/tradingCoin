<template>
    <v-container fluid class="pa-0">
        <div id="presentation_bg" class="elevation-5">
        </div>
        <v-flex xs10 sm8 md5 lg10 class="" style="">
                <transition name="fade">
                    <v-card id="presentation_text" class="transparent animated fadeInUp elevation-0">
                        <v-card-text>
                        <h3>Une application de trading</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Optio deserunt laudantium tempora alias veritatis distinctio,
                            inventore reiciendis ipsa sequi vitae reprehenderit ea recusandae labore quo molestiae tempore at quos! Voluptate!
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Optio deserunt laudantium tempora alias veritatis distinctio,
                            inventore reiciendis ipsa sequi vitae reprehenderit ea recusandae labore quo molestiae tempore at quos! Voluptate!
                        </p>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn>
                                en savoir plus
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </transition>
            </v-flex>
            <div class="transparent lg-hidden-only" id="presentation_robot">
                <img src="public/exploite.png" alt="">
            </div>
        </v-flex>
        <section id="chart-section">
            <v-card>
                coucou
            </v-card>
        </section>
    </v-container>
</template>

<script>
  import particlesJS from 'particle.js';

  export default {
    data() {
      return {
          icon: true
      };
    },
    methods: {
        click() {
            this.icon = !this.icon
        }
    },
    mounted() {
    },
  };

</script>

<style>
#presentation_bg {
    background-image: radial-gradient(at 0% 0%, #00278f 0%, #00bfc9 90%);
    /* transform: skewY(-6deg); */
    transform: skewY(-4.5deg);
    transform-origin: top left;
    display: block;
    height: 800px;
    width: 100%;
    margin-top: -150px; 
    position: absolute;

}

@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}

#presentation_robot {
    width: 600px;
    animation: float 6s ease-in-out infinite;
    margin-left: 60%;
    padding-top: 50px;
}

#presentation_text {
    width: 600px;
    position: absolute;
    margin-left: 10%;
    margin-top: 10%;
    font-family: 'Roboto', sans-serif;
    animation-duration: 1s;
    animation-delay: 0.5s;
    color: white;


}

#chart-section {
    background: black;
    margin-top: 1050px;
}

#presentation_robot img {
    width: 100%;
}
</style>

