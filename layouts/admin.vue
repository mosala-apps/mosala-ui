<template>
    <div>
      <v-app dark>
        <admin-side-bar
          ref="sideBar"
          title="Administration"
          :mini-variant="miniVariant"
        />
        <v-app-bar fixed app color="white" class="elevation-0">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-btn>
  
          <v-spacer />
          <!-- <admin-profile-menu /> -->
        </v-app-bar>
        <v-main class="admin__main">
          <v-container>
            <Nuxt />
          </v-container>
        </v-main>
      </v-app>
      <!-- <div v-else class="authorization_msg">
        <v-alert
          color="#2A3B4D"
          dark
          icon="mdi-shield-lock-outline"
          dense
          prominent
          > Vous n'êtes pas autorisé à accéder à cette page, vous serez redirigé sur
          la page d'accueil. redirection en cours.....</v-alert
        >
      </div> -->
    </div>
  </template>
  <script>
  import shareColors from '~/mixins/shareColors'
  export default {
    name: 'AdminPanelLayout',
    mixins: [shareColors],
    data() {
      return {
        drawer: false,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Administration',
      }
    },
    watch: {
      drawer(value) {
        this.$refs.sideBar.onDrawer(value)
      },
      hasADMINRole(value) {
        if (!value) {
          setTimeout(() => this.$router.push('/'), 3000)
        }
      },
    },
  }
  </script>
  <style lang="scss">
  .admin__main {
    background: $white-light-color;
  }
  </style>
  