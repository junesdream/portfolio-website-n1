import React from "react";
import "./Blog.css";

const Blog = () => {
	return (
		<div className="blog component__space" id="Blog">
			<div className="heading">
				<h1 className="h1 heading">Our Latest News</h1>
				<p className="p heading p__color">
					There are many variations of passages of Lorem Ipsum
					available,
				</p>
				<p className="heading p__color">
					but the majority have suffered alteration.
				</p>
			</div>

			<div className="container">
				<div className="row">
					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img
										src={
											"https://images.pexels.com/photos/1156546/pexels-photo-1156546.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
										}
										alt=""
										className="project__img"
									/>
								</div>
								<div className="mask__effect"></div>
							</div>
							<div className="Blog__meta absolute">
								<h5 className="project__text">Development</h5>
								<h4 className="blog__text">
									Getting tickets to the big show
								</h4>
								<a href="#" className="blog project__btn btn">
									Read More
								</a>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img
										src={
											"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
										}
										alt=""
										className="project__img"
									/>
								</div>
								<div className="mask__effect"></div>
							</div>
							<div className="Blog__meta absolute">
								<h5 className="project__text">Development</h5>
								<h4 className="blog__text">
									Getting tickets to the big show
								</h4>
								<a href="#" className="blog project__btn btn">
									Read More
								</a>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img
										src={
											"https://images.pexels.com/photos/5302784/pexels-photo-5302784.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
										}
										alt=""
										className="project__img"
									/>
								</div>
								<div className="mask__effect"></div>
							</div>
							<div className="Blog__meta absolute">
								<h5 className="project__text">Development</h5>
								<h4 className="blog__text">
									Getting tickets to the big show
								</h4>
								<a href="#" className="blog project__btn btn">
									Read More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
