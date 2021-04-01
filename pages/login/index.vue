<template>
  <form @submit="checkForm" action="#" method="post">
    <div class="signup-container">
      <div class="signup-header-container">
        <h2 class="subtitle is-3">Log In</h2>
      </div>
      <div class="signup-body-container"> 
        <section>
          <div v-if="!isUserLoggedIn">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                  <input
                    :class="[highlightEmailWithError ? 'input is-danger' : 'input']"
                    type="email"
                    :placeholder="emailPlaceholder"
                    name="emailName"
                    v-model="email"
                    @keyup="checkEmailOnKeyUp(email)"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span v-if="highlightEmailWithError !== null" class="icon is-small is-right">
                    <i :class="[highlightEmailWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                  </span>
                </p>
                <p v-if="highlightEmailWithError" class="help is-danger">{{ emailRequiredLabel }}</p>
            </div>
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input 
                  :class="[highlightPasswordWithError ? 'input is-danger' : 'input']"
                  type="password"
                  placeholder="Your password"
                  name="passwordName"
                  v-model="password"
                  @keyup="checkPasswordOnKeyUp(password)"
                >
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                <span v-if="highlightPasswordWithError !== null" class="icon is-small is-right">
                  <i :class="[highlightPasswordWithError ? 'fa fa-exclamation-circle' : 'fa fa-check']"></i>
                </span>
              </p>
              <p v-if="highlightPasswordWithError" class="help is-danger">{{ passwordRequiredLabel }}</p>
            </div>
          </div>
          <div v-if="isUserLoggedIn" class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="title">Welcome back!</p>
                <p class="heading">Now you are logged in</p>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer-container">
          <button v-if="!isUserLoggedIn" type="submit" class="button is-info">{{ primaryBtnLabel }}</button>
          <button v-if="isUserLoggedIn" type="button" class="button is-info" @click="toHomePage">{{ btnLoggedInLabel }}</button>
        </footer>
        <div v-if="!isUserLoggedIn" class="login-section-container">
          <p>Don’t have an account? <a href="#">Create one</a></p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { isValidEmail } from '@/assets/validators';

export default {
  name: 'login',

  data () {
    return {
      modalTitle: 'Log in',
      modalTitleLoggedIn: 'Welcome!',
      primaryBtnLabel: 'Log in',
      emailRequiredLabel: 'Email required',
      passwordRequiredLabel: 'Password required',
      emailNotValidLabel: 'Valid email required',
      btnLoggedInLabel: 'Close',
      emailPlaceholder: 'Your email',
      email: '',
      password: '',
      highlightEmailWithError: null,
      highlightPasswordWithError: null,
      isFormSuccess: false
    };
  },

  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn;
    },
    openModal () {
      if (this.$store.getters.isLoginModalOpen) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    toHomePage() {
      this.$router.push({ name: 'index' });
    },
    closeModal () {
      this.$store.commit('showLoginModal', false);
    },
    checkForm (e) {
      e.preventDefault();

      if (this.email && this.password) {
        this.highlightEmailWithError = false;
        this.highlightPasswordWithError = false;
        this.isFormSuccess = true;
        // this.$store.commit('isUserLoggedIn', this.isFormSuccess);
      }

      if (!this.email) {
        this.highlightEmailWithError = true;

        if (this.email && !isValidEmail(this.email)) {
          this.emailRequiredLabel = this.emailNotValidLabel;
        }
      } else {
        this.highlightEmailWithError = false;
      }

      if (!this.password) {
        this.highlightPasswordWithError = true;
      } else {
        this.highlightPasswordWithError = false;
      }

      this.$store.dispatch('login', { email: this.email, password: this.password })
    },
    checkEmailOnKeyUp (emailValue) {
      if (emailValue && isValidEmail(emailValue)) {
        this.highlightEmailWithError = false;
      } else {
        this.highlightEmailWithError = true;

        if (!isValidEmail(emailValue)) {
          this.emailRequiredLabel = this.emailNotValidLabel;
        }
      }
    },
    checkPasswordOnKeyUp (passwordValue) {
      if (passwordValue) {
        this.highlightPasswordWithError = false;
      } else {
        this.highlightPasswordWithError = true;
      }
    }
  }
};
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

.footer-container {
  margin-top: 40px;
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
</style>


