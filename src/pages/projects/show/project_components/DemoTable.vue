<template>
  <div class="demo">
    <a href="https://learnms.ru" target="_blank">
      LearnMS.ru
    </a>
    <table>
      <thead>
      <tr>
        <th>Пользователь</th>
        <th>Логин</th>
        <th>Пароль</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Администратор</td>
        <td>ar001</td>
        <td>demo</td>
      </tr>
      <tr>
        <td>Преподаватель</td>
        <td>tk001</td>
        <td>demo</td>
      </tr>
      <tr>
        <td>Студент</td>
        <td>st001</td>
        <td>demo</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.demo {
  margin-top: 20px;
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
