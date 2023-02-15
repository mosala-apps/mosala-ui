<template>
  <div class="desktop-banner">
    <v-main>
      <v-row class="desktop-banner__container">
        <v-col class="desktop-banner__title" md="6" lg="6" xl="8">
          <h1>
            Avez-vous un projet
            Numerique <span class="title-span">innovant ?</span> <br />
          </h1>
          <h6>
            Vous êtes au bon endroit. <strong>Mosala</strong> est un réseau exclusif des meilleurs développeurs de
            logiciels en RDC. Les grandes entreprises
            engagent les développeurss de <strong>Mosala</strong> pour leurs projets les plus
            importants.
          </h6>
          <div class="desktop-banner__sub-title">
            <h6>{{ subTitle }}</h6>
          </div>
          <div class="desktop-banner__actions">
            <basic-button btn-class="btn-primary talent" label="Trouver un talent" />
            <!-- <button 
            class="thematics-action"
            @click="
                $router.push('/forum')
              "
            >
              Rejoindre la 
            </button> -->
            <basic-button
              btn-class="btn-light community"
              label="Réjoindre la communauté"
              @onClick="redirectToRoute('/auth/signup')"
            />
          </div>
        </v-col>
        <v-col class="desktop-banner__image" md="6" lg="6" xl="6">
          <div>
            <div class="left_images">
              <div class="clip1">
                <img :src="img" />
              </div>
              <div class="clip1">
                <img :src="choice" />
              </div>
            </div>

            <div class="center_images">
              <div class="clip1">
                <img :src="a" />
              </div>
            </div>
            <div class="right_images">
              <div class="clip1">
                <img :src="emmie" />
              </div>
              <div class="clip1">
                <img :src="junior" />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
import shareColors from '~/mixins/shareColors'
import img from '~/assets/images/profile.svg'
import a from '~/assets/images/rkota.png'
import choice from '~/assets/images/choice-man.png'
import emmie from '~/assets/images/emmie.png'
import junior from '~/assets/images/junior.png'
import redirectToRoute from '~/mixins/redirectToRoute'
export default {
  mixins: [shareColors, redirectToRoute],
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
      img,
      choice,
      a,
      emmie,
      junior,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/main';
$medium-size: 1200px;
$large-size: 1000px;

.desktop-banner {
  height: 40rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0 10rem;
  background-color: $white-light-color;
  // background-color: $white-color;
  margin: 0;
  h1 {
    color: $dark-color;
    font-size: 3.5rem;
    line-height: 4rem;
    width: 100%;
    .title-span {
      color: $secondary-color;
      font-weight: bold;
    }
    @media screen and (width: 768px) {
      & {
        font-size: 1rem;
      }
    }
  }
  h6 {
    color: $dark-color;
    font-size: 1.5rem;
    line-height: 2rem;
    font-family: $font-regular;
    font-weight: 200;
    width: 100%;
    padding: 1rem 0;
    @media screen and (width: 768px) {
      & {
        font-size: 1rem;
      }
    }
  }
  .desktop-banner__container {
    padding: 0 10rem;
    padding-top: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .desktop-banner__title {
    //  width: 55%;
  
  }
  .desktop-banner__actions {
    display: flex;
    gap: 1.5rem;
    .talent, .community{
      padding: 1.2rem;
      font-weight: 700;
      font-size: 1rem;
      transition: all 0.3s ease-in-out;
    }
    .talent {
      background-color: $primary-color;
      color: $white-color;
      border: 2px solid $primary-color;
      &:hover {
        background-color: $white-color;
        color: $primary-color;
      }
    }
    .community{
      background-color: $white-color;
      color: $dark-color;
      border: 2px solid $dark-color;
      &:hover {
        background-color: $dark-color;
        color: $white-color;
      }
    }
  }
  .desktop-banner__image {
    width: 600px;
    //  background-color: #f59f3de8;;
    // border: 1px solid red;
    position: absolute;
    right: 200px;
    img {
      object-fit: contain;
      max-width: 100%;
      height: auto;
      //  border-radius: 100%;
    }
  }
}
.left_images,
.right_images,
.center_images {
  display: flex;
  // width: 500px;
  // height: 100%;
  gap: 10rem;
}
.center_images {
  justify-content: start;
  align-items: center;
  gap: 8rem;
  .clip1 {
    margin-left: 10rem;
  }
}
.clip1 {
  border-radius: 10px;
  margin-bottom: 2rem;
  background-color: $white-color;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  img {
    object-fit: cover;
    width: 200px;
  }
}
.clip2 {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  img {
    object-fit: cover;
    width: 300px;
  }
}
.clip-3 {
  position: absolute;
  left: 0;
  top: 10px;
  width: 150px;
}
</style>
