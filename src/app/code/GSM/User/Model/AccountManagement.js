import Axios from "axios";
import endpoints from "../../../../etc/endpoints";

var AccountManagement = {
	login_route: 'user_account_login',
	login: function (email, password) {
		var that = this;
		return endpoints.request(function(){
			return Axios.post(endpoints.url(that.login_route), {
				email:email,
				password: password
			}, {crossDomain: true});
		});
	},
	register: function (userData) {

	},
	forgotPassword: function (email) {

	}
};
export default AccountManagement;