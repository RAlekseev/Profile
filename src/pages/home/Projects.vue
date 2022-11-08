<template>
  <div class="wrapper">
  <Carousel :autoplay="2000" :items-to-show="itemsToShow" :wrap-around="true">
    <Slide v-for="project in projects" :key="project.id">
      <ProjectCard :project="project"/>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import ProjectCard from './ProjectCard.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({

  name: 'HomeProjects',
  components: {
    ProjectCard,
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data () {
    return {
      width: 0
    }
  },
  mounted () {
    this.width = window.innerWidth
    window.addEventListener('resize', this.updateWidth)
  },
  unmounted () {
    window.removeEventListener('resize', this.updateWidth)
  },
  methods: {
    updateWidth (e: Event) :void {
      this.width = window.innerWidth
    }
  },
  computed: {
    ...mapGetters(['projects']),
    itemsToShow () {
      if (this.width < 767) {
        return 2
      } else if (this.width < 1023) {
        return 3
      } else if (this.width < 1350) {
        return 4
      } else {
        return 5
      }
    }
  }
})
</script>
