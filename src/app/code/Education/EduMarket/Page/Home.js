import React from 'react';
import { Container, Row, Col } from 'Bootstrap/Block/Bootstrap';
import CourseList from 'Education/Course/Block/List';
import SidebarMenu from 'Education/EduMarket/Block/CategoryMenu';

export default function EducationEduMarketPageHome(props) {
	return (
		<>
			<Container fluid mt-3 mb-3>
				<Row>
					<Col xl={2}>
						<SidebarMenu categoryId={0} />

					</Col>
					<Col xl={10}>
						<h2>Xem nhiều nhất</h2>
						<CourseList categoryId={0} limit={6} />
						<h2 className="mt-5">Nổi bật nhất</h2>
						<CourseList categoryId={0} limit={6} />
					</Col>
				</Row>
				<Row>
					<Col>
						<h2 className="mt-5">Danh mục 1</h2>
						<CourseList categoryId={1} limit={6} />
						<h2 className="mt-5">Danh mục 2</h2>
						<CourseList categoryId={1} limit={6} />
						<h2 className="mt-5">Danh mục 3</h2>
						<CourseList categoryId={1} limit={6} />
					</Col>
				</Row>
			</Container>

		</>
	)
};