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
  data: () => ({
    treeConfig: {
      nodeWidth: 120, nodeHeight: 80, levelHeight: 200
    },
    features: {
      value: 'Возможности',
      children: [
        {
          value: 'Студенты',
          children: [
            { value: 'Просмотр расписания' },
            { value: 'Прохождение тестирования анкетирования' },
            { value: 'Отправка домашней работы на проверку преподавателем' },
            { value: 'Доступ к учебным материалам по всем курсам' },
            { value: 'Доступ к журналам посещаемости' },
            { value: 'Доступ к приказам' },
            { value: 'Запрет на использование системы в случае не оплаты или недопуска' },
            { value: 'Оценка действующих преподавателей и курсов' },
            { value: 'Доступ к электронным ведомостям' },
            { value: 'Доступ к личной информации и документам' },
            { value: 'Доступ к уведомлениям (персональным и групповым)' },
            { value: 'Подключения в комнаты при дистанционном формате' }
          ]
        },
        {
          value: 'Преподаватели',
          children: [
            { value: 'dsds' }
          ]
        },
        {
          value: 'Администраторы',
          children: [
            {
              value: 'Учебно методический отдел',
              children: [
                { value: 'Управление курсами' },
                { value: 'Автоматизированное составление расписания' },
                { value: 'Контроль за нагрузками преподавателей' },
                { value: 'Контроль за пересечениями занятий' },
                { value: 'Экспорт расписания Excel' }
              ]
            },
            {
              value: 'Инспекционный отдел',
              children: [
                { value: 'Online Контроль проведения знятий' },
                { value: 'Составление табеля отведенных занятий' },
                { value: 'Контроль заполняемости ведомостей преподавателями' },
                { value: 'Контроль посещаемости студентов' }
              ]
            },
            {
              value: 'Деканат',
              children: [
                { value: 'Управление студентами' },
                { value: 'Создание рапортов на приказы' },
                { value: 'Составление рейтингов студентов' }
              ]
            }
          ]
        },
        {
          value: 'Абитуриенты',
          children: [
            { value: 'Электронная подача заявок' },
            { value: 'Сдача вступительных экзаменов' },
            { value: 'Исправление документов/заявки если отклонена' },
            { value: 'Просмотр расписания' },
            { value: 'Публичный QR код для мониторинга статуса абитуриента' },
            { value: 'Получение admission letter на почту' }
          ]
        },
        {
          value: 'Контрактеры',
          children: [
            { value: 'dsds' }
          ]
        }
      ]
    }
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
