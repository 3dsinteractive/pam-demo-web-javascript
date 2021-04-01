<template>
  <div class="product-detail-container">
    <div class="section">
      <div class="card is-clearfix main-product-container">
          <figure class="card-image column is-two-fifths">
            <img class="product-img" :src="getImageUrl(product.image)" alt="Placeholder image">
          </figure>
          <div class="column is-three-fifths">
            <div class="card-content__title">
              <h2 class="title is-3">{{ product.title }}
                <!-- <button class="button is-small" :title="removeFromFavouriteLabel" v-show="product.isFavourite" @click="removeFromFavourite(product.id)">
                  <span class="icon is-small">
                    <i class="fa fa-heart"></i>
                  </span>
                </button>
                <button class="button is-small" :title="addToFavouriteLabel" v-show="!product.isFavourite" @click="saveToFavorite(product.id)">
                  <span class="icon is-small">
                    <i class="fa fa-heart-o"></i>
                  </span>
                </button> -->
              </h2>
            </div>
            <div class="card-content__text">
              <p>{{product.fullDescription}}</p>
            </div>
            <div class="card-content__ratings" v-if="product.ratings === 1">
              <i class="fa fa-star"></i>
            </div>
            <div class="card-content__ratings" v-else-if="product.ratings === 2">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="card-content__ratings" v-else-if="product.ratings === 3">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="card-content__ratings" v-else-if="product.ratings === 4">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="card-content__ratings" v-else-if="product.ratings === 5">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <div class="card-content__reviews">
              <div class="is-pulled-left">
                <p><strong>{{ product.reviews > 0 ? `${product.reviews} Reviews` : 'No reviews' }}</strong></p>
              </div>
              <div class="select is-rounded is-small is-pulled-right">
                <select @change="onSelectQuantity(product.id)" v-model="selected">
                  <option v-for="(quantity,index) in quantityArray" :value="quantity" :key="index">{{ quantity }}</option>
                </select>
              </div>
            </div>
            <div class="card-content__price is-pulled-left">
              <span class="title is-3"><strong>{{ product.price }}&#3647;</strong></span>
            </div>
            <div class="card-content__btn is-pulled-right">
              <button class="button is-primary" v-if="!isAddedBtn" @click="addToCart(product.id)">{{ addToCartLabel }}</button>
              <button class="button is-text" v-if="isAddedBtn" @click="removeFromCart(product.id)">{{ removeFromCartLabel }}</button>
            </div>
        </div>
      </div>
    </div>
    <RelatedProducts :mainProductID="$route.params.id"></RelatedProducts>
  </div>
</template>

<script>
import RelatedProducts from '../../components/products_list/RelatedProductsListContainer';

export default {
  name: 'product_detail-id',
  
  components: { RelatedProducts },

  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  
  data () {
    return {
      addToCartLabel: 'Add to cart',
      removeFromCartLabel: 'Remove from cart',
      // addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      product: {},
      selected: 1,
      quantityArray: []
    };
  },
  
  created() {
    this.product = this.$store.getters.getProductById(this.$route.params.id);
  },

  mounted () {
    this.selected = this.product.quantity;

    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }
  },

  computed: {
    isAddedBtn () {
      return this.product.isAddedBtn;
    }
  },

  methods: {
    addToCart (id) {
      let data = {
        id: id,
        status: true
      }
      this.$store.dispatch('addToCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    },
    saveToFavorite (id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        // this.$store.commit('addToFavourite', id);
      } else {
        this.$store.commit('showLoginModal', true);
      }
    },
    removeFromFavourite (id) {
      this.$store.commit('removeFromFavourite', id);
    },
    getImageUrl(imgName) {
      var images = require.context('../../static/', false, /\.jpeg$/);
      return images('./' + imgName);
    },
  }
};
</script>

<style lang="scss" scoped>
  .product-detail-container {
    margin-bottom: 30px;
  }
  .section {
    max-width: 1140px;
    margin: auto;
    margin-top: 120px;
    padding: 0px !important;
    // padding: 100px calc((100vw - 1140px) / 2);
  }
  .main-product-container {
    display: flex;
  }
  .card-content {
    padding: 15px 10px 15px 0;

    &__text {
      margin: 15px 0;
    }
    &__reviews {
      display: inline-block;
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .product-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: 50% 20%;
  }
</style>

