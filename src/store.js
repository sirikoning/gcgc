import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cont: "false",
    tasks:[
      {id:1,
        name:"ichi",
        startDate:100,
        dueDate:200,
        x:"10px",
        rw:"10px",
        sta:0,
        now:0,
        draggable:false,
        resizable:false,
        children:[{id:1.1,
                name:"ia",
                startDate:100,
                dueDate:200,
                x:"10px",
                rw:"10px",
                sta:0,
                now:0,
                draggable:false,
                resizable:false,
                children:[]}]},
      {id:2,
        name:"ichi",
        startDate:100,
        dueDate:200,
        x:"10px",
        rw:"10px",
        sta:0,
        now:0,
        draggable:false,
        resizable:false,
        children:[]}
    ]
  },
  mutations: {

  },
  actions: {

  }
})
