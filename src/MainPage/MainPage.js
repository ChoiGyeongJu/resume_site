/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Conponent } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import { Fade } from 'react-reveal';
import './MainPage.scss';

import About from './About/About';
import Skills from './Skills/Skills';
import Mysite from './Mysite/Mysite';

const MainPage = () => {
	return (
		<div className="container">
			<div className="intro1">
				<div className="profile-left">
					<ImageCarousel />
				</div>
				<div className="profile-right">
					<Fade left>
						<div className="profile-content">안녕하세요.</div>
					</Fade>
					<Fade right>
						<div className="profile-content">N년차 프론트엔드 개발자</div>
					</Fade>
					<Fade left>
						<div className="profile-content">XXX입니다.</div>
					</Fade>
				</div>
			</div>
			<About />
			<Skills />
			<Mysite />
		</div>
	);
};

export default MainPage;
