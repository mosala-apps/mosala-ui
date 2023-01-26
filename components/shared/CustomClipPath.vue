<template>
  <!-- <div class="clip-path" :class="[bgColor,clipPath]"></div> -->
  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fadcc998" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,117.3C640,117,800,139,960,128C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg> -->
<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fadcc998" fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,213.3C640,213,800,171,960,144C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg> -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fadcc998" fill-opacity="1" d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,250.7C1120,267,1280,245,1360,234.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: () => 'bg-white',
    },
    clipPath: {
      type: String,
      default: () => 'clip-bottom',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';
.clip-path {
  background-color: $white-color;
  height: 10rem;
}
.clip-bottom {
  border-bottom-right-radius: 100%;
}
.clip-top {
  clip-path: polygon(100% 48%, 100% 50%, 100% 100%, 0% 100%, 61% 78%, 99% 50%);
  border: 0;
}
.bg-white {
  background-color: $white-color;
}
.bg-light {
  background-color: $white-light-color;
}
.bg-dark {
  background-color: $dark-color;
}
.bg-secondary {
  background-color: $dark-color;
}
</style>