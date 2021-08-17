<template>
  <div id="app">   
    <AttributeStars :rating=100 :showScore="true" />
    <AttributeStars :rating=100  />
    <AttributeStars :rating=70  />
    <AttributeStars :rating=70 :showScore="true" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AttributeStars from './components/AttributeStars.vue';

@Component({
  components: {
    AttributeStars,
  },
})
export default class App extends Vue {}
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
