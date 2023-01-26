<template>
    <div class="header" id="header">
      <h2>Mosala</h2>
      <div class="scroll-btn" id="scrollBtn" @click="scrollUp">
        <v-icon color="white">mdi-arrow-up</v-icon>
      </div>
      <div
        class="header-toggle"
        id="btnToggle"
        @click.prevent="handelActive"
      ></div>
  
      <div class="header-nav">
        <a href="#">Accueil</a>
        <a href="#services">Services</a>
        <a href="#about">A propos</a>
        <a href="#skills">Projets</a>
        <a href="#projects">Forum</a>
        <a href="#contact">Contact</a>
      </div>
      <basic-button
      btn-class="btn-primary"
      label="Rejoindre la communaute" />
    </div>
  </template>
  
  <script>
  import { selectHTMLElement } from "@/utils/helpers";
  export default {
    methods: {
      handelScroll(e) {
        e.preventDefault();
        selectHTMLElement("#header").classList.toggle("sticky", window.scrollY > 40);
        selectHTMLElement("#header").classList.toggle("bevhor");
      },
      handelActive() {
        selectHTMLElement("#btnToggle").classList.toggle("active");
        selectHTMLElement(".header-nav").classList.toggle("active");
      },
      removeActiveClass() {
        selectHTMLElement("#btnToggle").classList.remove("active");
        selectHTMLElement(".header-nav").classList.remove("active");
      },
      linksClick() {
        selectHTMLElement(".header-nav a", true).forEach((item) => {
          item.addEventListener("click", this.removeActiveClass);
        });
      },
      handelToUpScroll() {
        selectHTMLElement("#scrollBtn").classList.toggle(
          "active",
          window.scrollY > 500
        );
      },
      scrollUp() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
      revealWebSiteElements() {
        let reveals = selectHTMLElement(".reveal");
        for (let i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let revealTop = reveals[i].getBoundingClientRect().top;
          let revealPoint = 50;
          if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.toggle("active");
          }
        }
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handelScroll);
      window.addEventListener("scroll", this.handelToUpScroll);
      window.addEventListener("scroll", this.revealWebSiteElements);
      this.linksClick();
    },
  };
  </script>
<style lang="scss">
@import '@/assets/main';
.header {
	margin: 0;
	min-height: 5rem;
	z-index: 999;
    position:fixed;
    left:0;
    top:0;
    width:100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color:transparent;
	font-size: 1rem;
	// @include applySectionPadding;
	padding: 0 5.5rem;

a {
    font-weight: 700;
    color: $dark-color !important;
    text-decoration: none;
    margin-left: 1.5rem;

}
 &.sticky{
	transition:background-color .8s;
	background:$white-color;
 }
  &.bevhor{
          transition:all 0.5s;
  }

}
.scroll-btn{
     z-index: 999;
     position: fixed;
     bottom: 5px;
     right: 0;
     background:$secondary-color;
     color:$white-light-color;
     width: 45px;
     height: 45px;
     cursor: pointer;
     font-size :22px;
     text-align: center;
     line-height: 45px;
     border-radius:5px;
     pointer-events: none;
     opacity: 0;
     transition: all 0.5s ease;


}
.scroll-btn.active{
     right: 20px;
     pointer-events: auto;
	 transition: all 0.5s ease-out;
     opacity: 1;
}
.fade-enter-active,.fade-leave-active{
transition: opacity .5s;
}
.fade-enter, .fade-leave{
    opacity: 0;
    transform: translateX(20px);
}

@media screen and (max-width:1023px){
.header{
	padding:1rem;
}

.header-nav{
		display: none;
		&.active{
		z-index: 888;
        position:fixed;
        top: 0;
        right: 0;
		bottom: 0;
        background-color: $white-color;
        display: flex;
        flex-direction: column;
        align-self:space-between;
        justify-content:center;
        width: 100%;
        height: 100%;
        transition: 5s ease;
        text-align: center;
        transition: 0.5s ease-in;
		}
		& a{

        font-size: 1.2em;
        font-weight: 500;
        margin: 1.2rem;

		}

	}

	.header-toggle
	{
            position:relative;
            right:0;
			left: 0;
			bottom: 0;
			top: 20%;
            background:url("../../assets/icons/bars-solid.svg");
            background-size: cover;
            background-position:center;
            height: 40px;
            width: 40px;
            margin:0 20px;
            cursor: pointer;
            transition: 0.3s ease;

    }
	 .header-toggle.active
	 {
        z-index: 999;
		content: "";
        background:url("../../assets/icons/times-solid.svg");
        background-size: cover;
        background-position:center;
        height: 40px;
        width: 40px;
        margin:0 20px;
        transition: 0.3s ease;
        filter: invert(0);
        }

}
  </style>