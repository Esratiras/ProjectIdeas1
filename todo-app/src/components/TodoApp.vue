<template>
  <div class="container">
    <div style="flex: 1;">
      <img src="../../src/assets/logo.png" alt="logo">
      <h1 class="text-center">Todo List</h1>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input type="text" placeholder="Write needs to be done" v-model="inputValue">
              <a class="btn-floating btn-large waves-effect waves-light" style="background-color:#2c3e50 " @click="todoAdd"><i class="material-icons">+</i></a>
            </div>
          </div>
        </form>
        <ul class="todo-list" >
          <li class="left list" v-for="(event, index) in todoList" :key="index">
            <p>
              <label>
                <input class="form-check-input filled-in" type="checkbox" value="" id="flexCheckIndeterminate" v-model="event.completed" >
                <span class="block"></span>
                <span @click.prevent class="title" style="margin-top: 5px;font-size:16px" contenteditable="true" v-on:keydown.enter="updateTask($event, event)" v-on:blur="updateTask($event, event)" :class="{completed: event.completed}">{{event.title}}</span>
              </label>
            </p>
            <a class="waves-effect waves-light btn-small" @click="removeTask(event)">Remove</a>
          </li>
        </ul>


        <div style="margin-top: 100px">
          <ul class="collection">
            <li class="collection-item">{{todoList.length}} task</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  //1-Yazılan todolar cache de tutulacak
  name: 'App',
  components: {
  },
  data(){
    return{
      inputValue:'',
      todoList:[
        {
          id: 1,
          title: "Learn Vue.js",
          completed: false
        },
        {
          id: 2,
          title: "Build a project with vue.js",
          completed: false
        }
      ]
    }
  },
  methods:{

    todoAdd(){

      if(this.inputValue.trim() === ''){
        return
      }

      let to={
        id: Math.random(),
        title: this.inputValue,
        components: false,
      }

      this.todoList.push(to)
      this.inputValue = ''

    },

    removeTask(event){
      this.todoList.splice(this.todoList.indexOf(event), 1);
    },

    updateTask(e,event){
      e.preventDefault()
      event.title = e.target.innerText
      e.target.blur()
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
  padding: 10px;
}
.container {
  min-height: 300px;
  display: flex;
  flex-direction: column;
}
.todo-list {
  padding: 8px 0;
  display: flex;
  flex-direction: column;
}
.todo-list .list {
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.list{

  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 15px;
}
.btn-small{
  margin-right: 40px;
  margin-bottom: 20px;
}
.block{
  margin-bottom: -8px;
}
.completed{
  text-decoration: line-through;
}
</style>
