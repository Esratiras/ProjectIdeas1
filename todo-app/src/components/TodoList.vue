<template>
  <div>
    <ul class="todo-list" >
      <li class="left list" v-for="(todo) in todoListValue" :key="todo.id">
        <p>
          <label>
            <input class="form-check-input filled-in" type="checkbox" value="" id="flexCheckIndeterminate" v-model="todo.completed" >
            <span class="block"></span>
            <span @click.prevent class="title" style="margin-top: 5px;font-size:16px" contenteditable="true"  :class="{completed: todo.completed}">{{todo.title}}</span>
          </label>
        </p>
        <a class="waves-effect waves-light btn-small" @click="removeNewTodo(todo.id)">Remove</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'TodoList',
  components: {
  },
  data(){
    return{
    }
  },
  props:{
    todoListValue: {
      type:Array,
      required:false
    }
  },
  methods: {
    removeNewTodo(event) {
      this.$emit('remove-todo', event)
    }
  }
}

</script>
<style>
.completed{
  text-decoration: line-through;
}
</style>