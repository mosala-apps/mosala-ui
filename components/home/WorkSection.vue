<template>
  <v-main class="projects">
    <shared-section-title
      title="Il est facile de travailler avec Mosala"
      class="dark-color mb-8"
    />
    <v-container fluid class="work custom-container">
      <div class="work__left">
        <home-circle />
        <div class="text-flex">
          <h4>Embauchez nos talents</h4>
          <p>
            Comparez les devis que vous recevez et engagez les meilleurs
            professionnels indépendants pour le travail.
          </p>
        </div>
      </div>
      <div class="work__center">
        <home-circle />
        <div class="text-flex">
          <h4>Faites votre travail</h4>
          <p>Décidez comment et quand les paiements seront effectués</p>
        </div>
      </div>
      <div class="work__right">
        <home-circle />
        <div class="text-flex">
          <h4>Embauchez nos talents</h4>
          <p>
            Comparez les devis que vous recevez et engagez les meilleurs
            professionnels indépendants pour le travail.
          </p>
        </div>
      </div>
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
    }
  },
  methods: {
    handleFilter() {},
  },
}
</script>

<style lang="scss">
@import '@/assets/main.scss';
.work {
  background-color: $white-color;
  min-height: 500px;
  display: flex;
  gap: 5rem;
  align-items: center;
}
.work__left, .work__center, .work__right{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  text-align: center;
}
h4 {
  font-weight: 700;
  font-size: 25px !important;
  line-height: 21px;
  text-align: center;
}
p {
  font-weight: 300;
  font-size: 14px !important;
  line-height: 24px;
  text-align: center;
}

</style>
