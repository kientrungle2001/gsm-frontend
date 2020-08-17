import React from 'react';
import CategoryList from 'Education/Category/Block/List';

export default function EducationEduMarketBlockCategoryMenu({ categoryId }) {
	return (
		<>
			<button className="btn btn-success btn-block text-left d-xl-none" data-toggle="collapse" data-target="#navbarCategoryList" aria-controls="navbarCategoryList" aria-expanded="true" aria-label="Course Menu">
				<span className="fa fa-bars"></span> Danh mục
							</button>
			<div className="collapse d-xl-block" id="navbarCategoryList">
				<CategoryList currentCategoryId={categoryId} />
			</div>
		</>
	);
}