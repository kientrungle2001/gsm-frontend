import React from 'react';
import { Row, Col } from 'Bootstrap/Block/Bootstrap';
import '../web/style.scss';
import { Link } from 'react-router-dom';
var Product = {};

function EducationCourseBlockList(props) {
	let courseList = [];
	let limit = props.limit || 24;
	for (let i = 1; i <= limit; i++) {
		courseList.push(i);
	}
	return (
		<>
			<Row id="courseList">
				{courseList.map( (productId) => {
					return (
						<Col xl={2} lg={3} md={4} sm={4} xs={6} key={productId} mb-3>
							<Product.Grid>
								<Product.Image productId={productId} {...props} />
								<Product.Rating />
								<Product.Content productId={productId} {...props} />
							</Product.Grid>
						</Col>
					);
				})}
			</Row>
		</>
	);
}

Product.Grid = (props) => <div className="product-grid">{props.children}</div>

Product.Image = (props) => <div className="product-image"><Product.Images {...props} /><Product.Social /><Product.NewLabel /><Product.DiscountLabel /></div>

Product.Images = (props) => <a href="#img"><Img1 {...props} /><Img2 {...props} /></a>
var demoImgUrl = "http://bestjquery.com/tutorial/product-grid/demo9/images/img-";
var Img1 = (props) => <img alt="pic-1" className="pic-1" src={demoImgUrl + ((props.productId % 4) * 2 + 1) + ".jpg"} />
var Img2 = (props) => <img alt="pic-2" className="pic-2" src={demoImgUrl + ((props.productId % 4) * 2 + 2) + ".jpg"} />

Product.Social = () =><ul className="social"><QuickView /><WishList /><AddToCart /></ul>
var QuickView = () => <li><a href="#quickview" data-tip="Quick View"><Icon.Search /></a></li>
var WishList = () => <li><a href="#wishlist" data-tip="Add to Wishlist"><Icon.ShoppingBag /></a></li>
var AddToCart = () => <li><a href="#add" data-tip="Add to Cart"><Icon.ShoppingCart /></a></li>
var Icon = {
	Search: () => (<i className="fa fa-search"></i>),
	ShoppingBag: () => (<i className="fa fa-shopping-bag"></i>),
	ShoppingCart: () => (<i className="fa fa-shopping-cart"></i>)
};

Product.NewLabel = () => <span className="product-new-label">Sale</span>
Product.DiscountLabel = () => <span className="product-discount-label">20%</span>

Product.Rating = () => <ul className="rating"><Star /><Star /><Star /><Star /><Star disable /></ul>
var Star = (props) => <li className={"fa fa-star" + (props.disable ? ' disable' : '')}></li>

Product.Content = (props) => <div className="product-content"><Product.Title {...props} /><Product.Price /><Product.AddToCart /></div>
Product.Title = (props) => <h3 className="title"><Link to={"/course/" + props.categoryId + '/' + props.productId}>Women's Blouse</Link></h3> 
Product.Price = () => <div className="price">$16.00 <span>$20.00</span></div>
Product.AddToCart = () => <a className="add-to-cart" href="/">+ Add To Cart</a>

export default EducationCourseBlockList;