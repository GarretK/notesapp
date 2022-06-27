<template>
  <div v-if="add" class="add">
    <div class="padding heading"> Add note</div>
    <div class="padding">
      <input v-model="titleInput" placeholder="Add title">
    </div>
    <div class="padding">
      <textarea v-model="contentInput" placeholder="Add content"></textarea>
    </div>
    <div class="padding heading">
      <button class="btn" @click="addNote(titleInput, contentInput)">Save</button>
      <button class="btn" @click="cancel()">Cancel</button>
    </div>
  </div>
</template>
<script>

export default {

  data() {
    return {
      titleInput: [],
      contentInput: [],
    }
  },

  name: "noteObj",
  props: {
    id: Number,
    checked: Boolean,
    add: Boolean,
    title: String,
    content: String

  },
  methods: {
    cancel() {
      this.$emit('clear', [])

    },
    addNote(titleInput, contentInput) {
      if (titleInput.length != 0 && contentInput.length != 0) {
        this.$emit('add', titleInput, contentInput)
      }
    },
  }
}
</script>

<style scoped>
.padding {
  padding: 15px 0px 0px 12px;
}

input {
  width: 300px;
}

.heading {
  color: black;
  text-align: left;

}

textarea {
  width: 300px;
  height: 50px;
}

.btn {
  border: 1px solid white;
  background-color: white;
  color: #00689D;
  padding: 7px 14px;
  font-size: 12px;
  cursor: pointer;
}

.add {
  color: #989898;
}

.cell {
  display: table-cell;
}

.bottom {
  text-align: center;
}

.add {
  margin-left: 40px;
  padding: 4px 8px 8px 4px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #989898;
  border: 1px solid #989898;
  background-color: white;
  width: fit-content;
  color: white;
}

.btn:hover {
  background-color: #00689D;
  color: white;
  border: 1px solid #00689D;
  transition: 0.2s;
}
</style>
