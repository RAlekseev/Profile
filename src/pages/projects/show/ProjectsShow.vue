<template>
  <main v-if="project">
    <ProjectFullCard :project="project"/>
    <component :is="project.component" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Project from '@/models/ProjectModel'
import ProjectFullCard from './ProjectFullCard.vue'
import LearnMS from './project_components/LearnMS.vue'

export default defineComponent({
  name: 'ProjectsShow',
  components: {
    ProjectFullCard,
    LearnMS
  },
  computed: {
    ...mapGetters({ projects: 'projects' }),
    project (): Project|null {
      return this.projects.find((project: Project) => project.id === this.$route.params.id)
    }
  }
})
</script>
