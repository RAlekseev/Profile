<template>
  <div class="card">
    <div class="card__image">
      <img :src="getImgUrl(project.image)" alt="project image">
    </div>
    <div class="card__content">
      <h3 class="card__title">{{ project.name }}</h3>
      <p class="card__description">{{ project.description }}</p>
      <div class="card__tags">
        <!--        <span v-for="tag in project.tags" :key="tag" class="card__tag">{{tag}}</span>-->
      </div>
      <div class="card__links">
        <!--        <a v-if="project.github" :href="project.github" target="_blank" class="card__link">-->
        <!--          <img src="@/assets/img/github.svg" alt="github">-->
        <!--        </a>-->
        <!--        <a v-if="project.demo" :href="project.demo" target="_blank" class="card__link">-->
        <!--          <img src="@/assets/img/demo.svg" alt="demo">-->
        <!--        </a>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectModel from '@/models/ProjectModel'

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object as () => ProjectModel,
      required: true
    }
  },
  methods: {
    getImgUrl (pic: string) {
      return require('../../assets/' + pic)
    }
  }
})
</script>

<style scoped>
h3 {
  font-size: 1.7em;
  margin: 0;
  padding: 0;
}

.card__description {
  margin: 0;
}

.card {
  font-size: 16px;
  display: inline-flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: white;
  margin: 20px;
  white-space: normal;
}

.card:hover {
  transform: scale(1.05);
}

.card__image {
  border-radius: 40px 40px 0 0;
  width: 100%;
  /*height: 50%;*/
  overflow: hidden;
}

.card__image img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}

.card__content {
  padding: 20px;
}

@media screen and (max-width: 1023px) {
  .card {
    font-size: 12px;
  }
}
</style>
