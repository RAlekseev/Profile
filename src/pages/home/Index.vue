<template>
  <main>
    <MainComponent/>
    <Projects/>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainComponent from './MainComponent.vue'
import Projects from './Projects.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    MainComponent,
    Projects
  }
})
</script>
