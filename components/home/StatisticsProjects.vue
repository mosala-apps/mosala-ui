<template>
  <v-main class="statistics">
    <shared-section-title title="Quelques chiffres probants" class="dark-color"/>
    <div class="statistics__container">
      <div class="statistics-left">
        <div>
          <h4>203</h4>
          <h6>Projets</h6>
        </div>
        <div>
          <h4>190</h4>
          <h6>Projets en cours</h6>
        </div>
      </div>
      <div class="statistics-right">
        <div>
          <h4>203</h4>
          <h6>Projets finis</h6>
        </div>
        <div>
          <h4>190</h4>
          <h6>Projets en attante</h6>
        </div>
      </div>
    </div>
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
      projects: [],
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
.statistics{
  width: 100%;
  min-height: 417px;
  background: $white-light-color;
}
.statistics__container {
  display: flex;
  width: 100%;
  min-height: 417px;
  justify-content: space-evenly;
  gap: 15px;
  margin-top: 5rem;

  h4,
  h6 {
    font-family: 'Montserrat';
    font-size: 24px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    color: $dark-color;
  }
  h4 {
    font-size: 32px;
    font-weight: 800;
    color: $secondary-color;
    @include media-query-respond-to(medium) {
      & {
        font-size: 40px;
      }
    }
  }
  .statistics-left,
  .statistics-right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    //width: 100%;
  }
}
</style>
