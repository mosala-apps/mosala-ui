<template>
  <v-app>
    <basic-header/>
    <v-main>
      <div >
        <v-overlay :value="isLoading">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </v-overlay>
      </div>
      <Nuxt/>
    </v-main>
    <basic-footer-desktop/>
    <!-- <mq-layout mq="tablet+">
    <basic-footer-desktop/>
    </mq-layout>
    <mq-layout mq="mobile">
      <basic-footer :is-fixed="fixed"/>
    </mq-layout> -->
  
  </v-app>
</template>
<script>

export default {
  mixins: [],
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      isLoading: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Progerim',
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/main';
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & div {
    position: absolute;
    border: 4px solid $primary-color;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
}

@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
