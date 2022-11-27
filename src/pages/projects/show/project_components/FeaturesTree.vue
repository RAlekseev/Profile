<template>
  <div class="container">
    <!--    <button class="zoom" @click="$refs.tree.zoomIn()">+</button>-->
    <!--    <button class="zoom" @click="$refs.tree.zoomOut()">-</button>-->
    <vue-tree
      class="tree"
      :dataset="features"
      :config="treeConfig"
    >
    </vue-tree>
  </div>
</template>

<script>
import VueTree from '@ssthouse/vue3-tree-chart'
import '@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css'

export default {
  name: 'FeaturesTree',
  components: {
    VueTree
  },
  props: {
    features: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    treeConfig: {
      nodeWidth: 120, nodeHeight: 80, levelHeight: 200
    },
  })
}
</script>

<style scoped>
.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 10px;
  text-align: center;
  font-weight: bold;
  border-radius: 30px;
  margin: 10px;
  overflow: hidden;
}

.tree {
  width: 100%;
  height: 600px;
  /*border: 1px solid gray;*/
}
</style>
