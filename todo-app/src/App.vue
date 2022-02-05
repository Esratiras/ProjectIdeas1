<template>
  <div class="container">
    <div style="flex: 1;">
      <TodoHeader/>
      <div class="row">
        <TodoInputForm @todo-add="todoAdd"/>
        <TodoList :todoListValue="todoList" @remove-todo="removeTask($event)"/>
        <TodoCount :todoListCount="todoList.length"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoInputForm from "@/components/TodoInputForm";
import TodoList from "@/components/TodoList";
import TodoCount from "@/components/TodoCount";
import TodoHeader from "@/components/TodoHeader";


export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoCount,
    TodoList,
    TodoInputForm,
  },
  data(){
    return{
      inputValue:'',
      response:'',
      todoList:[]
    }
  },
  props:{
    todoListValue:{
      type:Array,
      required:false,
    },
    todoListCount:{
      type:Number,
      required: false
    }
  },
  methods:{
    todoAdd(event){
      if(event.trim() === ''){
        return
      }

      this.todoList.push({
        title:event,
        id:Math.random(),
        completed: false
      })
      event = ''
    },
    removeTask(event){
      this.todoList = this.todoList.filter(item=>item.id !== event)
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
