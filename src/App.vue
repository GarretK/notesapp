<template>
  <div id="app">
    <NotesTable />
  </div>
</template>
<script>

import NotesTable from './components/NotesTable.vue'


export default {
  name: 'App',
  components: {
    NotesTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  background-color: #F7F7F7;
  position: absolute;
  height: 100%;
}
</style>
