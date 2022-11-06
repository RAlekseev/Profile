<template>
  <div>

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
