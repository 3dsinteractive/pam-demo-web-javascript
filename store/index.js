export const state = () => ({
    products: [{
            id: 1,
            title: 'Product 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut varius turpis. Donec eu volutpat mauris. In imperdiet condimentum felis ac tincidunt. Phasellus ut iaculis velit. Vestibulum sapien nisl, porttitor id luctus a, congue non dui. Ut non volutpat magna, quis ornare tortor. Nullam in tristique nibh. Cras non laoreet ligula. Suspendisse gravida tincidunt pellentesque. Aenean lobortis odio sem, commodo dignissim ante lacinia ut. Nulla suscipit velit ut est consectetur, ac ultricies velit consectetur. Integer massa leo, tempus dapibus massa in, convallis interdum turpis. Duis non imperdiet elit, et porta enim. Etiam interdum dui non ante rutrum pretium. Phasellus sodales porttitor sem. Duis et dapibus quam.',
            price: 50,
            ratings: 3,
            reviews: 5,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantityInCart: 0,
            quantity: 1,
            image: 'product-img-01.jpeg'
        },
        {
            id: 2,
            title: 'Product 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut varius turpis. Donec eu volutpat mauris. In imperdiet condimentum felis ac tincidunt. Phasellus ut iaculis velit. Vestibulum sapien nisl, porttitor id luctus a, congue non dui. Ut non volutpat magna, quis ornare tortor. Nullam in tristique nibh. Cras non laoreet ligula. Suspendisse gravida tincidunt pellentesque. Aenean lobortis odio sem, commodo dignissim ante lacinia ut. Nulla suscipit velit ut est consectetur, ac ultricies velit consectetur. Integer massa leo, tempus dapibus massa in, convallis interdum turpis. Duis non imperdiet elit, et porta enim. Etiam interdum dui non ante rutrum pretium. Phasellus sodales porttitor sem. Duis et dapibus quam.',
            price: 35,
            ratings: 5,
            reviews: 10,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantityInCart: 0,
            quantity: 1,
            image: 'product-img-02.jpeg'
        },
        {
            id: 3,
            title: 'Product 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut varius turpis. Donec eu volutpat mauris. In imperdiet condimentum felis ac tincidunt. Phasellus ut iaculis velit. Vestibulum sapien nisl, porttitor id luctus a, congue non dui. Ut non volutpat magna, quis ornare tortor. Nullam in tristique nibh. Cras non laoreet ligula. Suspendisse gravida tincidunt pellentesque. Aenean lobortis odio sem, commodo dignissim ante lacinia ut. Nulla suscipit velit ut est consectetur, ac ultricies velit consectetur. Integer massa leo, tempus dapibus massa in, convallis interdum turpis. Duis non imperdiet elit, et porta enim. Etiam interdum dui non ante rutrum pretium. Phasellus sodales porttitor sem. Duis et dapibus quam.',
            price: 110,
            ratings: 2,
            reviews: 3,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantityInCart: 0,
            quantity: 1,
            image: 'product-img-03.jpeg'
        },
        {
            id: 4,
            title: 'Product 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut varius turpis. Donec eu volutpat mauris. In imperdiet condimentum felis ac tincidunt. Phasellus ut iaculis velit. Vestibulum sapien nisl, porttitor id luctus a, congue non dui. Ut non volutpat magna, quis ornare tortor. Nullam in tristique nibh. Cras non laoreet ligula. Suspendisse gravida tincidunt pellentesque. Aenean lobortis odio sem, commodo dignissim ante lacinia ut. Nulla suscipit velit ut est consectetur, ac ultricies velit consectetur. Integer massa leo, tempus dapibus massa in, convallis interdum turpis. Duis non imperdiet elit, et porta enim. Etiam interdum dui non ante rutrum pretium. Phasellus sodales porttitor sem. Duis et dapibus quam.',
            price: 50,
            ratings: 1,
            reviews: 0,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantityInCart: 0,
            quantity: 1,
            image: 'product-img-04.jpeg'
        },
        {
            id: 5,
            title: 'Product 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut varius turpis. Donec eu volutpat mauris. In imperdiet condimentum felis ac tincidunt. Phasellus ut iaculis velit. Vestibulum sapien nisl, porttitor id luctus a, congue non dui. Ut non volutpat magna, quis ornare tortor. Nullam in tristique nibh. Cras non laoreet ligula. Suspendisse gravida tincidunt pellentesque. Aenean lobortis odio sem, commodo dignissim ante lacinia ut. Nulla suscipit velit ut est consectetur, ac ultricies velit consectetur. Integer massa leo, tempus dapibus massa in, convallis interdum turpis. Duis non imperdiet elit, et porta enim. Etiam interdum dui non ante rutrum pretium. Phasellus sodales porttitor sem. Duis et dapibus quam.',
            price: 35,
            ratings: 4,
            reviews: 2,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantityInCart: 0,
            quantity: 1,
            image: 'product-img-05.jpeg'
        },
        {
            id: 6,
            title: 'Product 6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut varius turpis. Donec eu volutpat mauris. In imperdiet condimentum felis ac tincidunt. Phasellus ut iaculis velit. Vestibulum sapien nisl, porttitor id luctus a, congue non dui. Ut non volutpat magna, quis ornare tortor. Nullam in tristique nibh. Cras non laoreet ligula. Suspendisse gravida tincidunt pellentesque. Aenean lobortis odio sem, commodo dignissim ante lacinia ut. Nulla suscipit velit ut est consectetur, ac ultricies velit consectetur. Integer massa leo, tempus dapibus massa in, convallis interdum turpis. Duis non imperdiet elit, et porta enim. Etiam interdum dui non ante rutrum pretium. Phasellus sodales porttitor sem. Duis et dapibus quam.',
            price: 110,
            ratings: 5,
            reviews: 1,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantityInCart: 0,
            quantity: 1,
            image: 'product-img-06.jpeg'
        },
        {
            id: 7,
            title: 'Product 7',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut varius turpis. Donec eu volutpat mauris. In imperdiet condimentum felis ac tincidunt. Phasellus ut iaculis velit. Vestibulum sapien nisl, porttitor id luctus a, congue non dui. Ut non volutpat magna, quis ornare tortor. Nullam in tristique nibh. Cras non laoreet ligula. Suspendisse gravida tincidunt pellentesque. Aenean lobortis odio sem, commodo dignissim ante lacinia ut. Nulla suscipit velit ut est consectetur, ac ultricies velit consectetur. Integer massa leo, tempus dapibus massa in, convallis interdum turpis. Duis non imperdiet elit, et porta enim. Etiam interdum dui non ante rutrum pretium. Phasellus sodales porttitor sem. Duis et dapibus quam.',
            price: 50,
            ratings: 5,
            reviews: 7,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantityInCart: 0,
            quantity: 1,
            image: 'product-img-07.jpeg'
        },
        {
            id: 8,
            title: 'Product 8',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut varius turpis. Donec eu volutpat mauris. In imperdiet condimentum felis ac tincidunt. Phasellus ut iaculis velit. Vestibulum sapien nisl, porttitor id luctus a, congue non dui. Ut non volutpat magna, quis ornare tortor. Nullam in tristique nibh. Cras non laoreet ligula. Suspendisse gravida tincidunt pellentesque. Aenean lobortis odio sem, commodo dignissim ante lacinia ut. Nulla suscipit velit ut est consectetur, ac ultricies velit consectetur. Integer massa leo, tempus dapibus massa in, convallis interdum turpis. Duis non imperdiet elit, et porta enim. Etiam interdum dui non ante rutrum pretium. Phasellus sodales porttitor sem. Duis et dapibus quam.',
            price: 35,
            ratings: 3,
            reviews: 0,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantityInCart: 0,
            quantity: 1,
            image: 'product-img-08.jpeg'
        },
        {
            id: 9,
            title: 'Product 9',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut varius turpis. Donec eu volutpat mauris. In imperdiet condimentum felis ac tincidunt. Phasellus ut iaculis velit. Vestibulum sapien nisl, porttitor id luctus a, congue non dui. Ut non volutpat magna, quis ornare tortor. Nullam in tristique nibh. Cras non laoreet ligula. Suspendisse gravida tincidunt pellentesque. Aenean lobortis odio sem, commodo dignissim ante lacinia ut. Nulla suscipit velit ut est consectetur, ac ultricies velit consectetur. Integer massa leo, tempus dapibus massa in, convallis interdum turpis. Duis non imperdiet elit, et porta enim. Etiam interdum dui non ante rutrum pretium. Phasellus sodales porttitor sem. Duis et dapibus quam.',
            price: 110,
            ratings: 4,
            reviews: 2,
            isAddedToCart: false,
            isAddedBtn: false,
            isFavourite: false,
            quantityInCart: 0,
            quantity: 1,
            image: 'product-img-09.jpeg'
        }
    ],
    userInfo: {
        isLoggedIn: false,
        isSignedUp: false,
        hasSearched: false,
        name: '',
        productTitleSearched: ''
    },
    systemInfo: {
        openLoginModal: false,
        openSignupModal: false,
        openCartModal: false
    }
})

export const getters = {
    productsAdded: state => {
        return state.products.filter(el => {
            return el.isAddedToCart;
        });
    },
    productsAddedToFavourite: state => {
        return state.products.filter(el => {
            return el.isFavourite;
        });
    },
    getProductById: state => id => {
        return state.products.find(product => product.id == id);
    },
    isUserLoggedIn: state => {
        return state.userInfo.isLoggedIn;
    },
    isUserSignedUp: state => {
        return state.userInfo.isSignedUp;
    },
    getUserName: state => {
        return state.userInfo.name;
    },
    isLoginModalOpen: state => {
        return state.systemInfo.openLoginModal;
    },
    isSignupModalOpen: state => {
        return state.systemInfo.openSignupModal;
    },
    isCartModalOpen: state => {
        return state.systemInfo.openCartModal;
    },
    quantity: state => {
        return state.products.quantity;
    }
}

export const mutations = {
        addToCart: (state, id) => {
            state.products.forEach(el => {
                if (id === el.id) {
                    el.isAddedToCart = true;
                    el.quantityInCart += el.quantity;
                }
            });
        },
        setAddedBtn: (state, data) => {
            state.products.forEach(el => {
                if (data.id === el.id) {
                    el.isAddedBtn = data.status;
                }
            });
        },
        removeFromCart: (state, id) => {
            state.products.forEach(el => {
                if (id === el.id) {
                    el.isAddedToCart = false;
                    el.quantityInCart = 0;
                }
            });
        },
        clearCart: (state) => {
            state.products.forEach(el => {
                el.isAddedToCart = false;
                el.quantityInCart = 0;
            });
        },
        increaseQuantityOnCart: (state, data) => {
            state.products.forEach(el => {
                if (data.id === el.id) {
                    el.quantityInCart += data.quantity;
                }
            });
        },
        decreaseQuantityOnCart: (state, data) => {
            state.products.forEach(el => {
                if (data.id === el.id) {
                    el.quantityInCart -= data.quantity;
                }
            });
        },
        // removeProductsFromFavourite: state => {
        //     state.products.filter(el => {
        //         el.isFavourite = false;
        //     });
        // },
        isUserLoggedIn: (state, isUserLoggedIn) => {
            state.userInfo.isLoggedIn = isUserLoggedIn;
        },
        isUserSignedUp: (state, isSignedUp) => {
            state.userInfo.isSignedUp = isSignedUp;
        },
        setHasUserSearched: (state, hasSearched) => {
            state.userInfo.hasSearched = hasSearched;
        },
        setUserName: (state, name) => {
            state.userInfo.name = name;
        },
        setProductTitleSearched: (state, titleSearched) => {
            state.userInfo.productTitleSearched = titleSearched;
        },
        showLoginModal: (state, show) => {
            state.systemInfo.openLoginModal = show;
        },
        showSignupModal: (state, show) => {
            state.systemInfo.openSignupModal = show;
        },
        showCartModal: (state, show) => {
            state.systemInfo.openCartModal = show;
        },
        // addToFavourite: (state, id) => {
        //     state.products.forEach(el => {
        //         if (id === el.id) {
        //             el.isFavourite = true;
        //         }
        //     });
        // },
        removeFromFavourite: (state, id) => {
            state.products.forEach(el => {
                if (id === el.id) {
                    el.isFavourite = false;
                }
            });
        },
        quantity: (state, data) => {
            state.products.forEach(el => {
                if (data.id === el.id) {
                    el.quantity = data.quantity;
                }
            });
        },
        SET_USER(state, authUser) {
            state.authUser = authUser
        }
    }
    /* 
    export const actions = {
      async nuxtServerInit({ commit }) {
        const res = await this.$axios.get("/api/current_user")
        commit("SET_USER", res.data)
      },

      async logout({ commit }) {
        const { data } = await this.$axios.get("/api/logout")
        if (data.ok) commit("SET_USER", null)
      },

      async handleToken({ commit }, token) {
        const res = await this.$axios.post("/api/stripe", token)
        commit("SET_USER", res.data)
      }
    } */

    export const actions = {
        async addToCart({ commit }, id) {
            commit('addToCart', id);
            this.$pam.send('add_to_cart', '', { product_id: id });
        },

        async removeFromCart({ commit }, id) {
            commit('removeFromCart', id);
            this.$pam.send('remove_from_cart', '', { product_id: id })
        },

        async login({ commit }, { idKey, id }) {
            
        },

        async register({ commit }, { idKey, id, consentIds }) {
            
        },

        async logout({ commit }, { idKey, id }) {

        },
    }