import React from 'react';
import { Container, Row, Col } from 'Bootstrap/Block/Bootstrap';
import CategoryList from 'Education/Category/Block/List';
import CourseList from 'Education/Course/Block/List';

export default function EducationEduMarketPageHome(props) {
	return (
		<>
			<Container>
				<Row>
					<Col md={3}>
						<CategoryList currentCategoryId={props.categoryId} />
					</Col>
					<Col md={9}>
						<CourseList categoryId={props.categoryId} />
					</Col>
				</Row>
			</Container>

		</>
	)
};