<template>
  <div class="choice">
    <shared-section-title
      title="Pourquoi nous faire confiance ?"
      class="white-color"
    />
    <section class="choice__container custom-container">
      <div class="left">
        <div class="text-flex">
          <h4>Crédibilité</h4>
          <p>
            Nous vérifions les freelances, publions leurs notes d'évaluation et
            leurs données de transaction en temps réel pour vous aider à
            identifier des professionnels éprouvés dans le monde entier.
          </p>
        </div>
        <div class="text-flex">
          <h4>Sécurité</h4>
          <p>
            Nous offrons la protection de paiement et votre choix de méthode de
            paiement préférée pour une tranquillité d'esprit financière.
          </p>
        </div>
      </div>
      <div class="center">
        <div class="wave-center"></div>

        <div>
          <img :src="choiceMan" alt="man" />
        </div>
      </div>
      <div class="right">
        <div class="text-flex text-left">
          <h4>Des Meilleurs Talents</h4>
          <p>
            L’ admission d'un freelance dans la plateforme, passe par un
            processus très rigoureux ayant plusieurs tests (softkills et
            hardkills); ce qui nous rend different.
          </p>
        </div>
        <div class="text-flex text-left">
          <h4>Valeur</h4>
          <p>
            Nos frais sont les plus bas du secteur, ce qui vous permet de
            bénéficier d'une valeur maximale pour un coût minimal.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import choiceWave from '~/assets/images/choice-wave.svg'
import choiceMan from '~/assets/images/choice-man.png'
export default {
  data() {
    return {
      choiceWave,
      choiceMan,
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/main.scss';

.choice {
  background-color: $dark-color;
  color: $white-color;
}
.choice__container {
  min-height: 500px;
  display: flex;
  gap: 10rem;
  margin-top: 10rem;
  font-family: $font-regular;
}

.center {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: start;
  .wave-center {
    background-color: #fadcc9;
    border-radius: 100%;
    width: 300px;
    height: 300px;
  }
  img {
    position: absolute;
    bottom: 0;
  }
}
.left,
.right {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  height: auto;
}
h4 {
  font-weight: 700;
  font-size: 25px !important;
  line-height: 21px;
}
p {
  font-weight: 300;
  font-size: 14px !important;
  line-height: 24px;
}

.text-left{
  text-align: left;
}
</style>