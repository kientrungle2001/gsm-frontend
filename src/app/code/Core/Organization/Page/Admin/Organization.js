import 'Organization/web/style.scss';
import CellLink from 'Grid/Block/Cell/Link';
import CellButton from 'Grid/Block/Cell/Button';
import CellNumeric from 'Grid/Block/Cell/Numeric';
import CellTree from 'Grid/Block/Cell/Tree';
import CellMultiple from 'Grid/Block/Cell/Multiple';
import Grid from 'Grid/Page/Grid';
import FilterSelect from 'Grid/Block/Filter/Select';
import {Btn} from 'Bootstrap/Block/Bootstrap';

class CoreOrganizationPageAdminOrganization extends Grid {
	url = 'http://localhost:1337/organizations';
	getTitle() {
		return 'Tổ chức';
	}
	getHeaders() {
		let that = this;
		return [
			{
				name: 'ID',
				column: 'id',
				sortable: true,
				CellComponent: CellNumeric
			},
			{
				name: 'Tên tổ chức',
				column: 'name',
				sortable: true,
				CellComponent: CellTree
			},
			{
				name: 'Email',
				column: 'email',
				sortable: true,
			},
			{
				name: 'Phone',
				column: 'phone',
				sortable: true,
			},
			{
				name: 'Thành viên',
				column: 'members',
				sortable: false,
				CellComponent: CellLink,
				type: CellLink.TYPE_LINK,
				href: function(row) {
					return '/organization/staff/organizationId/' + row.id;
				}
			},
			{
				name: 'Hành động',
				column: 'action_multiple',
				sortable: false,
				CellComponent: CellMultiple,
				delimiter: ' ',
				elements: [
					{
						name: 'Sửa',
						column: 'action_edit',
						sortable: false,
						CellComponent: CellLink,
						type: CellLink.TYPE_LINK,
						href: function(row) {
							return '/organization/edit/id/' + row.id;
						}
					},
					{
						name: 'Xóa',
						column: 'action_del',
						sortable: false,
						CellComponent: CellButton,
						BtnComponent: Btn.Danger,
						action: function (row) {
							if(window.confirm('Bạn có muốn xóa bản ghi ' + row.id + '?')) {
								that.delItem(row.id);
							}
						}
					}
				]
			}
		];
	}

	getFilters() {
		return [{
			title: 'Phạm vi',
			FilterComponent: FilterSelect,
			url: this.url,
			labelField: 'name',
			valueField: 'id'
		},
		{
			title: 'Tỉnh thành',
			FilterComponent: FilterSelect,
			url: 'http://localhost:1337/locations',
			params: {
				type: 'Province'
			},
			labelField: 'name',
			valueField: 'id'
		}];
	}

}

export default CoreOrganizationPageAdminOrganization;
