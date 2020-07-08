var mainMenu = [
	{
		name: 'Trang chủ',
		path: '/'
	},
	{
		name: 'Người dùng',
		path: '#',
		items: [
			{
				name: 'Tài khoản',
				path: '#',
				items: [
					{
						name: 'Đăng ký',
						path: '/customer/account/register'
					},
					{
						name: 'Đăng nhập',
						path: '/customer/account/login'
					},
					{
						name: 'Quên mật khẩu',
						path: '/customer/account/forgotpassword'
					}
				]
			}
		]
	},
	{
		name: 'Tổ chức',
		path: '#',
		items: [
			{
				name: 'Tổ chức',
				path: '/organization/index'
			},
			{
				name: 'Chức vị',
				path: '/organization/position'
			},
			{
				name: 'Nhân viên',
				path: '/organization/staff'
			},
			{
				name: 'Phân quyền',
				path: '/organization/privilege'
			}
		]
	}
];

export default {
	mainMenu: mainMenu
};