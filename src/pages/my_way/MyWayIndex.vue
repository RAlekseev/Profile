<template>
  <main>
    <ul class="timeline">
      <li v-for="(event, i) in events" :key="event.name" :class="{'timeline-inverted': i % 2 === 1}">
        <div class="timeline-badge">
          <a><i class="fa fa-circle" id=""></i></a>
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4>{{ event.name }}
              <router-link v-if="event.moreInfoLink" :to="event.moreInfoLink" class="more">
                Больше
              </router-link>
            </h4>
          </div>
          <div class="timeline-body">
            <p v-html="event.description"></p>
          </div>
          <div class="timeline-footer">
            <p class="text-right">{{ event.start }} / {{ event.end }}</p>
          </div>
        </div>
      </li>
      <li class="clearfix no-float"></li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'MyWayIndex',
  data: () => ({
    events: [
      {
        name: 'Первые шаги',
        description: 'Изучение азов программирования' +
          '<br>' +
          'Изучение и программирование на Pascal VBA Python' +
          '<br>' +
          'Изучение создание и обслуживание баз данных',
        start: 'Сент 2013',
        end: 'Июнь 2017'
      },
      {
        name: 'Обучение в НИЯУ МИФИ',
        description: 'Специальность: <b>"09.03.04 Программная инженерия"</b>' +
          '<br>' +
          'Факультет: ИИКС (каф. Кибернетики)' +
          '<br>' +
          'Средний балл: 4.08' +
          '<br>' +
          'тема ВКР: "Разработка системы управления образовательным процессом LearnMS" (отл)',
        start: 'Сент 2017',
        end: 'Июнь 2022'
      },
      {
        name: 'Прохождение курсов по Python Mail.ru Технотом',
        description: 'Изучение основ Python' +
          '<br>' +
          'Базовое изучение Machine Learning' +
          '<br>' +
          'Курсовая работа: "Создание бота VK для работы с изображениями и переводами"',
        start: 'Сент 2018',
        end: 'Янв 2019'
      },
      {
        name: 'Прохождение курсов по Laravel',
        description: 'Изучение основ web-программирования' +
          '<br>' +
          'Создание первых БД и свйтов' +
          '<br>' +
          'Изучение создание и обслуживание баз данных',
        start: 'Сент 2018',
        end: 'Янв 2019'
      },
      {
        name: 'Создание АСУ LearnMS',
        description: 'Автоматизированная система управления образовательным процессом',
        start: 'Нояб 2019',
        end: 'Дек 2022',
        moreInfoLink: '/projects/LearnMS'
      },
      {
        name: 'Создание ImgProcessing',
        description: 'Web-система обработки изображений',
        start: 'Фев 2021',
        end: 'Июнь 2021',
        moreInfoLink: '/projects/ImgProc'
      },
      {
        name: 'Создание WebParser',
        description: 'Система создания и использования пользовательскиих парсеров (Новости, Криптовалюты и т.д.)',
        start: 'Фев 2021',
        end: 'Май 2022',
        moreInfoLink: '/projects/WebParser'
      },
      {
        name: 'Создание АСУ MedMS',
        description: 'Автоматизированная система управления клиникой',
        start: 'Дек 2021',
        end: 'Июль 2022',
        moreInfoLink: '/projects/MedMS'
      }
    ]
  })
}
</script>

<style scoped>
.more {
  float: right;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  text-decoration: none;
  padding: 0 5px;
}
.timeline {
  list-style: none;
  padding: 10px 0;
  position: relative;
  font-weight: 300;
}

p {
  margin: 0;
}

h4 {
  margin-bottom: 0;
}

.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 2px;
  background: #ffffff;
  left: 50%;
  margin-left: -1.5px;
}

.timeline > li {
  margin-bottom: 20px;
  position: relative;
  width: 50%;
  float: left;
  clear: left;
}

.timeline > li:before, .timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li:before, .timeline > li:after {
  content: " ";
  display: table;
}

.timeline > li:after {
  clear: both;
}

.timeline > li > .timeline-panel {
  width: calc(100% - 25px);
  width: -moz-calc(100% - 25px);
  width: -webkit-calc(100% - 25px);
  float: left;
  border: 1px solid #dcdcdc;
  background: #ffffff;
  position: relative;
}

.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 26px;
  right: -15px;
  display: inline-block;
  border-top: 15px solid transparent;
  border-left: 15px solid #dcdcdc;
  border-right: 0 solid #dcdcdc;
  border-bottom: 15px solid transparent;
  content: " ";
}

.timeline > li > .timeline-panel:after {
  position: absolute;
  top: 27px;
  right: -14px;
  display: inline-block;
  border-top: 14px solid transparent;
  border-left: 14px solid #ffffff;
  border-right: 0 solid #ffffff;
  border-bottom: 14px solid transparent;
  content: " ";
}

.timeline > li > .timeline-badge {
  color: #ffffff;
  width: 24px;
  height: 24px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 16px;
  right: -12px;
  z-index: 100;
}

.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}

.timeline > li.timeline-inverted > .timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}

.timeline > li.timeline-inverted > .timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}

.timeline-badge > a {
  color: #ffffff !important;
}

.timeline-badge a:hover {
  color: #dcdcdc !important;
}

.timeline-title {
  margin-top: 0;
  color: inherit;
}

.timeline-heading h4 {
  font-weight: 400;
  padding: 0 15px;
  color: #4679bd;
}

.timeline-body > p, .timeline-body > ul {
  padding: 10px 15px;
  margin-bottom: 0;
}

.timeline-footer {
  padding: 5px 15px;
  background-color: #f4f4f4;
}

.timeline-footer p {
  margin-bottom: 0;
}

.timeline-footer > a {
  cursor: pointer;
  text-decoration: none;
}

.timeline > li.timeline-inverted {
  float: right;
  clear: right;
}

.timeline > li:nth-child(2) {
  margin-top: 60px;
}

.timeline > li.timeline-inverted > .timeline-badge {
  left: -12px;
}

.no-float {
  float: none !important;
}

@media (max-width: 767px) {
  ul.timeline:before {
    left: 40px;
  }

  ul.timeline > li {
    margin-bottom: 0px;
    position: relative;
    width: 100%;
    float: left;
    clear: left;
  }

  ul.timeline > li > .timeline-panel {
    width: calc(100% - 65px);
    width: -moz-calc(100% - 65px);
    width: -webkit-calc(100% - 65px);
  }

  ul.timeline > li > .timeline-badge {
    left: 28px;
    margin-left: 0;
    top: 16px;
  }

  ul.timeline > li > .timeline-panel {
    float: right;
  }

  ul.timeline > li > .timeline-panel:before {
    border-left-width: 0;
    border-right-width: 15px;
    left: -15px;
    right: auto;
  }

  ul.timeline > li > .timeline-panel:after {
    border-left-width: 0;
    border-right-width: 14px;
    left: -14px;
    right: auto;
  }

  .timeline > li.timeline-inverted {
    float: left;
    clear: left;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .timeline > li.timeline-inverted > .timeline-badge {
    left: 28px;
  }
}
</style>
