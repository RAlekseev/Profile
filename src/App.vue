<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Главная</router-link> |
        <router-link to="/projects">Мои проекты</router-link> |
        <router-link to="/my_way">Мой путь</router-link>
      </nav>
    </header>
    <router-view/>
    <footer>
      <p>© 2022 with ♥</p>
    </footer>
  </div>
</template>
