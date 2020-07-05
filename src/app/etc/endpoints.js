var endpoints = {
	rootUrl: 'http://gsmapi.com',
	routes: {
		customer_account_login: '/customer/account/login'
	},
	url: function(url) {
		return this.rootUrl + this.routes[url];
	},
	axiosErrorHandler: function() {
		return function(err) {
			if(err.isAxiosError) {
				let httpError = {
					status: err.response.status,
					data: err.response.data,
					success: false,
					message: err.response.data.message || err.message
				};
				throw httpError;
			}
		};
	}
};
export default endpoints;