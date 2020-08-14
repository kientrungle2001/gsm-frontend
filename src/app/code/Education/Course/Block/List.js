import React from 'react';
import { Row, Col } from 'Bootstrap/Block/Bootstrap';
import '../web/style.scss';

export default function EducationCourseBlockList(props) {
	let courseList = [];
	for (let i = 1; i < 22; i++) {
		courseList.push(i);
	}
	return (
		<>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
			<Row>
				{courseList.map(function (productId) {
					return (
						<Col md={4} sm={6} key={productId} mb-3>
							<div class="product-grid">
								<div class="product-image">
									<a href="#">
										<img class="pic-1" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-3.jpg" />
										<img class="pic-2" src="http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg" />
									</a>
									<ul class="social">
										<li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
										<li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
										<li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
									</ul>
									<span class="product-new-label">Sale</span>
									<span class="product-discount-label">20%</span>
								</div>
								<ul class="rating">
									<li class="fa fa-star"></li>
									<li class="fa fa-star"></li>
									<li class="fa fa-star"></li>
									<li class="fa fa-star"></li>
									<li class="fa fa-star disable"></li>
								</ul>
								<div class="product-content">
									<h3 class="title"><a href="#">Women's Blouse</a></h3>
									<div class="price">$16.00
                        <span>$20.00</span>
									</div>
									<a class="add-to-cart" href="">+ Add To Cart</a>
								</div>
							</div>
						</Col>
					);
				})}

			</Row>
		</>
	);
}