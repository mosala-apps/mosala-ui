<template>
  <v-col md="4" sm="12" xs="12">
    <div class="sidebar-form">
      <div class="sidebar-form__container">
        <div class="sidebar-form__nav">
          <nuxt-link to="/"><h1>MOSALA</h1></nuxt-link>
        </div>
        <div class="sidebar-form__body">
          <div class="sidebar-form__content">
            <v-img lazy-src="img" :src="img" class="mb-3"></v-img>
            <div
              v-for="(item, index) in sectionList"
              :key="index"
              class="sidebar-form__list"
            >
             <div class="nav">
              <v-icon color="white"> mdi-check-circle-outline</v-icon
              ><a href="#">
                {{ item }}
              </a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
import image from '~/assets/images/mobile_screen_illustration.svg'
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
    sectionList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      img: image,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/main';
.sidebar-form {
  display: none;
  @include media-query-respond-to(large) {
    & {
      display: block;
      background-color: $white-light-color;
      position: fixed;
      left: 0;
      height: 100%;
      width: 480px;
      overflow: hidden;
    }
  }
  h1,
  h2 {
    color: $white-color;
    text-align: left;
    margin: 0;
  }

  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 2rem;
  }
  &__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100%;
    h2 {
      font-size: 4rem;
      margin-bottom: 3rem;
    }
    img {
      width: 300px;
      height: 300px;
      position: absolute;
    }
    a {
      color: $white-color;
      font-size: 1.2rem;
      font-weight: 700;
      list-style: none;
      margin-left: 0.5rem;
      font-family: $font-regular;
      text-align: left !important;
    }
  }

  &__content {
    padding: 3rem 0;
  }
  &__list {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    a{
      text-align: left !important;
    }
  }
}

// .img-container{
//   width: 100%;
//   position: relative;
//   right: 50px;
// }
// .project__create-left {
//   background-color: $dark-color;
//   width: 100%;
//   display: none;
//   height: 120vh;
//   .project__create-left-image {

//     // display: flex;
//     // justify-content: center;
//     // align-items: center;
//     .nav {
//       margin-bottom: 10rem;
//     }
//     h1 {
//       color: $white-color;
//       text-transform: capitalize;
//     }
//     .welcome {
//       width: 100%;
//       padding-bottom: 1.8rem;
//       h2 {
//         color: $white-color;
//         text-align: left;
//         font-size: 3.2rem;
//         padding-bottom: 1.5rem;
//       }
//       ul{
//         padding-top: .5rem;
//       }
//       ul>li{
//          color: $white-color;
//          font-size: 1.2rem;
//          font-weight: 700;
//          list-style: none;
//          font-family: $font-regular;

//       }
//     }
//     width: 100%;
//     height: auto;
//     padding-left: 5rem;
//     img {
//       width: 100%;
//       height: auto;
//       display: block;
//       object-fit: cover;
//       margin-right: 2rem !important;
//     }
//   }
//   .project__create-left-overlay {
//     // position: absolute;
//     // top: 0;
//     // display: flex;
//     // flex-direction: column;
//     // justify-content: space-between;
//     // align-items: center;
//     // height: auto;
//     h2 {
//       color: $white-color !important;
//       font-size: 4rem;
//       text-align: left !important;
//     }
//     h1 {
//       color: $white-color;
//       font-size: 4rem;
//     }
//     a {
//       color: $white-color;
//       text-align: center;
//       font-size: 1rem;
//       position: absolute;
//       top: 40rem;
//       transition: all 0.3s ease-in-out;
//       &:hover {
//         color: $green-color;
//       }
//     }
//   }

//   @include media-query-respond-to(large) {
//     & {
//       display: flex;
//     }
//   }
// }
</style>
