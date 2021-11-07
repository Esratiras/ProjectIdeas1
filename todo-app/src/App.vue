<template>
<div id="appContainer">
<h1 class="left">Todo List</h1>
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input type="text" placeholder="Write needs to be done" v-on:keyup.enter="todoAdd" v-model="inputValue">
        </div>
          <div class="row s6">
<ul>
  <li v-for="todo in todoList" :key="todo.id">
    <p class="list left" >
      <label>
        <input type="checkbox" class="filled-in" />
        <span class="title">{{todo.title}}</span>
        <a class="waves-effect waves-light btn-small row s2" @click.prevent @click="removeTask">remove</a>
      </label>
    </p>
  </li>
</ul>

          </div>

      </div>
      <div class="collection col s6">
        <a href="#" class="collection-item">{{todoList.length}} items</a>
      </div>
    </form>
  </div>

</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      inputValue:'',
      todoList:[
          {
        id:Math.random(),
        title:"A simple ToDo App with Vue 2"
      }
      ]
    }
  },
  methods:{
    handleInput(e){
      this.inputValue = e.target.value
    },
    todoAdd(e){
     if(this.inputValue === ''){
        return
      }

      this.todoList.push({
        title:e.target.value,
        id:Math.random()
      })
      console.log(this.todoList)
      this.inputValue = ''

    },
    removeTask(){
      this.todoList = []
    }
  }
}
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
.title{
  margin-right: 60px;
}
.btn-small{
  margin-top: 12px;
}

</style>
