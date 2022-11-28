<template>
  <div>
    <YandexMetrika/>
    <header>
      <nav>
        <a>
          <img src="/img/avatar.webp" alt="logo">
        </a>
        <router-link to="/">Главная</router-link>
        <router-link to="/projects">Проекты</router-link>
        <router-link to="/my_way">Мой путь</router-link>
      </nav>
    </header>
    <router-view/>
    <footer>
      <p>© 2022 with ♥</p>
    </footer>
  </div>
</template>

<script>
import YandexMetrika from '@/components/YandexMetrika'

export default {
  components: {
    YandexMetrika
  }
}
</script>
