<template>
  <div class="wrapper">
    <div v-for="card in cards" :key="card.name" class="statistic-card">
      <img :src="card.icon" class="icon" alt="learnms">
      <div class="statistic-card__content">
        <table>
          <tbody>
          <tr v-for="statistic in card.statistic" :key="statistic.name">
            <td class="statistic-card__name">{{ statistic.name }}</td>
            <td class="statistic-card__value">{{ statistic.value }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShortStatistic',
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin: 30px 0;
  display: flex;
  /*display: inline;*/
  justify-content: center;
  align-items: center;
  clear: both;
}

.statistic-card {
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32%;
  /*height: 400px;*/
  margin: 20px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
  padding: 12px;
}

.statistic-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.icon {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.statistic-card__name {
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #000;
  height: 48px;
}

.statistic-card__value {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #000;
  padding-left: 5px;
}

@media screen and (max-width: 700px) {
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .statistic-card {
    width: 95%;
  }
}

@media screen and (max-width: 1005px) {
  .statistic-card {
    margin: 10px;
  }

  .statistic-card__name {
    font-size: 14px;
  }

  .statistic-card__value {
    font-size: 18px;
  }
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
