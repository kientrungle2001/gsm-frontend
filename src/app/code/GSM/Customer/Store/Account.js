const { createStore } = require("redux");
import {createStore} from 'redux';
function auth(state = false, action) {
	switch(action.type) {
		case 'LOGIN':
			return true;
		case 'LOGOUT':
			return false;
		default:
			return state;
	}
}
let authStore = createStore(auth);
export default {authStore};