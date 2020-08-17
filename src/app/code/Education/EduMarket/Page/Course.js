import React from 'react';
import { Container, Row, Col } from 'Bootstrap/Block/Bootstrap';
import CourseDetail from 'Education/Course/Block/Detail';
import EducationEduMarketBlockCategoryMenu from '../Block/CategoryMenu';

export default function EducationEduMarketPageCourse(props) {
	return (
		<>
			<Container fluid mt-3 mb-3>
				<Row>
					<Col lg={2}>
						<EducationEduMarketBlockCategoryMenu categoryId={props.categoryId} />
					</Col>
					<Col lg={10}>
						<CourseDetail courseId={props.courseId} />
					</Col>
				</Row>
			</Container>

		</>
	)
};