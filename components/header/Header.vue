<template>
  <div class="navbar-container">
    <nav class="navbar is-fixed-top navbar-custom is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </nuxt-link>

        <a role="button" class="navbar-burger burger" @click="isMenuOpen = !isMenuOpen" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!-- <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <VmSearch></VmSearch>
          </div>
        </div> -->
        
        <!-- <div class="navbar-end">
          <div class="navbar-item shopping-cart" @click="showCartModal">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{ numProductsAdded }}</span>
          </div>
        </div> -->
      <!-- </div> -->

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <VmMenu></VmMenu>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <VmMenu></VmMenu>
      </div>
    </nav>
  </div>
</template>

<script>
  import VmMenu from '../menu/Menu';
  import VmSearch from '../search/Search';

  export default {
    name: 'VmHeader',

    data () {
      return {
        linkedinTooltip: 'Follow us on Linkedin',
        facebookTooltip: 'Follow us on Facebook',
        twitterTooltip: 'Follow us on Twitter',
        instagramTooltip: 'Follow us on Instagram',
        isCartActive: false,
        isMenuOpen: false
      }
    },

    components: {
      VmSearch,
      VmMenu
    },

    computed: {
      numProductsAdded () {
        return this.$store.getters.productsAdded.length;
      }
    },

    methods: {
      showCartModal () {
        this.$store.commit('showCartModal', true);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .navbar {
    background-color: #00B0FE !important;
  }
  .navbar-custom {
    box-shadow: 0 2px 4px #0000002c;
    padding: 10px calc((100vw - 1140px) / 2);
  }
  .title {
    background: url('../../static/boodabest-logo-white.svg') no-repeat;
    background-position: 50% 50%;
    background-size: 165px;
    width: 175px;
    height: 50px;
  }
  .shopping-cart {
    cursor: pointer;
    color: #FFFFFF;
    font-size: 16px;
  }
  a {
    color: grey;
  }
</style>
