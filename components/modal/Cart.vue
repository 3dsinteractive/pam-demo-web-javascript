<template>
	<div :class="[ openModal ? 'is-active' : '', 'modal' ]">
		<div class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">{{ modalTitle }}</p>
				<button class="delete" aria-label="close" @click="closeModal(false)"></button>
			</header>
			<section class="modal-card-body">
				<div>
					<div class="box" v-for="product in products" :key="product.id">
						<button class="is-pulled-right button is-info is-inverted" @click="removeFromCart(product.id)">{{ removeLabel }}</button>
						<p>{{ product.title }}  {{ product.quantityInCart > 0 ?  ` - Quantity: ${product.quantityInCart}` : ''}}</p>
						<p>{{ product.price }} &euro;</p>
					</div>
					<div v-if="products.length === 0">
						<p>{{ cartEmptyLabel }}</p>
					</div>
				</div>
				<!-- <div v-if="isCartSection">
					<p>You bought it :-)</p>
				</div> -->
			</section>
			<footer class="modal-card-foot">
				<button v-show="products.length > 0" class="button is-success" @click="onCheckout">{{ buyLabel }}&#3647;</button>
				<!-- <button v-if="isCartSection" class="button is-success" @click="closeModal(true)">{{ closeLabel }}</button> -->
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	name: 'cart',
    
	data () {
		return {
			modalTitle: 'Cart',
			removeLabel: 'Remove from cart',
			cartEmptyLabel: 'Your cart is empty',
			closeLabel: 'Close',
			isCartSection: false
		}
	},

	computed: {
			products () {
				return this.$store.getters.productsAdded;
			},
			openModal () {
				if (this.$store.getters.isCartModalOpen) {
					return true;
				} else {
					return false;
				}
			},
			buyLabel () {
				let totalProducts = this.products.length,
						productsAdded = this.$store.getters.productsAdded,
						pricesArray = [],
						productLabel = '',
						finalPrice = '',
						quantity = 1;

				productsAdded.forEach(product => {

					if (product.quantityInCart >= 1) {
						quantity = product.quantityInCart;
					}

					pricesArray.push((product.price * quantity)); // get the price of every product added and multiply quantity
				});

				finalPrice = pricesArray.reduce((a, b) => a + b, 0); // sum the prices
				
				if (totalProducts > 1) { // set plural or singular
					productLabel = 'products';
				} else {
					productLabel = 'product';
				}
				return `Checkout ${totalProducts} ${productLabel} at ${finalPrice}`;
		},
		isUserLoggedIn () {
			return this.$store.getters.isUserLoggedIn;
		}
	},

	methods: {
		closeModal (reloadPage) {
			this.$store.commit('showCartModal', false);

			if (reloadPage) {
				window.location.reload();
			}
		},
		removeFromCart (id) {
			let data = {
					id: id,
					status: false
			}
			this.$store.commit('removeFromCart', id);
			this.$store.commit('setAddedBtn', data);
		},
		toCheckoutPage() {
			this.$router.push({ name: 'checkout' });
			this.$store.commit('showCartModal', false);
		},
		onCheckout () {
			if (this.isUserLoggedIn) {
				this.toCheckoutPage();
			} else {
				this.$store.commit('showCartModal', false);
				this.$store.commit('showLoginModal', true);
			}
		},
		onPrevBtn () {
			this.isCartSection = false;
		}
	}
}
</script>

