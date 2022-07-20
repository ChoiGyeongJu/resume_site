/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './NavBar.scss';
import hamburger from '../images/icons/hamburger.svg';

const NavBar = () => {
	const ScrollTop = () => {
		setIstoggle(false);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const ScrollAbout = () => {
		setIstoggle(false);
		window.scrollTo({
			top: 820,
			behavior: 'smooth',
		});
	};

	const ScrollSkills = () => {
		setIstoggle(false);
		window.scrollTo({
			top: 1460,
			behavior: 'smooth',
		});
	};

	const ScrollMysite = () => {
		setIstoggle(false);
		window.scrollTo({
			top: 2100,
			behavior: 'smooth',
		});
	};

	const [Istoggle, setIstoggle] = useState(false);

	const handleToggle = () => {
		setIstoggle(!Istoggle);
		console.log(Istoggle);
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

				<img
					onClick={() => {
						handleToggle();
					}}
					className="hamburger"
					src={hamburger}
				/>
			</div>
			{Istoggle ? (
				<div className="menu-list">
					<div className="menu-title" onClick={ScrollTop} style={{ marginTop: '1rem' }}>
						Home
					</div>
					<div className="menu-title" onClick={ScrollAbout}>
						About
					</div>
					<div className="menu-title" onClick={ScrollSkills}>
						Skills
					</div>
					<div className="menu-title" onClick={ScrollMysite} style={{ marginBottom: '1rem' }}>
						My Site
					</div>
				</div>
			) : null}
		</div>
	);
};

export default NavBar;
