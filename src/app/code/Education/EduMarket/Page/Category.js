import React from 'react';
import { Container, Row, Col } from 'Bootstrap/Block/Bootstrap';
import CourseList from 'Education/Course/Block/List';
import EducationEduMarketBlockCategoryMenu from '../Block/CategoryMenu';

export default function EducationEduMarketPageHome(props) {
	return (
		<>
			<Container fluid mt-3 mb-3>
				<Row>
					<Col lg={2}>
						<EducationEduMarketBlockCategoryMenu categoryId={props.categoryId} />
					</Col>
					<Col lg={10}>
						<CourseList categoryId={props.categoryId} />
					</Col>
				</Row>
			</Container>

		</>
	)
};