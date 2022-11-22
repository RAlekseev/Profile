<template>
  <div class="container">
    <ShortStatistic/>
    <FeaturesTree/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FeaturesTree from './LearnMS/FeaturesTree.vue'
import ShortStatistic from './LearnMS/ShortStatistic.vue'

export default defineComponent({
  name: 'LearnMS',
  components: {
    FeaturesTree,
    ShortStatistic
  }
})
</script>
