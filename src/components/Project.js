import React from "react";
import "./Project.css";
import Project1 from "../assets/project_1.png";
import Project2 from "../assets/project_2.png";
import Project3 from "../assets/project_3.png";
import Project4 from "../assets/project_4.png";
import Project5 from "../assets/project_5.png";
import Project6 from "../assets/project_6.png";

const Project = () => {
	return (
		<div className="project component__space" id="Portfolio">
			<div className="heading">
				<h1 className="h1 heading">Our Latest Projects</h1>
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
										src={Project1}
										alt=""
										className="project__img"
									/>
								</div>
								<div className="mask__effect"></div>
							</div>
							<div className="project__meta absolute">
								<h5 className="project__text">Development</h5>
								<h4 className="project__text">
									Getting tickets to the big show
								</h4>
								<a href="#" className="project__btn">
									View Details
								</a>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img
										src={Project2}
										alt=""
										className="project__img"
									/>
								</div>
								<div className="mask__effect"></div>
							</div>
							<div className="project__meta absolute">
								<h5 className="project__text">Mobile</h5>
								<h4 className="project__text">
									Getting tickets to the big show
								</h4>
								<a href="#" className="project__btn">
									View Details
								</a>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img
										src={Project3}
										alt=""
										className="project__img"
									/>
								</div>
								<div className="mask__effect"></div>
							</div>
							<div className="project__meta absolute">
								<h5 className="project__text">Videos</h5>
								<h4 className="project__text">
									Getting tickets to the big show
								</h4>
								<a href="#" className="project__btn">
									View Details
								</a>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img
										src={Project4}
										alt=""
										className="project__img"
									/>
								</div>
								<div className="mask__effect"></div>
							</div>
							<div className="project__meta absolute">
								<h5 className="project__text">Events</h5>
								<h4 className="project__text">
									Getting tickets to the big show
								</h4>
								<a href="#" className="project__btn">
									View Details
								</a>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img
										src={Project5}
										alt=""
										className="project__img"
									/>
								</div>
								<div className="mask__effect"></div>
							</div>
							<div className="project__meta absolute">
								<h5 className="project__text">Panorama</h5>
								<h4 className="project__text">
									Getting tickets to the big show
								</h4>
								<a href="#" className="project__btn">
									View Details
								</a>
							</div>
						</div>
					</div>

					<div className="col__3">
						<div className="project__box pointer relative">
							<div className="project__box__img pointer relative">
								<div className="project__img__box">
									<img
										src={Project6}
										alt=""
										className="project__img"
									/>
								</div>
								<div className="mask__effect"></div>
							</div>
							<div className="project__meta absolute">
								<h5 className="project__text">Undeground</h5>
								<h4 className="project__text">
									Getting tickets to the big show
								</h4>
								<a href="#" className="project__btn">
									View Details
								</a>
							</div>
						</div>
					</div>

					<div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
						<button className="view__more pointer btn">
							View more
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
