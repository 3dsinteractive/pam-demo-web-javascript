<template>
	<div class="user-menu-container">
		<div class="navbar-item has-dropdown is-hoverable user-menu">
			<a class="navbar-link">
				<span class="icon">
					<i class="fa fa-user"></i>
				</span>
			</a>
			
		  <div class="navbar-dropdown">
        <a class="navbar-item" v-if="!isUserLoggedIn" @click="toSignupPage">
					{{ signupLabel }}
        </a>
				<a class="navbar-item" v-if="!isUserLoggedIn" @click="toLoginPage">
					{{ loginLabel }}
				</a>
				<hr class="navbar-divider">
				<div class="nested navbar-item dropdown">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
							<span class="icon is-small">
								<i class="fa fa-angle-left" aria-hidden="true"></i>
							</span>
							<span>Consent Setting</span>
						</button>
          </div>
					
					<div class="dropdown-menu" id="dropdown-menu" role="menu">
						<div class="dropdown-content">
							<a v-for="(consentMsgData,id) in consentData" :key="id" @click="() => popupConsentModal(id)" class="dropdown-item">
								{{consentMsgData.name}}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- <div class="navbar-item">
			<div class="field is-grouped">
				<p class="control user-menu" v-if="!isUserLoggedIn" @click="toSignupPage">
						<span>{{ signupLabel }}</span>
				</p>
				<p class="control user-menu" v-if="!isUserLoggedIn" @click="toLoginPage">
						<span>{{ loginLabel }}</span>
				</p>
			</div>
		</div> -->
		<div v-if="isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
			<a class="navbar-link">
				Welcome {{ getUserName }}
			</a>
			<div class="navbar-dropdown is-boxed">
				<div class="nested navbar-item dropdown">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
							<span class="icon is-small">
								<i class="fa fa-angle-left" aria-hidden="true"></i>
							</span>
							<span>Consent Setting</span>
						</button>
          </div>
					
					<div class="dropdown-menu" id="dropdown-menu" role="menu">
						<div class="dropdown-content">
							<a v-for="(consentMsgData,id) in consentData" :key="id" @click="() => popupConsentModal(id)" class="dropdown-item">
								{{consentMsgData.name}}
							</a>
						</div>
					</div>
				</div>
				<hr class="navbar-divider">
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
			signupLabel: 'Sign up',
			consentData: {
        '1qHkMGcSLHcJxyqZXRq6ovIM8GV': {
          name: 'Consent for Tracking',
					initData: {},
        },
        // '1qZBgGUvpBI4heCPQzfocNyuY1D': {
        //   name: 'Consent for Contacting 1',
				// 	initData: {},
        // },
        // '1qZCeSoXiawAYwTz5mmop5YyJWf': {
        //   name: 'Consent for Contacting 2',
				// 	initData: {},
        // }
      },
			popUpCollection: {},
		}
	},
	
  async mounted() {
    for (let id in this.consentData) {
			// await this.$pam.consentManager.getCustomerConsentDetail(id).then((msgData) => {this.consentData[id].initData = msgData});
			// if (this.consentData[id].initData) {
			// 	console.log(this.consentData[id].initData);
				await this.$pam.consentManager.createPopup(id,true,this.sdkCallback).then((popUp) => {this.popUpCollection[id] = popUp});
				await this.popUpCollection[id].renderOnlyPopup();
				// if (this.consentData[id].initData.consent_message_type == "tracking_type") {
				// 	await this.popUpCollection[id].acceptSpecificConsent(this.consentData[id].initData.tracking_permission);
				// } else {
				// 	await this.popUpCollection[id].acceptSpecificConsent(this.consentData[id].initData.contacting_permission);
				// }
			// }
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
		},
    async popupConsentModal(id) {
			console.log(id)
      
			await this.$pam.consentManager.getCustomerConsentDetail(id).then((msgData) => {this.consentData[id].initData = msgData});
			if (this.consentData[id].initData) {
				if (this.consentData[id].initData.consent_message_type == "tracking_type") {
					await this.popUpCollection[id].acceptSpecificConsent(this.consentData[id].initData.tracking_permission);
				} else {
					await this.popUpCollection[id].acceptSpecificConsent(this.consentData[id].initData.contacting_permission);
				}
				
				this.popUpCollection[id].renderOnlyPopup();
			}
    },
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
	.user-menu>.navbar-item {
		text-align: right;
	}
	.nested.dropdown {
		&:hover > .dropdown-menu {
			display: block;
		}
		.dropdown-menu {
			top: -11px;
			margin-left: -118%;
		}
		.dropdown-trigger {
			button {
				padding: 0px 0px;
				border: 0px;
				font-size: 14px;
				font-weight: 400;
				height: 2em;
			}
		}
	}
</style>

