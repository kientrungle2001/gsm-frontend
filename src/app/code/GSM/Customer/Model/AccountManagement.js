import Axios from "axios";
import endpoints from "../../../../etc/endpoints";

var AccountManagement = {
	login_route: 'customer_account_login',
	login: function (email, password) {
		return Axios.post(endpoints.url(this.login_route), {
			email:email,
			password: password
		}, {crossDomain: true}).then(function(resp) {
			return resp.data;
		}).catch(endpoints.axiosErrorHandler());
	},
	register: function (userData) {

	},
	forgotPassword: function (email) {

	}
};
export default AccountManagement;