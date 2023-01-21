<template>
  <div class="card">
    <div class="card__image-container">
      <img :src="imgUrl" :alt="project.title.slice(0, 10)" />
    </div>
    <div class="card__content">
      <div>
        <nuxt-link :to="`/projects/${project.slug}`"><h4>{{ title }}[...]</h4></nuxt-link>
      <p class="card__title text--medium">
        {{ justification }}
        ...
      </p>
      </div>
      <div class="card__info">
        <a class="text--medium">
          <v-icon small :color="getColors.secondaryColor" class="top_bar-icon">
            mdi-calendar
          </v-icon>
          {{ formatDate(project.createdAt) }}
        </a>
        <button
          class="card_detail text--medium"
          @click="
            $router.push({
              name: 'projects-project',
              params: { project: project.slug },
            })
          "
        >
          Detail
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import shareColors from '~/mixins/shareColors'
import eImg from '~/assets/images/projects/e.png'
import { getFullDateTimeFormatted } from '~/utils/helpers'
import defaultPost from '~/assets/images/default_post.jpg'

export default {
  mixins: [shareColors],
  props: {
    etds: {
      type: Array,
      default: () => [],
    },
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      defaultImg: eImg,
    }
  },
  computed: {
    imgUrl() {
      if (this.project.image && this.project.image.url) {
        return `${process.env.strapiURL}${this.project.image.url}`
      }
      return defaultPost
    },
    title() {
      return this.project && this.project.title ? this.project.title.slice(0, 50) : ''
    },
    justification() {
      return this.project && this.project.justification? this.project.justification.slice(0, 50) : ''
    },
  },
  methods: {
    formatDate(date) {
      return getFullDateTimeFormatted(date)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/main.scss';

.card {
  // grid-column-end: span 4;
  display: flex;
  flex-direction: column;
   //justify-content: space-between;
  height: auto;
  background-color: $white-color;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  a{
    color: inherit;
  }
}

.card:hover {
  transform: translateY(-7px);
}

.card__image-container {
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  position: relative;
}
.card__image-ovelay {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.282);
  color: $white-color;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  h6 {
    color: $white-color;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: 0em;
    margin-top: 0.8rem;
    opacity: 0.8;
    text-align: left;
  }
}

.card__image-container img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.card__content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.card__title {
  margin-bottom: 20px;
}
h4:hover {
  text-decoration: underline;
  color: $dark-color;
}

.card__info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  a {
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    color: #605f5f;
  }
}

.card_detail {
  margin-left: auto;
  padding: 5px 20px;
  background-color: $secondary-color;
  border-radius: 20px;
  color: $white-color;
}
</style>
