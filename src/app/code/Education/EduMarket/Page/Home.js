import React from 'react';
import { Container, Row, Col } from 'Bootstrap/Block/Bootstrap';
import CourseList from 'Education/Course/Block/List';
import EducationEduMarketBlockCategoryMenu from '../Block/CategoryMenu';

export default function EducationEduMarketPageCategory(props) {
	return (
		<>
			<Container fluid mt-3 mb-3>
				<Row>
					<Col xl={2}>
						<EducationEduMarketBlockCategoryMenu categoryId={0} />

					</Col>
					<Col xl={10}>
						<h2>Xem nhieu nhat</h2>
						<CourseList categoryId={props.categoryId} limit={6} />
						<h2 className="mt-5">Noi bat nhat</h2>
						<CourseList categoryId={props.categoryId} limit={6} />
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 className="mt-5">Danh muc 1</h2>
						<CourseList categoryId={props.categoryId} limit={6} />
						<h2 className="mt-5">Danh muc 2</h2>
						<CourseList categoryId={props.categoryId} limit={6} />
						<h2 className="mt-5">Danh muc 3</h2>
						<CourseList categoryId={props.categoryId} limit={6} />
					</Col>
				</Row>
			</Container>

		</>
	)
};