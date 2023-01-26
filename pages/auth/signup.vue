<template>
  <v-main class="main__test">
    <v-row class="mobile-padding">
      <shared-left-image-section :section-list="sectionList" />
      <!-- <shared-mobile-illustration /> -->
      <v-col md="8" sm="12" style="height: auto">
        <auth-navigation
            route-path="/auth/login"
            title="Avez-vous déjà un compte ?"
            btn-label="Se Connecter"
          />
        <div id="signupContainer" class="auth" style="top: 10px;">
          <v-row class="auth__container" justify="center" align="center">
            <h2 class="auth__title">S'inscrire</h2>
            <v-col cols="12">
              <v-form
                ref="formUserRegister"
                v-model="isValid"
                lazy-validation
                @submit.prevent="onSubmit()"
              >
                <div class="auth__username mb-1">
                  <v-text-field
                    v-model="form.firstName"
                    label="Nom"
                    :rules="[validate.required]"
                    clearable
                    dense
                    outlined
                    required
                  />
                </div>
                <div class="auth__firstName mb-1">
                  <v-text-field
                    v-model="form.middleName"
                    label="Postnom"
                    :rules="[validate.required]"
                    clearable
                    dense
                    outlined
                    required
                  />
                </div>
                <div class="auth__firstName mb-1">
                  <v-text-field
                    v-model="form.lastName"
                    label="Prénom"
                    :rules="[validate.required]"
                    clearable
                    dense
                    outlined
                    required
                  />
                </div>
                <div class="auth__email mb-1">
                  <v-text-field
                    id="email"
                    v-model="form.email"
                    label="Email"
                    :rules="[validate.required, validate.email]"
                    clearable
                    dense
                    outlined
                    required
                  />
                </div>
                <v-spacer></v-spacer>
                <!--
                <v-date-picker
                  v-model="form.birthDate"
                  mode="date"
                  locale="fr"
                  :value="null"
                  is24hr
                  color="orange"
                  :popover="{ placement: 'start' }"
                >
                  <template #default="{ inputValue, inputEvents }">
                    <v-text-field
                      label="Date et Heure"
                      :rules="[validate.required]"
                      :value="inputValue"
                      :color="getColors.secondaryColor"
                      outlined
                      dense
                      required
                      v-on="inputEvents"
                    />
                  </template>
                </v-date-picker> !-->
                <div class="auth__password mb-1">
                  <v-text-field
                    v-model="form.password"
                    :rules="[validate.required, validate.password]"
                    label="Mot de passe"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    clearable
                    dense
                    outlined
                    :type="showPassword ? 'text' : 'password'"
                    required
                    @click:append="showPassword = !showPassword"
                  />
                </div>
                <div class="auth__passwordConfirmation mb-1">
                  <v-text-field
                    id="passwordConfirmation"
                    v-model="form.passwordConfirmation"
                    label="Confirmer mot de passe"
                    :rules="[
                      validate.required,
                      validate.matchingPasswords(
                        form.password,
                        form.passwordConfirmation
                      ),
                    ]"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    clearable
                    dense
                    outlined
                    required
                    :type="showPassword ? 'text' : 'password'"
                    @click:append="showPassword = !showPassword"
                  />
                </div>
                <div class="auth__phone mb-1">
                  <label for="password">Téléphone</label>
                  <v-text-field
                    v-model="form.telephone"
                    :rules="[validate.required]"
                    type="telephone"
                    placeholder="Téléphone"
                    clearable
                    dense
                    outlined
                    required
                  />
                </div>
                <!-- <div>
                  <v-autocomplete
                    v-model="form.role"
                    label="Rôle"
                    :rules="[validate.required]"
                    :items="rolesFormatted"
                    item-text="name"
                    clearable
                    dense
                    outlined
                    return-object
                    @input="handleRolesChange"
                  ></v-autocomplete>
                </div> -->
                <!-- <div v-show="isDPRole">
                  <v-autocomplete
                    v-model="form.plan_division"
                    label="Division de plan"
                    :items="formattedPlanDivs"
                    item-text="label"
                    clearable
                    dense
                    outlined
                  ></v-autocomplete>
                </div> -->
                <!-- <div v-show="isEtdRole" class="auth__password mb-1">
                  <label for="password">Zone</label>
                  <v-autocomplete
                    v-model="form.etd"
                    :items="etdsFormatted"
                    item-value="id"
                    item-text="name"
                    name
                    outlined
                    dense
                    persistent-hint
                    return-object
                  ></v-autocomplete>
                </div> -->
                <div class="auth__action">
                  <v-spacer />
                  <basic-button
                    v-if="!isLoading"
                    btn-class="btn-primary"
                    label="S'inscrire"
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
                <div class="auth__link">
                  <nuxt-link to="/auth/login"
                    ><span class="auth__signup">Se connecter </span></nuxt-link
                  >
                </div>
              </v-form>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
import { mapActions } from 'vuex'
import validationForm from '~/mixins/validationForm'
import shareColors from '~/mixins/shareColors'
import { selectHTMLElement } from '~/utils/helpers'

export default {
  mixins: [validationForm, shareColors],
  layout: 'form',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        birthDate: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        ).toISOString(),
        passwordConfirmation: '',
        firstName: '',
        lastName: '',
        middleName: '',
        telephone: '',
        etd: null,
        roles: [],
      },
      roles: null,
      isLoading: false,
      isValid: false,
      isError: false,
      isEtdRole: false,
      isDPRole: false,
      showPassword: false,
      jwt: null,
      sectionList: [
        'Créez votre compte facilement',
        'Créez votre projet',
        'Echangez sur plusieurs thématiques',
      ],
    }
  },
  head() {
    return {
      title: 'signup',
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

  mounted() {
    if (this.$mq === 'sm') {
      selectHTMLElement('#signupContainer').classList.add('mt-15')
    }
  },
  methods: {
    ...mapActions({
      AddUser: 'user/AddUser',
    }),
    async onSubmit() {
      if (this.$refs.formUserRegister.validate()) {
        const form = this.formatData()
        await this.registerUser(form)
      }
    },
   
    async registerUser(payload) {
     
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';
.main__test::-webkit-scrollbar {
  display: none;
}
</style>
