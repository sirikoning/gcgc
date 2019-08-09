<template>
  <div class="about">
    <h1>This is an schedule page</h1>
    <div class="head">
      <div class="moji">id</div>
      <div class="moji" v-bind:style="{width: columsize.namewidth+'px'}">name</div>
      <div class="moji" v-bind:style="{width: columsize.sdatewidth}">sDate</div>
      <div class="moji" v-bind:style="{width: columsize.ddatewidth}">dDate</div>
      <div class="moji">D</div>
      <div class="zu1"></div>
    </div>
    <input type="range" v-model="columsize.namewidth"></input>
    <Task v-for="(task, index) in this.$store.state.tasks" :key="index" :task="task" :columsize="columsize" v-on:kore="say"></Task>
    <p>{{this.$store.state.tasks}}</p>
  </div>
</template>
<script>
import Task from '../components/Task'


export default {
  data () {
    return {
      columsize:{
        namewidth: 50,
        sdatewidth: "50px",
        ddatewidth: "50px"
      },
    }
  },
  components: {
    Task
  },
  methods:{
    say:function(){
      console.log("aa")
      this.cont = "sss"
      this.$store.state.tasks.push({id:5, name:"tsuika", startDate:"100", dueDate:"300"})
    },
    say2:function(){
      console.log("aa")
      this.cont = "sss"
      this.$store.state.tasks.push({id:5, name:"tsuika"})
    }
  }

}
</script>
<style>
.head{
  width:800px;
  height: 20px;
}
.a{
  width: 500px;
}
.moji{
  background-color: grey;
}
.zu1{
  width: 500px;
  height: 20px;
  background-color: pink;
  float: left;
}
</style>
