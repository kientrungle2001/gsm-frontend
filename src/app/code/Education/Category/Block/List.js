import React from 'react';
import { Link } from 'react-router-dom';

export default function EducationCategoryBlockList({ currentCategoryId }) {
	let categoryIds = [];
	for (let i = 1; i < 11; i++) {
		categoryIds.push(i);
	}
	return (
		<>
			<ul className="list-group">
				{categoryIds.map(function (id) {
					if(parseInt(id) === parseInt(currentCategoryId)) {
						return (
							<li className="list-group-item active" key={id}>
								<span href={"/category/" + id}>Category {id}</span>
							</li>
						);	
					}
					return (
						<li className="list-group-item" key={id}>
							<Link to={"/category/" + id}>Category {id}</Link>
						</li>
					);
				})}

			</ul>
		</>
	);
};