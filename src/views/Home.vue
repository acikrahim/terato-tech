<template>
<div class="container home">
	<nav class="navbar">
		<div class="navbar-brand">
			<h1 class="brand"><span>Terato</span>Gallery</h1>
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="true">
				<span aria-hidden="false"></span>
				<span aria-hidden="false"></span>
				<span aria-hidden="false"></span>
			</a>
		</div>

		<div class="navbar-menu">
			<div class="navbar-start">
				<a @click="goTo('home')" class="navbar-item" :class="{'active': currentActive == 'home'}">
					Home
				</a>
				<a @click="goTo('about')" class="navbar-item" :class="{'active': currentActive == 'about'}">
					About
				</a>
				<a @click="goTo('contact')" class="navbar-item" :class="{'active': currentActive == 'contact'}">
					Contact
				</a>
			</div>
		</div>
	</nav>
	<div class="columns is-multiline photo-list">
		<div v-for="(photo, index) in photoArray.slice(0, 8)" :key="'photo' + index" class="column is-one-third">
			<img class="list-img" :src="photo.url" alt="">
		</div>
		<div class="column is-one-third">
			<div class="list-add">
				+ Add Photo
			</div>
		</div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			currentActive: null,
			photoArray: []
		}
	},
	methods: {
		goTo(page) {
			this.currentActive = page
		}
	},
	async mounted() {
		this.currentActive = 'home'
		let response = await axios.get('http://www.splashbase.co/api/v1/images/latest', {
			params: {
				images_only: true
			}
		})
		this.photoArray = response.data.images

	}
}
</script>

<style lang="scss">
.home {
	padding: 2.4% 24px 0;
	.navbar {
		padding: 0 1% 4%;
		background-color: $bg-color;
	}
	.brand {
		margin-left: .25rem;
		margin-right: 2rem;
		span {
			font-weight: bold;
		}
	}
	.navbar-burger {
		color: $sky-blue;
	}
	.navbar-item {
		font-size: 24px;
		color: $white;
		&:hover {
			background-color: transparent;
			color: $sky-blue;
		}
		&.active {
			color: $sky-blue;
			font-weight: bold;
		}
	}
}
.photo-list {
	padding-bottom: 4%;
	.list-img, .list-add {
		width: 100%;
		height: 280px;
		border-radius: 4%;
		-webkit-box-shadow: 0px 10px 16px 2px rgba(0,0,0,1);
		-moz-box-shadow: 0px 10px 16px 2px rgba(0,0,0,1);
		box-shadow: 0px 10px 16px 2px rgba(0,0,0,1);
	}
	.list-add {
		text-align: center;
		padding: 116px 0 0;
		border: 1px solid grey;
		font-size: 24px;
		font-weight: bold;
		color: $white;
	}
}

// @media screen and (min-width: 1472px) {
// 	.container {
// 		max-width: 1200px;
// 		width: 1200px;
// 	}
// }
</style>

