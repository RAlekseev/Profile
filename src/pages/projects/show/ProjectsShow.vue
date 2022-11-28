<template>
  <main v-if="project">
    <ProjectFullCard :project="project">
      <DemoTable :project="project"/>
    </ProjectFullCard>
    <ShortStatistic v-if="project.statistic_cards" :cards="project.statistic_cards"/>
    <FeaturesTree v-if="project.features" :features="project.features"/>
    <Description v-if="project.full_description" :description="project.full_description"/>
    <Materials v-if="project.materials" :materials="project.materials"/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import Project from '@/models/ProjectModel'
import ProjectFullCard from './ProjectFullCard.vue'
import FeaturesTree from './project_components/FeaturesTree.vue'
import ShortStatistic from './project_components/ShortStatistic.vue'
import Description from './project_components/DescriptionCard.vue'
import Materials from './project_components/MaterialsList.vue'
import DemoTable from './project_components/DemoTable.vue'

export default defineComponent({
  name: 'ProjectsShow',
  components: {
    ProjectFullCard,
    FeaturesTree,
    ShortStatistic,
    Description,
    Materials,
    DemoTable
  },
  computed: {
    ...mapGetters({ projects: 'projects' }),
    project (): Project|null {
      return this.projects.find((project: Project) => project.id === this.$route.params.id)
    }
  }
})
</script>
