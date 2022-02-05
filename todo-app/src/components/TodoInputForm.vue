<template>
  <div>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" placeholder="Write needs to be done" v-model="todoText">
          <a class="btn-floating btn-large waves-effect waves-light" style="background-color:#2c3e50 "
             @click="addNewTodo()"><i class="material-icons">+</i></a>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {

  name: 'TodoInputForm',
  components: {},
  data() {
    return {
      todoText: null
    }
  },
  methods: {
    addNewTodo() {
      this.$emit('todo-add', this.todoText)
      this.todoText = null
    }
  }

}

</script>
<style>

</style>