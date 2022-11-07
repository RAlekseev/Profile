<template>
  <div class="main-component">
    <div class="name">
      <h1>Алексеев Роман</h1>
      <h2>Full-stack разработчик</h2>
      <button>Связатся со мной</button>
      <blockquote>
        <p>«Каждый разработчик должен знать, как работает компьютер, потому что это помогает понять, как работает программное обеспечение»</p>
        <cite>Бьёрн Страуструп</cite>
      </blockquote>
    </div>
    <div class="photo">
      <img src="@/assets/img/avatar.webp" alt="photo">
    </div>
  </div>
</template>

<style scoped>
.name button{
  color: white;
  background: rgb(91,179,24);
  background: linear-gradient(113deg, rgba(91,179,24,1) 0%, rgba(91,179,24,0.5) 100%);
  font-size: 24px;
  padding: 30px 70px;
  border-radius: 50px;
  border: none;
}

blockquote {
  margin: 0;
  padding: 30px 0;
}

cite {
  display: block;
  text-align: right;
  font-size: 20px;
  font-style: normal;
}

.name p{
  font-weight: 300;
  font-size: 20px;
  line-height: 32px;
  margin: 0;
  font-style: italic;
}
.photo
{
  position: relative;
  right: 10px;
  top: 10px;
}

h1 {
  font-size: 64px;
  font-weight: 900;
  margin: 0;
  top: 0;
  left: 0;
  z-index: 1;
  white-space: nowrap;
}

h2 {
  font-size: 36px;
  font-weight: bold;
  margin-top: 5px;
}

.main-component {
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12%;
  margin-top: 120px;
}
.photo img {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
  width: 600px;
  height: 600px;
  object-fit: cover;
  object-position: 50% 80%;
  border-radius: 50%;
}
</style>
