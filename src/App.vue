<template>
  <div class="container">
    <h1>Tienda 32 Bits</h1>
    <h2>Lista de juegos</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button @click="disminuirStock(juego.codigo)">-</button>
            <button @click="incrementarStock(juego.codigo)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['juegos'])
  },
  methods: {
    ...mapActions(['incrementarStock', 'disminuirStock']),
  },
  created() {
    this.$store.dispatch('fetchJuegos');
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
