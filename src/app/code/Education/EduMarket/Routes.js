import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Page/Home';
import CategoryPage from './Page/Category';
import CoursePage from './Page/Course';

export default function EducationEduMarketRoutes() {
	return (
		<>
			<Route path='/' exact>
				<HomePage />
			</Route>
			<Route path='/category/:id' exact render={({match}) => {
				return <CategoryPage categoryId={parseInt(match.params.id)} />
			}}>
			</Route>
			<Route path='/course/:categoryId/:id' exact render={({match}) => {
				return <CoursePage categoryId={parseInt(match.params.categoryId)} courseId={parseInt(match.params.id)} />
			}}>
			</Route>
		</>
	);
}