<template>
  <div class="card">
    <div class="card__title">
      <h3>Описание</h3>
    </div>
    <div class="description">
      <p class="description__text" v-html="description"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    description: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.card {
  margin: 30px 10px;
  overflow: hidden;
  border: 1px solid #ccc;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.description__text {
  margin: 20px;
  font-size: 1em;
  text-align: justify;
  text-justify: inter-word;
}

.card__title {
  margin: 20px;
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
}

.card__title h3 {
  margin: 0;
}

.card__title h3::after {
  content: '';
  display: block;
  height: 2px;
  margin: 10px auto;
  background-color: #000;
}

.card__title h3::before {
  content: '';
  display: block;
  height: 2px;
  margin: 10px auto;
  background-color: #000;
}
</style>
