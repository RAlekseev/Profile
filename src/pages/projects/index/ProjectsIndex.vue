<template>
  <main>
    <ProjectFullCard v-for="project in projects" :key="project.id" :project="project">
      <router-link :to="'/projects/'+project.id">
        <button>
          Подробнее
        </button>
      </router-link>
    </ProjectFullCard>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import ProjectFullCard from '../show/ProjectFullCard.vue'

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

<style scoped>
button {
  margin-top: 20px;
  color: white;
  background: rgb(91,179,24);
  background: linear-gradient(113deg, rgba(91,179,24,1) 0%, rgba(24,179,126,0.9) 100%);
  /*background: rgb(91, 179, 24);*/
  /*background: linear-gradient(113deg, rgba(91, 179, 24, 1) 0%, rgba(91, 179, 24, 0.5) 100%);*/
  font-size: 1.3em;
  font-weight: 600;
  padding: 20px 20px;
  border-radius: 20px;
  width: 100%;
  border: none;
  transition: all 0.2s;
}

button:hover {
  transform: scale(1.1);
}
</style>
