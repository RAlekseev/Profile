<template>
  <div>
    <MainComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import MainComponent from './MainComponent.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    MainComponent
  },
  computed: {
    ...mapGetters(['projects', 'technology'])
  }
})
</script>
