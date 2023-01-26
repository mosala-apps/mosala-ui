<template>
  <div class="auth__nav">
    <div>
      <span>{{ title }}</span>
      <basic-button
        btn-class="btn-light"
        :label="btnLabel"
        @onClick="redirect(routePath)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
    btnLabel: {
      type: String,
      default: () => '',
    },
    routePath: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    redirect(route) {
      this.$router.push({ path: route })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';
</style>