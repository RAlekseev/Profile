<template>
  <div class="container">
    <FeaturesTree/>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeaturesTree from './LearnMS/FeaturesTree.vue'

export default defineComponent({
  name: 'LearnMS',
  components: {
    FeaturesTree
  }
})
</script>
