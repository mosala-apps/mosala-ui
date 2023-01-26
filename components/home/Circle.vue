<template>
  <div class="circle">
    <v-icon :color="getColors.primaryColor" large> mdi-check-circle-outline</v-icon>
  </div>
</template>

<script>
import shareColors from '~/mixins/shareColors';
  export default {
    mixins: [shareColors],
  }
</script>

<style lang="scss">
@import '@/assets/main.scss';
.circle {
  width: 130px;
  height: 124px;
  // box-shadow: 2px 1px 4px  rgba(123, 125, 123, 0.636);
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  border-radius: 100%;
  background-color: $white-light-color;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
