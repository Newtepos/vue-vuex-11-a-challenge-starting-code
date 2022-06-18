import { createStore } from 'vuex';
import productsModule from './modules/products';
import cartsModule from './modules/carts';
import authModule from './modules/auth';

const store = createStore({
  modules: {
    products: productsModule,
    carts: cartsModule,
    auth: authModule,
  },
});

export default store;
