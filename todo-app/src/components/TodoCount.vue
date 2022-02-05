<template>
  <div style="margin-top: 100px">
    <ul class="collection">
      <li class="collection-item">{{todoListCount}} task</li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'TodoCount',
  components: {
  },
  data(){
    return{
    }
  },
  props:{
    todoListCount: {
      type:Number,
      required:false
    }
  },
  methods:{

  }

}

</script>
<style>

</style>