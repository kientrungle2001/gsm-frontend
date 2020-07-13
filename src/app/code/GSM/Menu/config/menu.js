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
						path: '/user/account/register'
					},
					{
						name: 'Đăng nhập',
						path: '/user/account/login'
					},
					{
						name: 'Quên mật khẩu',
						path: '/user/account/forgotpassword'
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
	},
	{
		name: 'TT Khách hàng',
		path: '#',
		items: [
			{
				name: 'Năm sinh',
				path: '/customer/attribute/birthyear'
			},
			{
				name: 'Tỉnh thành thường trú',
				path: '/customer/attribute/location'
			},
			{
				name: 'Giới tính',
				path: '/customer/attribute/gender'
			},
			{
				name: 'Chiều cao',
				path: '/customer/attribute/height'
			},
			{
				name: 'Tình trạng hôn nhân',
				path: '/customer/attribute/marriage'
			},
			{
				name: 'Trình độ học vấn',
				path: '/customer/attribute/education'
			},
			{
				name: 'Ngành học',
				path: '/customer/attribute/specialization'
			}
		]
	},
	{
		name: 'Tương tác khách hàng',
		path: '#',
		items: [
			{
				name: 'Kênh khai thác',
				path: '/customer/interactive/channel'
			},
			{
				name: 'Cách thức tương tác',
				path: '/customer/interactive/method'
			},
			{
				name: 'Kết quả tương tác',
				path: '/customer/interactive/result'
			},
		]
	},
	{
		name: 'Kinh doanh',
		path: '#',
		items: [
			{
				name: 'Giao GSM tháng',
				path: '/sales/customer/goal'
			},
			{
				name: 'Khách hàng tiềm năng',
				path: '/sales/customer/potential'
			},
			{
				name: 'Khách hàng giao dịch',
				path: '/sales/customer/using'
			},
		]
	},
	{
		name: 'CSKH',
		path: '#',
		items: [
			{
				name: 'CSKH',
				path: '/support/customer/record'
			}
		]
	},
	{
		name: 'Content',
		path: '#',
		items: [
			{
				name: 'Giao content',
				path: '/content/assign'
			},
			{
				name: 'Nhập content',
				path: '/content/record'
			}
		]
	},
	{
		name: 'Set kênh QC',
		path: '#',
		items: [
			{
				name: 'Kênh truyền thông',
				path: '/ad/channel'
			},
			{
				name: 'Website chính',
				path: '/ad/website'
			}
		]
	},
	{
		name: 'Marketing',
		path: '#',
		items: [
			{
				name: 'Giao Marketing',
				path: '/marketing/assign'
			},
			{
				name: 'Nhập Marketing',
				path: '/marketing/record'
			}
		]
	},
];

export default {
	mainMenu: mainMenu
};