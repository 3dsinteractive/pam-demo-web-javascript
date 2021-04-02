<template>
  <form @submit="checkForm" action="#" method="post">
    <div class="signup-container">
      <div class="signup-header-container">
        <h2 class="subtitle is-3">Registration</h2>
      </div>
      <div class="signup-body-container">      
        <section>
          <div v-if="!isUserSignedUp">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[highlightNameWithError ? 'input is-danger' : 'input']"
                  type="text"
                  :placeholder="namePlaceholder"
                  v-model="name"
                  @keyup="checkNameOnKeyUp(name)"
                >
                <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
                <span v-if="highlightNameWithError !== null" class="icon is-small is-right">
                  <i :class="[highlightNameWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                </span>
              </p>
              <p v-if="highlightNameWithError" class="help is-danger">{{ nameErrorLabel }}</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[highlightEmailWithError ? 'input is-danger' : 'input']"
                  type="email"
                  :placeholder="emailPlaceholder"
                  name="emailName"
                  id="emailName"
                  v-model="email"
                  @keyup="checkEmailOnKeyUp(email)"
                  autocomplete="off"
                >
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span v-if="highlightEmailWithError !== null" class="icon is-small is-right">
                  <i :class="[highlightEmailWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                </span>
              </p>
              <p v-if="highlightEmailWithError" class="help is-danger">{{ emailErrorLabel }}</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[highlightPasswordWithError ? 'input is-danger' : 'input']"
                  type="password"
                  id="password"
                  :placeholder="passwordPlaceholder"
                  v-model="password"
                  @keyup="checkPasswordOnKeyUp(password)"
                  autocomplete="off"
                >
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span v-if="highlightPasswordWithError !== null" class="icon is-small is-right">
                  <i :class="[highlightPasswordWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                </span>
              </p>
              <p v-if="highlightPasswordWithError" class="help is-danger">{{ passwordErrorLabel }}</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  :class="[highlightRepeatPasswordWithError ? 'input is-danger' : 'input']"
                  type="password"
                  :placeholder="repeatPasswordPlaceholder"
                  v-model="repeatPassword"
                  @keyup="checkRepeatPasswordOnKeyUp(repeatPassword)"
                >
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span v-if="highlightRepeatPasswordWithError !== null" class="icon is-small is-right">
                  <i :class="[highlightRepeatPasswordWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                </span>
              </p>
              <p v-if="highlightRepeatPasswordWithError" class="help is-danger">{{ notEqualErrorLabel }}</p>
            </div>
          </div>
          <div v-if="!isUserSignedUp" class="agreementation-container">
            <div v-for="(value,id) in this.contactingConsentData" :key="id" class="consent-checkbox-container">
              <input type="checkbox" :id="id" :value="id" v-model="acceptedConsent" @click="consentChecking(id)">
              <label>
                I agree to the <a @click="() => popupConsentModal(id)">{{value.name}}</a>
              </label>
            </div>
          </div>
          <div v-if="isUserSignedUp" class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="title">Welcome {{ name }}!</p>
                <p class="heading">Now you are a member</p>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer-container">
          <button v-if="!isUserSignedUp" class="button is-success" :disabled="!this.consentComplete">{{ primaryBtnLabel }}</button>
          <button v-if="isUserSignedUp" type="button" class="button is-info" @click="toHomePage">{{ btnRegisteredLabel }}</button>
        </footer>
        <div v-if="!isUserSignedUp" class="login-section-container">
          <p>Already registered? <a @click="toLoginPage">Login</a></p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { isValidEmail } from '@/assets/validators';

export default {
	name: 'signup',

  data () {
    return {
      modalTitle: 'Sign up',
      modalTitleRegistered: 'Welcome ',
      primaryBtnLabel: 'Sign up',
      btnRegisteredLabel: 'Close',
      namePlaceholder: 'Name*',
      emailPlaceholder: 'Email*',
      passwordPlaceholder: 'Password*',
      repeatPasswordPlaceholder: 'Repeat Password*',
      notEqualErrorLabel: 'Passwords must be equal',
      passwordErrorLabel: 'Password required',
      nameErrorLabel: 'Name required',
      emailErrorLabel: 'Email required',
      emailNotValidLabel: 'Valid email required',
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      highlightNameWithError: null,
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      highlightRepeatPasswordWithError: null,
      isFormSuccess: false,
      contactingConsentData: {
        '1qZBgGUvpBI4heCPQzfocNyuY1D': {
          name: 'terms and conditions.',
          submitBody: {}
        },
        '1qZCeSoXiawAYwTz5mmop5YyJWf': {
          name: 'privacy policy.',
          submitBody: {}
        }
      },
      popUpCollection: {},
      acceptedConsent: [],
      checkingBoxID: '',
      consentComplete: false,
      onChecking: false,
    };
  },
  
  async mounted() {
    for (let id in this.contactingConsentData) {
      await this.$pam.consentManager.createPopup(id,false,this.sdkCallback).then((popUp) => {this.popUpCollection[id] = popUp});
      await this.popUpCollection[id].renderOnlyPopup();
      await this.popUpCollection[id].unAcceptAllConsent();
    }
  },

  computed: {
    isUserSignedUp () {
      return this.$store.getters.isUserSignedUp;
    },
  },

  methods: {
    sdkCallback(prev,state) {
      this.contactingConsentData[state.consent_message_id].submitBody = { ...state };
      this.consentValidate();
      
      // Checking consent box
      if (
        state.permission?.['terms_and_conditions'] && 
        state.permission?.['privacy_overview']
      ) {
        if (!this.acceptedConsent.includes(state.consent_message_id)) {
          this.acceptedConsent.push(state.consent_message_id);
        }
      }
    },
    popupConsentModal(consentMsgID) {
      this.onChecking = false
      this.popUpCollection[consentMsgID].renderOnlyPopup();
    },
    consentChecking(consentMsgID) {
      this.onChecking = true;
      this.checkingBoxID = consentMsgID;
    },
    consentValidate() {
      if (this.acceptedConsent.length == Object.keys(this.contactingConsentData).length) {
        let counter = 0;
        for (let consentMsgID in this.contactingConsentData) {
          if (
            this.contactingConsentData[consentMsgID].submitBody.permission?.['terms_and_conditions'] && 
            this.contactingConsentData[consentMsgID].submitBody.permission?.['privacy_overview']
          ) {
            counter += 1;
          }
        }
        if (Object.keys(this.contactingConsentData).length == counter) {
          this.consentComplete = true;
        }
      } else {
        this.consentComplete = false;
      }
    },
    async checkForm (e) {
      e.preventDefault();
      
      this.consentValidate();

      if (this.name && this.email && this.password && this.repeatPassword && this.consentComplete) {
        let consentIDs = [];
        for (let consentMsgID in this.contactingConsentData) {
          let res = await this.popUpCollection[consentMsgID].submitConsent();
          consentIDs.push(res.consent_id);
        }
        
        this.highlightEmailWithError = false;
        this.highlightPasswordWithError = false;
        
        this.$store.dispatch('signup', {
          name: this.name,
          email: this.email,
          password: this.password,
          consentIds: consentIDs,
        })
        // this.isFormSuccess = true;
        // this.$store.commit('setUserName', this.name);
        // this.$store.commit('isUserSignedUp', this.isFormSuccess);
        // this.$store.commit('isUserLoggedIn', this.isFormSuccess);
      }

      if (!this.name) {
        this.highlightNameWithError = true;
      } else {
        this.highlightNameWithError = false;
      }

      if (!this.email) {
        this.highlightEmailWithError = true;

        if (this.email && !isValidEmail(this.email)) {
          this.emailErrorLabel = this.emailNotValidLabel;
        }
      } else {
        this.highlightEmailWithError = false;
      }

      if (!this.password) {
        this.highlightPasswordWithError = true;
      } else {
        this.highlightPasswordWithError = false;
      }

      if (!this.repeatPassword) {
        this.highlightRepeatPasswordWithError = true;
      } else {
        this.highlightRepeatPasswordWithError = false;
      }
    },
    checkNameOnKeyUp (nameValue) {
      if (nameValue) {
        this.highlightNameWithError = false;
      } else {
        this.highlightNameWithError = true;
      }
    },
    checkEmailOnKeyUp (emailValue) {
      if (emailValue && isValidEmail(emailValue)) {
        this.highlightEmailWithError = false;
      } else {
        this.highlightEmailWithError = true;

        if (!isValidEmail (emailValue)) {
          this.emailErrorLabel = this.emailNotValidLabel;
        }
      }
    },
    checkPasswordOnKeyUp (passwordValue) {
      if (passwordValue) {
        this.highlightPasswordWithError = false;

        if (this.repeatPassword === this.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightPasswordWithError = true;
      }
    },
    checkRepeatPasswordOnKeyUp (repeatPasswordValue) {
      if (repeatPasswordValue) {
        if (repeatPasswordValue === this.password) {
          this.highlightRepeatPasswordWithError = false;
        } else {
          this.highlightRepeatPasswordWithError = true;
        }
      } else {
        this.highlightRepeatPasswordWithError = true;
      }
    },
    toHomePage() {
      this.$router.push({ name: 'index' });
    },
    toLoginPage() {
      this.$router.push({ name: 'login' });
    },
  },
  
  watch: {
      acceptedConsent: async function () {
        if (this.onChecking) {
          if (this.acceptedConsent.includes(this.checkingBoxID)) {
              await this.popUpCollection[this.checkingBoxID].acceptAllConsent(false); 
          } else {
            await this.popUpCollection[this.checkingBoxID].unAcceptAllConsent();
          }
        }
      }
  }
}
</script>

<style lang="scss" scoped>
.signup-container {
  max-width: 550px;
  min-height: 700px;
  margin: auto;
  padding: 150px 0 90px;
}
.signup-body-container {
  border: 3px solid #f0f0f0;
  border-top: none;
  padding: 40px 30px;
}
.signup-header-container {
  text-align: center;
  padding: 15px 0;
  background-color: #00B0FE;
}
.signup-header-container h2 {
  color: #FFFFFF;
}
.agreementation-container {
  margin: 15px 0 30px;
}
.login-section-container {
  margin-top: 20px;
  text-align: center;
}
.footer-container button {
  width: 100%;
}
.fa-exclamation-circle {
  color: red;
}
.fa-check {
  color: green;
}
.footer-container {
  margin-top: 20px;
}
.consent-checkbox-container {
  display: flex;
  align-items: center;
}
.consent-checkbox-container input {
  margin-right: 5px;
}
.consent-checkbox-container:not(:last-child) {
  margin-bottom: 10px;
}
</style>


