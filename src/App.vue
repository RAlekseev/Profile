<template>
  <div>
    <header>
      <nav>
        <a>
          <img src="@/assets/img/avatar.webp" alt="logo">
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
