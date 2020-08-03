import 'Organization/web/style.scss';
import CellModal from 'Grid/Block/Cell/Modal';
import CellNumeric from 'Grid/Block/Cell/Numeric';
import CellTree from 'Grid/Block/Cell/Tree';
import Grid from 'Grid/Page/Grid';
import FilterSelect from 'Grid/Block/Filter/Select';

class CoreOrganizationPageAdminOrganization extends Grid {
	url = 'http://localhost:1337/organizations';
	getTitle() {
		return 'Tổ chức';
	}
	getHeaders() {
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
				sortable: true,
				CellComponent: CellModal,
				action: function (row) {
					alert(row.id);
				}
			},
			{
				name: 'Sửa',
				column: 'action_edit',
				sortable: true,
				CellComponent: CellModal,
				action: function (row) {
					alert(row.id);
				}
			},
			{
				name: 'Xóa',
				column: 'action_del',
				sortable: true,
				CellComponent: CellModal,
				action: function (row) {
					alert(row.id);
				}
			},
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
