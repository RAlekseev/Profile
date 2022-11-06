<template>
  <div>
    <header>
      <nav>
        <a>
          <img src="@/assets/img/avatar.webp" alt="logo">
        </a>
        <router-link to="/">Главная</router-link>
        <router-link to="/projects">Мои проекты</router-link>
        <router-link to="/my_way">Мой путь</router-link>
      </nav>
    </header>
    <router-view/>
    <footer>
      <p>© 2022 with ♥</p>
    </footer>
  </div>
</template>

<style scoped>
header img {
  margin-right: 140px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
  height: 70px;
  width: 70px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 50%;
}
</style>
