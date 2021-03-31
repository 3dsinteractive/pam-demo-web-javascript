<template>
  <div class="related-products-container">
    <div class="title-container">
      <h4 class="title is-4">Related Products</h4>
    </div>
    <div class="columns is-centered is-multiline" v-if="relatedProducts">
      <div class="card column" v-for="product in relatedProducts" :key="product.id">
        <VmProducts :product="product" :isRelatedProduct="true"></VmProducts>
      </div>
      <div class="section" v-if="relatedProducts.length === 0">
        <p>{{ noProductLabel }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VmProducts from '../Products';
import { getByTitle } from '@/assets/filters';

export default {
  name: 'relatedProductsList',
  props: ['mainProductID'],
  
  components: { VmProducts },
  
  async created() {
    this.relatedProducts = await this.getRelatedProducts(this.$store.state.products, this.$props.mainProductID);
  },
  
  data () {
    return {
      id: '',
      noProductLabel: 'No product found',
      productsFiltered: [],
      relatedProducts: [],
    };
  },


  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.state.products,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    },
    async getRelatedProducts (products, mainID) {
      return new Promise(function(resolve, reject) {
        let allProducts = [...products];
        let relatedProducts = new Array();
        let index = 9;
        for (let i = 0 ; i < 9 ; i++) {
          const randIdx = Math.floor(Math.random() * index);
          if (allProducts[randIdx].id != mainID) {
            relatedProducts.push(allProducts[randIdx]);
            if (relatedProducts.length === 4) {
              break;
            }
          }
          
          allProducts.splice(randIdx, 1);
          index -= 1;
        }
        resolve(relatedProducts);
        // return relatedProducts;
      });
    },
  }
};
</script>

<style lang="scss" scoped>
  .related-products-container {
    max-width: 1140px;
    margin: auto;
    margin-top: 50px;
  }
  .title-container {
    border-bottom: 3px solid #f0f0f0;
    padding: 10px 0;
    margin-bottom: 20px;
  }
  .card {
    margin: 10px;
  }
</style>
