<template>
  <main>
    <ProjectFullCard v-for="project in projects" :key="project.id" :project="project"/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import ProjectFullCard from './ProjectFullCard.vue'

export default defineComponent({
  name: 'ProjectsIndex',
  components: {
    ProjectFullCard
  },
  computed: {
    ...mapGetters(['projects'])
  }
})
</script>
