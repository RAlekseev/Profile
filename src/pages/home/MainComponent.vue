<template>
  <div class="main-component">
    <div class="name">
      <h1>Алексеев Роман Максимович</h1>
      <h2>Full-stack разработчик</h2>
    </div>
    <div class="photo">
      <img src="@/assets/img/avatar.webp" alt="photo">
    </div>
  </div>
</template>

<style scoped>
.name {
  position: relative;
}
.photo
{
  position: relative;
}

.main-component {
  margin-top: 100px;
  text-align: center;
  padding: 0 10%;
}

.photo img {
  width: 40%;
  height: auto;
  border-radius: 50%;
  /*object-fit: cover;*/
}
</style>
