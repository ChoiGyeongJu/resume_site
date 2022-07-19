import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
	const ScrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const ScrollAbout = () => {
		window.scrollTo({
			top: 770,
			behavior: 'smooth',
		});
	};

	const ScrollSkills = () => {
		window.scrollTo({
			top: 1400,
			behavior: 'smooth',
		});
	};

	const ScrollMysite = () => {
		window.scrollTo({
			top: 2060,
			behavior: 'smooth',
		});
	};

	return (
		<div className="Nav">
			<div className="Nav-left">
				<div className="Nav-title">XXX의 홈페이지입니다.</div>
			</div>
			<div className="Nav-center" />
			<div className="Nav-right">
				<div className="Nav-menu" onClick={ScrollTop}>
					Home
				</div>
				<div className="Nav-menu" onClick={ScrollAbout}>
					About
				</div>
				<div className="Nav-menu" onClick={ScrollSkills}>
					Skills
				</div>
				<div className="Nav-menu" onClick={ScrollMysite}>
					My Site
				</div>
			</div>
		</div>
	);
};

export default NavBar;
