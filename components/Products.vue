<template>
  <div>
    <div class="card-image image-container">
      <img :src="getImageUrl(product.image)" alt="Placeholder image">
    </div>
    <div class="card-content">
      <div class="media product-title">
        <div class="media-content">
          <p class="title is-4">{{ product.title }}</p>
        </div>
        <!-- <div>
          <button class="button is-small" :title="removeFromFavouriteLabel" v-show="product.isFavourite" @click="removeFromFavourite(product.id)">
            <span class="icon is-small">
              <i class="fa fa-heart"></i>
            </span>
          </button>
          <button class="button is-small" :title="addToFavouriteLabel" v-show="!product.isFavourite" @click="saveToFavorite(product.id)">
            <span class="icon is-small">
              <i class="fa fa-heart-o"></i>
            </span>
          </button>
        </div> -->
      </div>
      <div class="content is-clearfix">
        <p>{{ product.description }}</p>
        <div class="is-pulled-left" v-if="!isRelatedProduct">
          <i v-if="product.ratings === 1" class="fa fa-star"></i>
          <i v-if="product.ratings === 2" class="fa fa-star"></i>
          <i v-if="product.ratings === 2" class="fa fa-star"></i>
          <i v-if="product.ratings === 3" class="fa fa-star"></i>
          <i v-if="product.ratings === 3" class="fa fa-star"></i>
          <i v-if="product.ratings === 3" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 4" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <i v-if="product.ratings === 5" class="fa fa-star"></i>
          <p>{{ product.reviews > 0 ? `${product.reviews} Reviews` : 'No reviews' }}</p>
        </div>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>{{ product.price }}&#3647;</strong></span>
        </p>
      </div>
      <div v-if="!isRelatedProduct" class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <button class="button is-primary" @click="addToCart(product.id)">{{ addToCartLabel }}</button>
            <!-- <button class="button is-text" v-if="product.isAddedToCart" @click="removeFromCart(product.id, false)">{{ removeFromCartLabel }}</button> -->
          </div>
           <div class="select is-rounded is-small">
            <select @change="onSelectQuantity(product.id)" v-model="selected">
              <option v-for="(quantity,index) in quantityArray" :value="quantity" :key="index">{{ quantity }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link
      class="details"
      :to="{
        name: 'product_detail-id',
        params: {
          id: product.id,
          title: product.title,
          price: product.price,
          rating: product.ratings,
          reviews: product.reviews,
          isAddedBtn: product.isAddedBtn
        }
      }"
    >
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'products',
  props: ['product','isRelatedProduct'],

  data () {
    return {
      addToCartLabel: 'Add to cart',
      viewDetailsLabel: 'Details',
      // removeFromCartLabel: 'Remove from cart',
      // addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      selected: 1,
      quantityArray: []
    }
  },

  mounted () {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
    }
  },

  computed: {
    isUserLogged () {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  methods: {
    addToCart (id) {
      let data = {
        id: id,
        status: false
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
    // saveToFavorite (id) {
    //   let isUserLogged = this.$store.state.userInfo.isLoggedIn;

    //   if (isUserLogged) {
    //     this.$store.commit('addToFavourite', id);
    //   } else {
    //     this.$store.commit('showLoginModal', true);
    //   }
    // },
    // removeFromFavourite (id) {
    //   this.$store.commit('removeFromFavourite', id);
    // },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    },
    getImageUrl(imgName) {
      var images = require.context('../static/', false, /\.jpeg$/)
      return images('./' + imgName)
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-container img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  .details {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      &:hover {
        border: 1px solid #51bafc;
      }
  }
  .button,
  .select {
    z-index: 2;
  }
  .select {
    position: absolute;
    right: 15px;
    bottom: 35px;
  }
  .card-content {
    padding: 0;
  }
  .buttons {
    margin: 0;
  }
  .product-title {
    margin: 10px 0 15px !important;
  }
  .card-footer-item {
    padding-left: 0px !important;
  }
</style>


