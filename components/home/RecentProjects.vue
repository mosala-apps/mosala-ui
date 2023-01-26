<template>
  <v-main class="projects">
    <shared-section-title
      title="Laissez-vous inspirer par les projets de nos talents"
      class="dark-color mb-8"
    />
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="recent-project__cards">
          <VueSlickCarousel ref="carousel" v-bind="settings" :arrows="true">
            <div v-for="(project, i) in projects" :key="i">
              <shared-project-card :project="project" class="mr-5" />
            </div>
          </VueSlickCarousel>
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  mixins: [shareColors],
  components: { VueSlickCarousel },
  props: {},
  data() {
    return {
      etdIcon,
      projectIcon,
      projects: [
        {
          title: 'titre du projet',
          description: 'Description',
          image: '',
          createdAt: new Date(),
        },
        {
          title: 'titre du projet',
          description: 'Description',
          image: '',
          createdAt: new Date(),
        },
        {
          title: 'titre du projet',
          description: 'Description',
          image: '',
          createdAt: new Date(),
        },
        {
          title: 'titre du projet',
          description: 'Description',
          image: '',
          createdAt: new Date(),
        },
        {
          title: 'titre du projet',
          description: 'Description',
          image: '',
          createdAt: new Date(),
        },
        {
          title: 'titre du projet',
          description: 'Description',
          image: '',
          createdAt: new Date(),
        },
      ],
      sectors: [],
      etds: [],
      filter: {},
      firstLoad: true,
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  methods: {
    handleFilter() {},
  },
}
</script>

<style lang="scss">
@import '@/assets/main.scss';
.projects {
  background-color: $white-color;
  min-height: 500px;
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
// slick

.slick-list {
	max-width:  100%;
  height: 100%;
}
.slick-arrow {
	z-index: 1;
	width: 40px;
	height: 40px;
}

.slick-arrow:before {
	font-size: 30px;
}
.slick-next {
	right: 0;
}
.slick-prev {
	left: 0;
}

.btn-wrap {
	text-align: center;
	width: 100%;
}
button.slick-prev:before, button.slick-next:before {
	background-color: $dark-color !important;
	border: none;
	padding: 10px 20px;
	font-size: 18px;
	font-weight: 600;
	transition: all 0.5s;
  border-radius: 50px;
}
button.slick-disabled {
	opacity: 0.6;
}
</style>
