import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import routerTest from '@/components/routerTest'

Vue.use(Router)

export default new Router({
	routes: [
		{
		  path: '/routerTest',
		  name: 'routerTest',
		  component: routerTest
		},
		{
		  path: '/',
		  name: 'HelloWorld',
		  component: HelloWorld
		}
	]
})
