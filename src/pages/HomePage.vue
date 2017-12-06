<template>
    <v-container fluid class="pa-0">
        <div id="presentation_bg">
        </div>
        <v-flex xs10 sm8 md5 lg10 class="" style="">
            <div class="transparent" id="presentation_robot">
                <img src="public/exploite.png" alt="">
            </div>
        </v-flex>
    </v-container>
</template>

<script>
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
    margin-left: 70%;
    padding-top: 50px;
}

#presentation_robot img {
    width: 100%;
}
</style>

