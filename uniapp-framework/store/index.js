import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		hasLogin: uni.getStorageSync("hasLogin") || false,
		user: uni.getStorageSync("user") || {},
		token: uni.getStorageSync("token") || ""
	},
	mutations: {
		login(state, user) {
			state.hasLogin = true;
			state.user = user;
			state.token = user.token;
			uni.setStorageSync("user", user);
			uni.setStorageSync("hasLogin", true);
			uni.setStorageSync("token", user.token);
		},
		logout(state) {
			state.hasLogin = false;
			state.user = {};
			uni.clearStorageSync("user");
			uni.clearStorageSync("hasLogin");
			uni.clearStorageSync("token");

		}
	}
})
export default store;
