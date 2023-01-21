<template>
  <v-main class="projects">
    <shared-section-title title="Laissez-vous inspirer par les projets de nos talents" class="dark-color"/>
    <v-container fluid class="mt-8">
      <v-row>
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          md="6"
          sm="6"
          lg="3"
          xl="3"
          class="recent-project__cards"
        >
          <shared-project-card :project="project" />
        </v-col>
        <div class="recent-project__action">
          <nuxt-link to="/projects">
            <button>Voir plus de projets</button>
          </nuxt-link>
        </div>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import etdIcon from '~/assets/icons/home_etd.svg'
import projectIcon from '~/assets/icons/home_project.svg'
import shareColors from '~/mixins/shareColors'

export default {
  mixins: [shareColors],
  props: {},
  data() {
    return {
      etdIcon,
      projectIcon,
      projects: [
        {
          title:"titre du projet",
          description:"Description",
          image:"",
          createdAt:new Date()
        },
        {
          title:"titre du projet",
          description:"Description",
          image:"",
          createdAt:new Date()
        },
        {
          title:"titre du projet",
          description:"Description",
          image:"",
          createdAt:new Date()
        },
        {
          title:"titre du projet",
          description:"Description",
          image:"",
          createdAt:new Date()
        },
        {
          title:"titre du projet",
          description:"Description",
          image:"",
          createdAt:new Date()
        },
        {
          title:"titre du projet",
          description:"Description",
          image:"",
          createdAt:new Date()
        }
      ],
      sectors: [],
      etds: [],
      filter: {},
      firstLoad: true,
    }
  },
  methods: {
    handleFilter() {},
  },

}
</script>

<style lang="scss">
@import '@/assets/main.scss';
.projects{
  background-color:$white-color;
  min-height:500px;
}

.home__title {
  .recent-projects__filter {
    @include media-query-respond-to(small) {
      & {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .add-space {
          margin-right: 1.5rem;
        }
      }
    }
  }

  color: rgb(18, 18, 29);
}
.recent-project__action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
  button {
    border-radius: 0px;
    background-color: $dark-color;
    color: $white-color;
    font-weight: 500;
    padding: 0.8rem 3rem;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: $primary-color;
    }
    @include media-query-respond-to(medium) {
      & {
        font-size: 18px;
      }
    }
  }
}
</style>
