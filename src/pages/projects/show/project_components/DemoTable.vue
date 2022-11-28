<template>
  <div class="demo">
    <table v-if="project.demo">
      <thead>
      <tr>
        <th colspan="3">
          <a :href="project.demo.url" target="_blank">
            <b>{{project.demo.name}}</b>
          </a>
        </th>
      </tr>
      <tr v-if="project.demo.accounts">
        <th>User</th>
        <th>Логин</th>
        <th>Пароль</th>
      </tr>
      </thead>
      <tbody v-if="project.demo.accounts">
      <tr v-for="account in project.demo.accounts" :key="account.name">
        <td>{{ account.name }}</td>
        <td>{{ account.login }}</td>
        <td>{{ account.password }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProjectModel from '@/models/ProjectModel'
export default defineComponent({
  name: 'DemoTable',
  props: {
    project: {
      type: Object as () => ProjectModel,
      required: true
    }
  }
})
</script>

<style scoped>
.demo {
  margin-top: 1em;
}

.demo a {
  color: #5e126b;
  font-weight: bold;
  text-decoration: none;
}

table {
  width: 100%;
  border-collapse: collapse;
}
table td, table th {
  border: 1px solid black;
}

table tr:first-child th {
  border-top: 0;
}

table tr:last-child td {
  border-bottom: 0;
}

table tr td:first-child,
table tr th:first-child {
  border-left: 0;
}

table tr td:last-child,
table tr th:last-child {
  border-right: 0;
}
</style>
