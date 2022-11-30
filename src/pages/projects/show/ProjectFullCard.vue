<template>
  <div>
    <div class="card">
      <div class="card__title">
        <h3>
          {{ project.id }}
          <img v-if="project.github" @click="VisitGitHub()" src="/img/technologies/github.svg" alt="github" class="github">
        </h3>
        <p class="card__description">
          {{ project.description }}
        </p>
        <div class="icons">
          <img v-for="technology in project.technologies"
               :key="technology.name"
               :src="technology.icon"
               :alt="technology.name"
               :title="technology.name + ' ' + technology.version"
               class="icon">
        </div>
        <slot></slot>
      </div>
      <div class="card__img">
        <Carousel :autoplay="3000" :wrap-around="true" :transition="1000">
          <Slide v-for="image in project.images" :key="image.src">
            <img :src="'/img/' + image.src" :alt="image.alt" loading="lazy">
          </Slide>
          <template #addons>
            <Navigation/>
            <Pagination/>
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
    VisitGitHub () {
      window.open(this.project.github, '_blank')
    }
  }
})
</script>

<style scoped>
.github {
  cursor: pointer;
  vertical-align: top;
  width: 1.5em;
  height: 1.5em;
}

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

@media screen and (max-width: 700px) {
  .card {
    display: block;
    height: 100%;
  }
  .card__img img {
    height: 300px;
  }
}

img {
  width: 100%;
  height: 500px;
  object-fit: contain;
  object-position: 50% 50%;
}

.card__title {
  text-align: center;
  padding: 20px;
}

.card__img {
  overflow: hidden;
}

.icons {
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
}

.icon{
  width: 30px;
  height: 30px;
  margin: 5px;
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
