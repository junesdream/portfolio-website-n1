import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div className="contact component__space" id="contact">
			<div className="row">
				<div className="col_2">
					<div className="contact__box">
						<div className="contact_meta">
							<h1 className="hire__text">Hire Us</h1>
							<p className="hire__text white">
								I am available for freelance work. Connect with
								me via phone:
							</p>
							<p className="hire__text white">
								<strong>+49 30 77992845</strong> or E-Mail{" "}
								<strong>info@rainbow.com</strong>
							</p>
						</div>
						<div className="input__box">
							<input
								type="text"
								className="contact name"
								placeholder="Your name *"
							/>
							<input
								type="text"
								className="contact email"
								placeholder="Your Email *"
							/>
							<input
								type="text"
								className="contact subject"
								placeholder="Write a Subject"
							/>
							<textarea
								name="message"
								id="message"
								placeholder="Write Your message"
							></textarea>
							<button
								className="btn contact pointer"
								type="submit"
							>
								Submit
							</button>
						</div>
					</div>
				</div>
				<div className="col__2">
					<img
						src={
							"https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						}
						alt=""
						className="contact__img"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
