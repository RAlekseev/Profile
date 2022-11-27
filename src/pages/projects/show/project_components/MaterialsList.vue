<template>
  <div class="main-container">
    <div class="title">
      <h2>Материалы</h2>
    </div>
    <div class="cards">
      <div v-for="(material, i) in materials" class="card card-1" :key="i">
        <h2 class="card__title">{{ material.name }}</h2>
        <p class="card__apply">
          <a class="card__link" :href="material.link" target="_blank">
            {{ material.type }}...
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    materials: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  font-size: 1.2em;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  margin: 2%;
  padding: 10px;
  width: 46%;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.03);
}

.card__link {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
}

.card__link:hover::after {
  width: 100%;
}

.card__title {
  grid-row: 3/4;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.card__apply {
  grid-row: 4/5;
  align-self: center;
  margin: 5px 0;
}

/* CARD BACKGROUNDS */

/*.card-1 {*/
/*  background: radial-gradient(#1fe4f5, #3fbafe);*/
/*}*/

/*.card-1 {*/
/*  background: radial-gradient(#fbc1cc, #fa99b2);*/
/*}*/

/*.card-1 {*/
/*  background: radial-gradient(#76b2fe, #b69efe);*/
/*}*/

/*.card-1 {*/
/*  background: radial-gradient(#60efbc, #58d5c9);*/
/*}*/

.card-1 {
  background: radial-gradient(#07e095, #0fb7a9);
}

.card-5 {
  background: radial-gradient(#f588d8, #c0a3e5);
}

@media (max-width: 420px) {
  .card {
    width: 100%;
    margin: 10px;
  }
}
</style>
