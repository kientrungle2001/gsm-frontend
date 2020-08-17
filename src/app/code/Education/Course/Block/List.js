import React from 'react';
import { Row, Col } from 'Bootstrap/Block/Bootstrap';
import '../web/style.scss';
import { Link } from 'react-router-dom';

export default function EducationCourseBlockList(props) {
	let courseList = [];
	let limit = props.limit || 24;
	for (let i = 1; i <= limit; i++) {
		courseList.push(i);
	}
	return (
		<>
			<Row>
				{courseList.map(function (productId) {
					return (
						<Col xl={2} lg={3} md={4} sm={4} xs={6} key={productId} mb-3>
							<div className="product-grid">
								<div className="product-image">
									<a href="#">
										<img className="pic-1" src={"http://bestjquery.com/tutorial/product-grid/demo9/images/img-"+((productId % 4) *2 + 1)+".jpg"} />
										<img className="pic-2" src={"http://bestjquery.com/tutorial/product-grid/demo9/images/img-"+((productId % 4) *2 + 2)+".jpg"} />
									</a>
									<ul className="social">
										<li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
										<li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
										<li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
									</ul>
									<span className="product-new-label">Sale</span>
									<span className="product-discount-label">20%</span>
								</div>
								<ul className="rating">
									<li className="fa fa-star"></li>
									<li className="fa fa-star"></li>
									<li className="fa fa-star"></li>
									<li className="fa fa-star"></li>
									<li className="fa fa-star disable"></li>
								</ul>
								<div className="product-content">
									<h3 className="title"><Link to={"/course/" + props.categoryId + '/' + productId}>Women's Blouse</Link></h3>
									<div className="price">$16.00
                        <span>$20.00</span>
									</div>
									<a className="add-to-cart" href="">+ Add To Cart</a>
								</div>
							</div>
						</Col>
					);
				})}

			</Row>
		</>
	);
}