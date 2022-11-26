<template>
  <div>
  <div class="card">
    <div class="card__title">
      <h3>{{ project.id }}</h3>
      <p class="card__description">
        {{ project.description }}
      </p>
      <router-link :to="'/projects/'+project.id">
        <button>
          Подробнее
        </button>
      </router-link>
    </div>
    <div class="card__img">
      <Carousel :autoplay="3000" :wrap-around="true" :transition="1000">
        <Slide v-for="image in project.images" :key="image.src">
          <img :src="getImgUrl(image.src)" :alt="image.alt">
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Project from '@/models/ProjectModel'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'ProjectFullCard',
  props: {
    project: {
      type: Object as () => Project,
      required: true
    }
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  methods: {
    getImgUrl (pic: string) {
      return require('@/assets/img/' + pic)
    }
  }
})
</script>

<style scoped>
button {
  color: white;
  background: rgb(91, 179, 24);
  background: linear-gradient(113deg, rgba(91, 179, 24, 1) 0%, rgba(91, 179, 24, 0.5) 100%);
  font-size: 1em;
  padding: 20px 20px;
  border-radius: 50px;
  border: none;
}

.card {
  /*width: 100%;*/
  height: 500px;
  margin: 10px;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 2fr 6fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". .";
}

img {
  width: 100%;
  height: 500px;
  object-fit: contain;
  object-position: 50% 50%;
}

@media screen and (max-width: 700px) {
  .card {
    display: block;
    height: 100%;
  }

  img {
    height: 300px;
  }
}

.card__title {
  text-align: center;
  padding: 20px;
}

.card__img {
  overflow: hidden;
}

.carousel__pagination {
  position: relative;
  top: -20px;
}

:deep(.carousel__track) {
  height: 100%;
}
:deep(.carousel__viewport) {
  height: 100%;
}
</style>
