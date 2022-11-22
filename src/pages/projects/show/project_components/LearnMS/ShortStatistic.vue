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
  data: () => ({
    cards: [
      {
        title: 'Организации',
        icon: '/img/app_icons/bank.svg',
        statistic: [
          {
            name: 'Количество Пользователей',
            value: 5578
          },
          {
            name: 'Количество Групп',
            value: 339
          },
          {
            name: 'Успешных аккредитаций',
            value: 12
          },
          {
            name: 'Организаций подключено',
            value: 3
          }
        ]
      },
      {
        title: 'Расписание',
        icon: '/img/app_icons/book-opened.svg',
        statistic: [
          {
            name: 'Ячеек рассписания',
            value: 5815
          },
          {
            name: 'Посещаеемостей',
            value: 493191
          },
          {
            name: 'Домашних работ',
            value: 7622
          },
          {
            name: 'Учебных материалов',
            value: 4816
          }
        ]
      },
      {
        title: 'Учебные потоки',
        icon: '/img/app_icons/presentation.svg',
        statistic: [
          {
            name: 'Банк вопросов',
            value: 48172
          },
          {
            name: 'Тестов пройдено',
            value: 91314
          },
          {
            name: 'Оценок выставлено',
            value: 39276
          },
          {
            name: 'Учебных потоков',
            value: 204
          }
        ]
      }
    ]
  })
}
</script>

<style scoped>
.wrapper {
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.statistic-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 0 20px;
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
}

.statistic-card__value {
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #000;
  padding-left: 5px;
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
