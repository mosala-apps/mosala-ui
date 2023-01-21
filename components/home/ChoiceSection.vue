<template>
  <div class="choice">
    <shared-section-title
      title="Pourquoi nous faire confiance ?"
      class="white-color"
    />
    <section class="choice__container">
      <div class="left">
        <div>
          <h4>Crédibilité</h4>
          <p>
            Nous vérifions les freelances, publions leurs notes d'évaluation et
            leurs données de transaction en temps réel pour vous aider à
            identifier des professionnels éprouvés dans le monde entier.
          </p>
        </div>
        <div>
          <h4>Sécurité</h4>
          <p>
            Nous offrons la protection de paiement et votre choix de méthode de
            paiement préférée pour une tranquillité d'esprit financière.
          </p>
        </div>
      </div>
      <div class="center">
        <div class="wave-center">
          <img :src="choiceWave" alt="man" />
        </div>

        <div class="wave-center">
          <img :src="choiceMan" alt="man" />
        </div>
      </div>
      <div class="right">
        <div>
          <h4>Des Meilleurs Talents</h4>
          <p>
            L’ admission d'un freelance dans la plateforme, passe par un
            processus très rigoureux ayant plusieurs tests (softkills et
            hardkills); ce qui nous rend different.
          </p>
        </div>
        <div>
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
  justify-content: space-evenly;
  align-items: start;
  margin-top: 10rem;
  font-family: $font-regular;
  .card__choice__container {
    height: 247px;
    width: 411px;
    background-color: #ffff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2%;
    margin: 1%;
    .card__choice__container-head {
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
    }
    h4 {
      font-family: $font-bold;
      font-size: 20px;
      line-height: 1.5;
      position: relative;
      left: 10px;
      right: 0;
      top: 0;
    }
    p {
      font-size: 14px;
      line-height: 2;
      text-align: justify;
    }
  }
}
.choice__container-bottom {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  top: 1180px;
  .card__choice__container {
    width: 408px;
    margin: 0 1.5%;
  }
}
.center {
  position: relative;

  .wave-main {
    position: absolute;
    top: 100px;
    right: 0;
    left: 0; border: 1px solid red;
  }
}
</style>