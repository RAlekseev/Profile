<template>
  <div class="hello">
    <h4>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
        <template v-for="techVer in project.technologies" :key="techVer.id">
          {{ technology(techVer.id).name }}: {{ techVer.version }}
        <br>
        </template>
      </li>
    </h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'HomePage',
  computed: {
    ...mapGetters(['projects', 'technology'])
  }
})
</script>
