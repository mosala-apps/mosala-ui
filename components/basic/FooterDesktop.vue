<template>
  <div class="desktop-footer">
    <v-main>
      <v-row class="py-10">
        <v-col cols="12" sm="6" md="3">
          <ul>
            <h5>Menus</h5>
            <li @click="redirectToRoute('/')">Accueil</li>
            <li @click="redirectToRoute('/projects')">projets</li>
            <li @click="redirectToRoute('/events')">Evenements</li>
          </ul>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <ul>
            <h5 class="font-bold">Questions frequents</h5>
            <li @click="redirectToRoute('/about')">A propos</li>
            <li @click="redirectToRoute('/')">Pourquoi la plateforme ?</li>
            <li @click="redirectToRoute('/vision')">Mission et Vision</li>
          </ul>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <ul>
            <h5 class="font-bold text-xl">Politiques et confidentialité</h5>
            <li @click="redirectToRoute('/coockies')">Coockies</li>
            <li @click="redirectToRoute('/policies')">Vie privée</li>
            <li @click="redirectToRoute('/')">
              Conditions d'utilisation et services
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm ="6" md="3">
          <div>
            <h5>Souscrire aux newsletters</h5>
            <div class="desktop-footer__newsletters mt-3">
              <input
                id="email"
                type="email"
                name="email"
                class="input_newsletters"
                placeholder="Votre adresse email"
              />
              <button class="btn_newsletters">Souscrire</button>
            </div>
           
          </div>
        </v-col>
      </v-row>
    </v-main>
    <v-main>
      <div class="desktop-footer__infos">
        <div class="footer__social-media">
              <a to="#"
                ><v-icon :color="getColors.primaryColor" large
                  >mdi-facebook</v-icon
                ></a
              >
              <a to="#">
                <v-icon :color="getColors.primaryColor" large
                  >mdi-twitter</v-icon
                ></a
              >
              <a to="#">
                <v-icon :color="getColors.primaryColor" large
                  >mdi-twitter</v-icon
                ></a
              >
            </div>
      </div>
      
      <div class="desktop-footer__bar"></div>
    </v-main>
    <v-main>
      <div class="footer__copy-right">
        <h6>Copyright © {{ new Date().getFullYear() }} Mosala</h6>
      </div>
    </v-main>
  </div>
</template>

<script>
import shareColors from '~/mixins/shareColors'
import validationForm from '~/mixins/validationForm'
import redirectToRoute from '~/mixins/redirectToRoute'

export default {
  mixins: [shareColors, validationForm, redirectToRoute],
  props: {
    title: {
      type: String,
      default: () => '',
    },
    subTitle: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {
      form: {},
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/main';
$medium-size: 1200px;
$large-size: 1000px;
.desktop-footer {
  height: auto;
  width: 100%;
  overflow: hidden;
  padding: 1rem 2rem;
  background-color: $dark-color;
  color: $white-color;
  font-family: $font-regular;
  margin: 0;
  ul li {
    list-style: none;
    margin: 1rem 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: $primary-color;
    }
  }
  li,
  h6 {
    font-size: 1rem;
  }
  h5 {
    font-size: 1.2rem;
    @include media-query-respond-to(large) {
      & {
        font-size: 1.4rem;
      }
    }
  }
  .desktop-footer__infos {
    display: flex;
    justify-content: flex-end;
    height: 100%;
    gap: 10rem;
  }
  .footer__copy-right {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    height: auto;
  }
  .footer__social-media {
    display: flex;
    gap: 1rem;
  }
  .desktop-footer__bar {
    height: 0.4px;
    background-color: rgba(241, 240, 240, 0.563);
  }
  .desktop-footer__newsletters {
    display: flex;
    width: 100%;
    flex-direction: column;
    @include media-query-respond-to(x-large) {
      & {
        flex-direction: row;
        align-items: center;
      }
    }
    // border: 1px solid red;
    // justify-content: flex-start;

    overflow: hidden;
  }
  .input_newsletters {
    border: 1px solid $white-color;
    background-color: $white-color;
    &:focus {
      outline: none;
    }
    height: 50px;
    padding: 0 1rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    &::placeholder {
      font-size: 0.7rem;
    }
    @include media-query-respond-to(x-large) {
      & {
        width: 65%;
        border-radius: 8px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &::placeholder {
        font-size: 1rem;
      }
    }
  }
  .btn_newsletters {
    border: 1px solid $primary-color;
    background-color: $primary-color;
    color: $white-color;
    &:focus {
      outline: none;
    }
    height: 50px;
    padding: 0 2rem;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
    width: 100%;
    @include media-query-respond-to(x-large) {
      & {
        width: auto;
        border-radius: 8px;
        border-top-left-radius: 0 !important;
        border-bottom-left-radius: 0 !important;
        margin-top: 0;
      }
    }
  }
}
</style>
