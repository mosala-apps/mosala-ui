<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  // mixins: [userMixin],
  name: 'FormLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [],
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
.layout__header {
  @include media-query-respond-to(large) {
    & {
      display: none;
    }
  }
}
</style>
