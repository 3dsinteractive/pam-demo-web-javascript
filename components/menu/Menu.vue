<template>
	<div class="user-menu-container">
		<div v-if="!isUserLoggedIn" class="navbar-item has-dropdown is-hoverable user-menu">
			<a class="navbar-link">
				<span class="icon">
					<i class="fa fa-user"></i>
				</span>
			</a>
			
		  <div class="navbar-dropdown">
        <a class="navbar-item" @click="toSignupPage">
					{{ signupLabel }}
        </a>
				<a class="navbar-item" @click="toLoginPage">
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
					
					<div class="dropdown-menu sub-dropdown-a" id="dropdown-menu" role="menu">
						<div class="dropdown-content">
							<a v-for="(consentMsgData,id) in consentData" :key="id" @click="() => popupConsentModal(id)" class="dropdown-item">
								{{consentMsgData.name}}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
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
					
					<div class="dropdown-menu sub-dropdown-b" id="dropdown-menu" role="menu">
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
        '1qZBgGUvpBI4heCPQzfocNyuY1D': {
          name: 'Consent for Contacting 1',
					initData: {},
        },
        '1qZCeSoXiawAYwTz5mmop5YyJWf': {
          name: 'Consent for Contacting 2',
					initData: {},
        }
      },
			popUpCollection: {},
			checkInitConsentPopup: setInterval(() => this.initConsentPopup(), 1000),
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
			this.$router.push({ name: 'login' });
		},
		toSignupPage () {
			this.$router.push({ name: 'signup' });
		},
		async initConsentPopup() {
			if (window.pam) {
				clearInterval(this.checkInitConsentPopup)
				for (let id in this.consentData) {
						await window.pam.consentManager.createPopup(id,true,this.sdkCallback).then((popUp) => {this.popUpCollection[id] = popUp});
						if (this.popUpCollection[id]) {
							await this.popUpCollection[id].renderOnlyPopup();	
						}
				}
			}
		},
    async popupConsentModal(id) {
			// Init consent popup (work-around)
			if (!this.popUpCollection[id]) {
				await this.initConsentPopup()
			}
			if (this.popUpCollection[id] && window.pam) { 
				await window.pam.consentManager.getCustomerConsentDetail(id).then((msgData) => {this.consentData[id].initData = msgData});
				if (this.consentData[id].initData) {
					if (this.consentData[id].initData.consent_message_type == "tracking_type") {
						await this.popUpCollection[id].acceptSpecificConsent(this.consentData[id].initData.tracking_permission);
					} else {
						await this.popUpCollection[id].acceptSpecificConsent(this.consentData[id].initData.contacting_permission);
					}
				}
				this.popUpCollection[id].renderOnlyPopup(true);
			}
    },
	},
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
		}
		.sub-dropdown-a {
			margin-left: -148%;
		}
		.sub-dropdown-b {
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

