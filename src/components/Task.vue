<template>
  <div class="task" >
    <div style="{height:20px;}">
      <div class="moji">{{task.id}}</div>
      <input class="moji" :style="{width:this.columsize.namewidth+'px'}" v-model="task.name" v-on:keydown.enter="addtask"></input>
      <div class="moji" contenteditable="true">{{task.startDate}}</div>
      <div class="moji" contenteditable="true">{{task.dueDate}}</div>
      <div class="moji" contenteditable="true">{{task.dueDate-task.startDate}}</div>
      <svg class="zu">
        <!-- <rect class="bar" :width="task.dueDate-task.startDate"
                          :x="task.startDate"/> -->
        <!-- <text :x="task.dueDate"
              y="20px"
              font-size="20"
              fill="black">{{task.name}}</text> -->
              <g>
                <text :x="task.startDate" y="20px"
                  @click="bau"
                > {{task.startDate +" ; "+ task.name}}</text>
                <rect id="k2" :x="task.startDate" :width="task.dueDate-task.startDate" height=19 rx="5" fill="rgba(90, 159, 148, 0.53)"
                  @mousedown="mousedown()"
                  :class="{'draggable': task.draggable}">
                </rect>
                <circle :cx="task.dueDate" cy="10px" r=3
                  @mousedown="resizedown()"
                  :class="{'resizable':task.resizable}"
                ></circle>
              </g>
      </svg>
    </div>
    <Task v-for="(child, index) in task.children" :key="index" :task="child" :columsize="columsize"></Task>
  </div>
</template>
<script>
  import Task from '../components/Task'

  export default{
    data () {
      return {
        ima:"",
        now:""
      }
    },
    name:"Task",
    props:['task','columsize'],
    components: {
      Task
    },
    methods:{
      editname:function(e){
        this.task.name=e.target.textContent
        console.log("a")
      },
      mymethod(){
        console.log('hei')
      },
      mousedown(){
        document.getElementById("k2")
        console.log("mousedown fired")
        console.log(this.ima)
        this.task.draggable = true
        console.log(this.now)
        document.documentElement.addEventListener("mousemove", this.bodyMove)
        document.documentElement.addEventListener("mouseup", this.bodyUp)
      },
      resizedown(){
        console.log("resizedown fired")
        this.task.resizable=true
        console.log(this.now)
        document.documentElement.addEventListener("mousemove", this.stickMove)
        document.documentElement.addEventListener("mouseup", this.stickUp)
      },
      bodyMove(e) {
        console.log("bodyMove" + e.clientX)
        var k = this.task.dueDate - this.task.startDate
        this.task.startDate= e.clientX -250
        this.task.dueDate= this.task.startDate + k
      },
      bodyUp() {
        console.log("bodyup")
        document.documentElement.removeEventListener("mousemove", this.bodyMove)
        document.documentElement.removeEventListener("mouseup", this.bodyUp)
        this.task.draggable=false
      },
      stickMove(e) {
        console.log("aa")
        console.log("stickMove" + e.clientX)
        this.task.dueDate = e.clientX -250
      },
      stickUp() {
        console.log("stickup")
        document.documentElement.removeEventListener("mousemove", this.stickMove)
        document.documentElement.removeEventListener("mouseup", this.stickUp)
        this.task.resizable=false
      },
      bau(e){
        this.now = e.clientX
        console.log(this.now)
      },
      addtask(){
        console.log("imaha+" + this.task.id)
        var l = this.$store.state.tasks.length
        for(var g = 0; g < l; g++) {
          if(this.$store.state.tasks[g]["id"] === this.task.id) {
            console.log("attayo" + g)
            this.$store.state.tasks.splice( g+1, 0, {id:l+1,name:"name", startDate:Math.random()*100, dueDate:500, rw:Math.random()*500, draggable:false, resizable:false} )
          }
        }
        console.log(g)
      }
    }
  }
</script>
<style>
  .zu{
    height: 20px;
    width: 500px;
  }
  .moji{
    width: 50px;
    float: left;
    height:20px;
  }
  .bar{
    height: 20px;
  }
  .draggable {
    fill:rgba(115, 201, 101, 0.51);
  }
  .resizable {
    fill:rgba(115, 201, 101, 0.51);
  }
</style>
