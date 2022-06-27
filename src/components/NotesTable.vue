
<template>
  <div>
    <StatsBanner v-bind="countStatus" />
    <div id="notesDiv">
      <table id="notes">
        <tr>
          <th @click="sortBy('id')">ID
            <font-awesome-icon icon="fa-sort" />
          </th>
          <th @click="sortBy('title')">Title
            <font-awesome-icon icon="fa-sort" />
          </th>
          <th @click="sortBy('content')">Content
            <font-awesome-icon icon="fa-sort" />
          </th>
          <th @click="sortBy('status')">Status
            <font-awesome-icon icon="fa-sort" />
          </th>
        </tr>
        <tr v-for="note in sort(notes)" :key="note.id">
          <td>
            <input type="checkbox" v-model="selected" :value="note.id" @change="openDelete(note.id, $event)"> {{ note.id
            }}
          </td>
          <td>{{ note.title }}</td>
          <td>{{ note.content }}</td>
          <td>{{ note.status }}</td>
        </tr>
      </table>
      <button class="btn" @click="openAdd(true)">Add</button>
    </div>
    <div class="flex-container">
      <div class="flex-child">
        <AddNote v-bind="noteObj" @clear="clearPanel" @add="addNote" />
      </div>
      <div class="flex-child">
        <DeleteNote v-bind="noteObj" @clear="clearPanel" @delete="deleteNote" />
      </div>
    </div>
  </div>
</template>
<script>

import json from '../db.json'

export default {
  data() {
    return {
      notes: [],
      selected: [],
      currentKey: 'id',
      isAsc: true,
      countStatus: {
        completed: null,
        notCompleted: null,
        total: null,
      },
      noteObj: {
        id: null,
        checked: false,
        add: false,
        title: '',
        content: '',
      }
    }
  },
  mounted() {
    this.fetchData()
  },

  methods: {
    sort(array) {
      return array.slice().sort((a, b) => {
        if (a[this.currentKey] < b[this.currentKey])
          return this.isAsc ? -1 : 1;
        if (a[this.currentKey] > b[this.currentKey])
          return this.isAsc ? 1 : -1;
        return 0;
      });
    },
    sortBy(key) {
      if (key === this.currentKey) {
        this.isAsc = !this.isAsc
      }
      this.currentKey = key;
    },
    fetchData() {
      this.notes = json.notes
      this.statusCount()
    },
    clearPanel(value) {
      this.selected = value
      this.noteObj = {
        id: null,
        checked: false,
        add: false,
      }
    },
    statusCount() {
      return Object.assign(this.countStatus, {
        completed: this.notes.filter((obj) => obj.status === "Completed").length,
        notCompleted: this.notes.filter((obj) => obj.status === "Not completed").length,
        total: Object.keys(this.notes).length

      })
    },
    addNote(titleInput, contentInput) {
      const id = Math.max(...this.notes.map(item => item.id))
      this.notes.push({ id: id.toString() != "-Infinity" ? id + 1 : 1, title: titleInput, content: contentInput, status: "New" })
      this.statusCount()
    },
    deleteNote(value) {
      this.notes = this.notes.filter(el => el.id !== value);
      this.statusCount()
      this.noteObj = {
        id: null,
        checked: false,
        add: false,
      }

    },
    openAdd(value) {
      return Object.assign(this.noteObj, { add: value })
    },
    openDelete(id, event) {
      this.selected = [id];
      return Object.assign(this.noteObj, { id: id, checked: event.target.checked })
    }
  }
}
</script>

<style scoped>
th svg {
  float: right;
}

.flex-container {
  display: flex;
  margin-top: 40px;
}

.flex-child {
  flex: 1;
}

.flex-child:first-child {
  margin-right: 20px;
}

.btn {
  float: right;
  border: 1px solid white;
  background-color: #00689D;
  color: white;
  padding: 10px 70px 10px 70px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 20px;
  margin-right: -42px;
}

#notesDiv {
  margin-right: 0px;
  margin-top: 40px;
  width: 75%;
}

#notes {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
  box-shadow: 0.5px 0.5px 0.5px 0.5px #989898;
  border-collapse: collapse;
  width: 100%;
}

#notes td,
#notes th {
  border-bottom: 1px solid #989898;
  padding: 8px;
  text-align: left;
  cursor: pointer;
}

#notes td {
  background-color: white;
}

#notes th {
  border-left: 1px solid #dddddd;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #989898;
  color: white;
  font-size: small;
}
</style>

