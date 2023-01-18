<template>
    <v-navigation-drawer
      v-model="isClosed"
      :mini-variant="miniVariant"
      fixed
      app
      class="elevation-0 border-0 admin__sidebar"
      :color="getColors.darkColor"
    >
      <v-list class="admin">
        <v-toolbar-title class="admin__title">{{ title }}</v-toolbar-title>
        <v-list-item
          v-for="(item, i) in menus"
          :key="i"
          :to="item.to"
          router
          exact
          class="admin"
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  import shareColors from '~/mixins/shareColors'
  
  export default {
    mixins: [shareColors],
    props: {
      drawer: {
        type: Boolean,
        default: () => false,
      },
      miniVariant: {
        type: Boolean,
        default: () => false,
      },
      title: {
        type: String,
        default: () => '',
      },
    },
    data() {
      return {
        isClosed: false,
        menus: [
          {
            icon: 'mdi-home',
            title: 'Accueil',
            to: '/',
          },
          {
            icon: 'mdi-map',
            title: 'Matching',
            to: '/admin/matching',
          },
          {
            icon: 'mdi-home-map-marker',
            title: 'Talents',
            to: '/admin/talents',
          },
          {
            icon: 'mdi-book-open-blank-variant',
            title: 'Projets',
            to: '/admin/projects',
          },
          {
            icon: 'mdi-message',
            title: 'Forums',
            to: '/admin/forums',
          },
          
          {
            icon: 'mdi-account',
            title: 'Utilisateurs',
            to: '/admin',
          },
          
          {
            icon: 'mdi-chart-arc',
            title: 'Statistiques',
            to: '/admin/stats',
          },
        ],
      }
    },
    methods: {
      onDrawer(value) {
        this.isClosed = value
      },
    },
  }
  </script>
  <style lang="scss" scoped>
  @import '@/assets/main.scss';
  .admin {
    background-color: $dark-color;
    color: $white-color !important;
  }
  .admin__sidebar{
    border-radius: 20px;
    margin-top: .5rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    border: none !important;
  }
  .admin__title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
    font-family: $font-bold;
    font-weight: 400;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .rounded {
    border-top-right-radius: 50%;
  }
  </style>
  