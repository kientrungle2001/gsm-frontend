import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
let $ = window.jQuery;

export default function EducationCategoryBlockList({ currentCategoryId }) {
	const [categories, setCategories] = useState([]);
	
	useEffect(function () {
		let real_url = 'http://w1.com/wp-json/wp/v2/course_category?_method=GET';
		let proxy_url = 'http://w1.com/proxy.php';
		let query = {
			"order": "asc",
			"orderby": "id",
			"_fields": "id,slug,name,parent"
		};
		if (1) {
			$.ajax({
				url: proxy_url,
				type: 'post',
				data: {
					method: 'post',
					_real_url: real_url,
					data: JSON.stringify(query)
				},
				dataType: 'json'
			}).then(function (resp) {
				setCategories(resp);
			});
		} else {
			$.ajax({
				url: real_url,
				type: 'get',
				data: JSON.stringify(query),
				dataType: 'json'
			}).then(function (resp) {
				setCategories(resp);
			});
		}
	}, []);
	return (
		<>
			<ul className="list-group w-100">
				{categories.map(function (cat) {
					if (parseInt(cat.id) === parseInt(currentCategoryId)) {
						return (
							<li className="list-group-item active" key={cat.id}>
								<span href={"/category/" + cat.id}>{cat.name}</span>
							</li>
						);
					}
					return (
						<li className="list-group-item" key={cat.id}>
							<Link to={"/category/" + cat.id}>{cat.name}</Link>
						</li>
					);
				})}

			</ul>
		</>
	);
};