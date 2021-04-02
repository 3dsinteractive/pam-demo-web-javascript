<template>
  <div class="checkout-container">
    <div class="columns">
      <div class="column is-3 column-header field-container"> 
      </div>
      <div class="column is-3 column-header field-container">
        <h3 class="title is-5">Product Name</h3>
      </div>
      <div class="column is-2 column-header field-container">
        <h3 class="title is-5">Price</h3>
      </div>
      <div class="column is-2 column-header field-container center-text">
        <h3 class="title is-5">Quantity</h3>
      </div>
      <div class="column is-2 column-header field-container">
        <h3 class="title is-5">Sub Total</h3>
      </div>
    </div>
    <div>
      <div class="columns product-data-container" v-for="product in products" :key="product.id">
        <div class="column is-3 field-container image-container">
          <div class="remove-btn-container">
            <i @click="onRemoveProduct(product.id)" class="fa fa-times close-btn"></i>
          </div>
          <img :src="getImageUrl(product.image)" alt="product-image" />
        </div>
        <div class="column is-3 field-container">
          <p>{{product.title}}</p>
        </div>
        <div class="column is-2 field-container">
          <p class="product-price">&#3647; {{product.price}}</p>
        </div>
        <div class="column is-2 field-container">
          <div class="product-quantity-container">
            <div @click="() => onDecreaseQuantity(product.id,product.quantityInCart)" class="quantity-controller quantity-decrease-btn">-</div>
            <div class="product-quantity">{{product.quantityInCart}}</div>
            <div @click="() => onIncreaseQuantity(product.id)" class="quantity-controller quantity-increase-btn">+</div>
          </div>
        </div>
        <div class="column is-2 field-container">
          <p>&#3647; {{getSubTotalPrice(product.price,product.quantityInCart)}}</p>
        </div>
      </div>
    </div>
    <div class="footer-container">
      <div class="price-summary-container columns">
        <div>
          <p class="price-tag">Sub Total</p>
          <p>&#3647; {{getSummarySubTotal()}}</p>
        </div>
        <div>
          <p>7% VAT</p>
          <p>&#3647; {{getVAT()}}</p>
        </div>
        <div>
          <p>Grand Total</p>
          <p>&#3647; {{getGrandTotal()}}</p>
        </div>
      </div>
      <div class="purchase-btn-container">
        <button @click="toPurchasePage" class="button is-success is-medium">Purchase</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'checkout',

  data () {
    return {
      subTotalSummary: 0,
      vat: 0,
    };
  },

  computed: {
    products () {
      return this.$store.getters.productsAdded;
    },
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		}
  },

  methods: {
    onIncreaseQuantity (id) {
      let data = {
        id: id,
        quantity: 1
      }
      this.$store.commit('increaseQuantityOnCart', data);
    },
    onDecreaseQuantity (id, currentQuantity) {
      let data = {
        id: id,
        quantity: 1,
        status: false
      }
      if(currentQuantity > 1) {
        this.$store.commit('decreaseQuantityOnCart', data);
      } else {
        this.$store.commit('removeFromCart', id);
        this.$store.commit('setAddedBtn', data);
      }
    },
    onRemoveProduct(id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    getSubTotalPrice(price,quantity) {
      return parseFloat(quantity).toFixed(2) * parseFloat(price).toFixed(2);
    },
    getSummarySubTotal() {
      let summary = 0;
      this.products.forEach(item => {
        let subTotal = item.price * item.quantityInCart;
        summary += subTotal;
      });
      this.subTotalSummary = summary;
      return summary;
    },
    getVAT() {
      let vatAmount = parseFloat(this.subTotalSummary * 0.07).toFixed(2);
      this.vat = vatAmount;
      return vatAmount;
    },
    getGrandTotal() {
      return parseFloat(this.subTotalSummary) + parseFloat(this.vat);
    },
    getImageUrl(imgName) {
      var images = require.context('../../static/', false, /\.jpeg$/)
      return images('./' + imgName)
    },
    toPurchasePage() {
      this.$pam.send('purchase_success', '', {
        'product_ids': this.products.map(p => p.id).join(','),
        'amount': this.getGrandTotal()
      })
      this.$router.push({ name: 'thankyou' });
      this.$store.commit('clearCart');
    },
  },
}
</script>

<style lang="scss" scoped>
  .checkout-container {
    max-width: 1140px;
    margin: 150px auto 0;
    min-height: calc(100vh - 300px);
  }
  .field-container {
    display: flex;
    align-items: center;
    padding: 10px 1.5rem;
  }
  .center-text {
    justify-content: center;
  }
  .column-header {
    padding: 15px 1.5rem;
    background-color: #51bafc;
  }
  .product-data-container {
    border-left: 3px solid #f0f0f0;
    border-right: 3px solid #f0f0f0;
    border-bottom: 3px solid #f0f0f0;
  }
  .column-header:not(:last-child) {
    border-right: 0.5px solid #ffffff81;
  }
  .column-header h3 {
    color: #FFFFFF !important;
  }
  .product-price {
    color: #888;
  }
  .image-container img {
    width: 50%;
    height: 100px;
    object-fit: cover;
  }
  .product-quantity-container {
    display: flex;
    border: 1px solid #f0f0f0;
  }
  .product-quantity-container {
    width: 100%;
  }
  .quantity-controller {
    cursor: pointer;
    padding: 5px 10px;
  }
  .quantity-controller:hover {
    background-color: #f0f0f0;
  }
  .quantity-decrease-btn {
    border-right: 1px solid #f0f0f0;
  }
  .quantity-increase-btn {
    border-left: 1px solid #f0f0f0;
  }
  .product-quantity {
    margin: auto;
  }
  .remove-btn-container {
    margin-right: 30px;
  }
  .close-btn {
    cursor: pointer;
  }
  .footer-container {
    display: flex;
    flex-direction: column;
  }
  .price-summary-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-left: auto;
    padding: 40px 30px 10px 0;
    border-bottom: 3px solid #f0f0f0;
  }
  .price-summary-container div {
    display: flex;
    margin-bottom: 5px;
  }
  .price-summary-container div p {
    flex-basis: 50%;
    text-align: right;
  }
  .purchase-btn-container {
    width: 250px;
    margin-left: auto;
    margin-top: 5px;
  }
  .purchase-btn-container button {
    width: 100%;
  }
</style>


