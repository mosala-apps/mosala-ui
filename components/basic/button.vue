<template>
  <button ref="btn" :class="btnClass" :type="type" :disabled="isDisabled" @click="onClick">
    {{ label }} <v-icon v-if="icon" small>{{ icon }}</v-icon>
    <v-progress-circular
      v-if="isLoading"
      indeterminate
      color="white"
      size="23"
      :width="2"
    ></v-progress-circular>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    btnClass: {
      type: String,
      default: 'primary',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    type:{
      type: String,
      default: '',
    },
    isDisabled:{
      type: Boolean,
      default: false,
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/main';
.btn {
  border-radius: 50px !important;
  padding: 0.8rem 1rem;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  font-family: $font-bold;
  font-size: .8rem;
}
.btn:disabled,
.btn[disabled]{
  background-color: #cccccc;
  color: #666666;
   &[disabled]:hover{
    background-color: #cccccc;
   }
}
.btn-success {
  @extend .btn;
  color: $white-color;
  background-color: $dark-color;
  border: 2px solid $dark-color;
  &:hover {
    background-color: #146941;
  }
}
.btn-dark{
  @extend .btn;
  color: $dark-color;
  border: 2px solid $dark-color;
}
.btn-light {
  @extend .btn;
  color: $primary-color;
  background-color: transparent;
  box-shadow: 0px 10px 15px -3px rgba(192, 147, 23, 0.685);
  border: 2px solid $primary-color;
  &:hover {
    background-color: $primary-color;
    color: $white-color;
    i {
      color: $white-color !important;
    }
  }
  i {
    color: $primary-color !important;
  }
}
.btn-white {
  @extend .btn;
  color: $primary-color;
  background-color: $white-color;
  border: 2px solid $primary-color;
  &:hover {
    background-color: $primary-color;
    color: $white-color;
  }
}

.btn-danger {
  @extend .btn;
  color: $white-color;
  background-color: $secondary-color;
  border: 2px solid  $secondary-color;
  &:hover {
    background-color: $secondary-color;
    color: $white-color;
  }
}

.btn-primary {
  @extend .btn;
  color: $white-color;
  background-color: $primary-color;
  border: 2px solid  $primary-color;
  &:hover {
    background-color: $dark-color;
  }
}

.fullWidth {
  width: 100%;
}
.disabled{
  background-color: $white-light-color !important;
}
.small {
  padding: 0.4rem 0.5rem;
}
</style>
