<template>
  <div class="row">
    <div class="col">Total <div class="inner" v-html="total"></div>
    </div>
    <div class="col">Completed <div class="inner" v-html="completed"></div>
    </div>
    <div class="col">Not completed <div class="inner" v-html="notCompleted"></div>
    </div>
  </div>
</template>
<script>

export default {
  name: "countStatus",
  props: {
    completed: Number,
    notCompleted: Number,
    total: Number
  }
}
</script>

<style scoped>
.row {
  margin-left: 40px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 20px 20px 20px 20px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #989898;
  display: table;
  width: 50%;
  height: 100%;
  table-layout: fixed;
  border-spacing: 10px;
  color: #989898;
  background-color: white;
}

.col {
  display: table-cell;
}

.inner {
  font-size: 28px;
  font-family: sans-serif;
}
</style>
