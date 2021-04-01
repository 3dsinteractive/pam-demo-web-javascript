<template>
	<div class="user-menu-container">
		<div class="navbar-item">
			<div class="field is-grouped">
				<p class="control user-menu" v-if="!isUserLoggedIn" @click="toSignupPage">
					<!-- <a v-if="!isUserLoggedIn" @click="toSignupPage"> -->
						<!-- <span class="icon">
							<i class="fa fa-user-plus"></i>
						</span> -->
						<span>{{ signupLabel }}</span>
					<!-- </a> -->
				</p>
				<p class="control user-menu" v-if="!isUserLoggedIn" @click="toLoginPage">
					<!-- <a v-if="!isUserLoggedIn" @click="toLoginPage"> -->
						<!-- <span class="icon">
							<i class="fa fa-user"></i>
						</span> -->
						<span>{{ loginLabel }}</span>
					<!-- </a> -->
				</p>
			</div>
		</div>
		<div v-if="isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
			<a class="navbar-link">
				Welcome {{ getUserName }}
			</a>
			<div class="navbar-dropdown is-boxed">
				<!-- <nuxt-link class="navbar-item" :to="{ name: 'user-wishlist' }">
					{{ wishlistLabel }}
				</nuxt-link>
				<hr class="navbar-divider"> -->
				<a class="navbar-item" @click="logout">
					{{ logoutLabel }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VmMenu',
	data () {
		return {
			wishlistLabel: 'Wishlist',
			logoutLabel: 'Log out',
			loginLabel: 'Log in',
			signupLabel: 'Sign up'
		}
	},

	computed: {
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		},
		getUserName () {
			let name = this.$store.getters.getUserName;
			
			if (name === '') {
				return 'user';
			} else {
				return name;
			}
		}
	},

	methods: {
		logout () {
			this.$store.dispatch('logout')
		},
		toLoginPage () {
			// this.$store.commit('toLoginPage', true);
			this.$router.push({ name: 'login' });
		},
		toSignupPage () {
			// this.$store.commit('toSignupPage', true);
			this.$router.push({ name: 'signup' });
		}
	}
}
</script>

<style lang="scss" scoped>
  .user-menu-container {
    display: flex;
		color: #FFFFFF !important;
  }
	.navbar-link {
		text-decoration: none;
		color: #FFFFFF !important;
	}
	// .navbar-link:hover {
	// 	background-color: none;
	// }
	.user-menu {
		cursor: pointer;
		color: #FFFFFF;
		margin: 0 15px;
	}
</style>

