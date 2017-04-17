<template>
	<el-menu mode="vertical" router class="el-menu-vertical-demo" @select="handleOpen">
		<el-menu-item v-for="item in menuData" :key="item.key" :index="item.key">{{item.name}}</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		name: 'Menu',
		props: ['menuData'],
		methods:{
			handleOpen: function(index,indexPath) {
				console.log('index',index);
			}
		}
	}
</script>

<style>
	el-menu-vertical-demo {
		flex: 1;
		display: flex;
	}
</style>