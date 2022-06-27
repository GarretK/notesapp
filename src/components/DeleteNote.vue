<template>
  <div v-if="checked" class="delete">
    <font-awesome-icon icon="fas fa-exclamation-triangle" />
    <p class="cell"> Do you want to delete this note?</p>
    <div class="cell right">
      <button class="btn" @click="no()">No</button>
      <button class="btn" @click="yes()">Yes</button>
    </div>
  </div>
</template>
<script>

export default {
  name: "noteObj",
  props: {
    id: Number,
    checked: Boolean,
    add: Boolean,
    title: String,
    content: String
  },
  methods: {
    no() {
      this.$emit('clear', [])

    },
    yes() {
      this.$emit('delete', this.id)
    }
  }
}
</script>

<style scoped>
.btn {
  border-radius: 3px;
  border: 1px solid white;
  background-color: red;
  color: white;
  padding: 7px 14px;
  font-size: 12px;
  cursor: pointer;
}

.cell {
  display: table-cell;
}

.right {
  text-align: right;
}

.delete {
  border-radius: 1.5px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #989898;
  border: 1px solid red;
  background-color: red;
  width: 600px;
  display: table;
  color: white;
  position: relative;
  bottom: -162px;
  padding: 5px;



}

.btn:hover {
  background-color: white;
  color: red;
  border: 1px solid red;
  transition: 0.2s;
}
</style>

