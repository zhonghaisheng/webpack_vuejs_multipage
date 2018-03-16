import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//创建state
const state =  {
	count:0,
	todos:[
		{id:1,text:'内容1',done:true},
		{id:2,text:'内容2',done:false}
	]
}

//创建actions
const actions = {
	increment(context){
		context.commit('incrementNew');
	}
}

//或者
// const actions = {
// 	increment({commit}){
// 		commit('incrementNew');
// 	}
// }

//创建mutations
const mutations = {
	incrementNew(state,num){
		console.log(state,num);
		state.count = 10;
	}
}

//创建getters
const getters = {
	count(state){
		return state.count;
	},
	toDo(state){
       return state.todos.filter(todo=>todo).length;
    }
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters

})