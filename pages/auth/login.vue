<template>
  <div>
    <v-row class="mobile-padding">
      <shared-left-image-section :section-list="sectionList" />
      <!-- <shared-mobile-illustration /> -->
      <v-overlay :value="isLoading">
        <v-progress-circular indeterminate size="100"> </v-progress-circular>
      </v-overlay>
      <v-col md="8" sm="12" style="height: auto">
        <auth-navigation
          route-path="/auth/signup"
          title="Pas encore de compte ?"
          btn-label="S'inscrire"
        />
        <div class="auth" style="top: 10px;">
          <v-row class="auth__container" justify="center" align="center">
            <h2 class="auth__title">Se Connecter</h2>
            <v-col cols="12">
              <v-form
                ref="formLoginUser"
                v-model="isValid"
                lazy-validation
                @submit.prevent="onSubmit"
              >
                <div class="auth__username mb-3">
                  <v-text-field
                    id="identifier"
                    v-model="form.identifier"
                    label="Nom d'Utilisateur"
                    :rules="[validate.required]"
                    clearable
                    dense
                    outlined
                    required
                  />
                </div>
                <div class="auth__password">
                  <v-text-field
                    v-model="form.password"
                    :rules="[validate.required]"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    label="Mot de passe"
                    clearable
                    dense
                    outlined
                    :type="showPassword ? 'text' : 'password'"
                    required
                    @click:append="showPassword = !showPassword"
                  />
                </div>

                <div class="auth__forgot-password">
                  <v-checkbox
                    v-model="remember"
                    label="Se souvenir de moi"
                    :color="remember ? getColors.secondaryColor : ''"
                    class="forgot-password"
                  >
                    Se souvenir de moi</v-checkbox
                  >
                  <nuxt-link to="/auth/forgot-password">
                    <span class="forgot-password">Mot de passe oublié?</span>
                  </nuxt-link>
                </div>

                <div class="auth__action">
                  <v-spacer />
                  <basic-button
                    v-if="!isLoading"
                    btn-class="btn-primary"
                    label=" Connexion"
                    :disabled="!isValid"
                    @onClick="onSubmit"
                  />
                  <v-btn
                    v-else
                    :color="getColors.darkColor"
                    class="btn-primary"
                  >
                    <v-progress-circular
                      indeterminate
                      color="white"
                      size="23"
                      :width="2"
                    ></v-progress-circular>
                    En cours...
                  </v-btn>
                </div>
                <div class="auth__signup">
                  <nuxt-link to="/auth/signup"
                    ><span class="auth__signup">S'inscrire </span></nuxt-link
                  >
                </div>
              </v-form>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import validationForm from '~/mixins/validationForm'
import { COLORS } from '~/config/variables'

export default {
  mixins: [validationForm],
  layout: 'form',
  // middleware: ['authenticated'],
  data() {
    return {
      form: {
        identifier: '',
        password: '',
      },
      isLoading: false,
      isValid: false,
      isError: false,
      showPassword: false,
      remember: false,
      sectionList: [
        'Connectez-vous à votre compte',
        'Créez votre projet',
        'Echangez sur plusieurs thématiques',
      ],
    }
  },
  head() {
    return {
      title: 'Login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            ' Authentifiez-vous à la plateforme afin de partager vos projets et connaissances',
        },
      ],
    }
  },
  computed: {
    getColors() {
      return COLORS
    },
  },
  methods: {
    ...mapActions({
      AddUser: 'user/AddUser',
    }),
    async onSubmit() {
      if (this.$refs.formLoginUser.validate()) {
        await this.loginUser({ ...this.form })
      }
    },
    async loginUser(payload) {
     
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';
</style>
