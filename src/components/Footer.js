import React from 'react'
import './Footer.css'
import footerImg from '../assets/footerLogo.png'

const Footer = () => {
    return (
		<div
			className="footer d__flex align__items__center justify__content__space__between pz-10">
				<img src={footerImg} alt="" className="footer__img pointer" /> 
			<span className="copyright">
				Copyright © 2021 Rainbow Design Team  All Rights
				Reserved
			</span>
		</div>
	);
}

export default Footer
 