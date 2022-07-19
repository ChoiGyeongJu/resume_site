import React, { useState, useEffect, Conponent } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';

import ImageCarousel from './ImageCarousel/ImageCarousel';

import './MainPage.scss';

const MainPage = () => {
	return (
		<div>
			<div className="intro1">
				<div className="profile-left">
					<ImageCarousel />
				</div>
				<div className="profile-right">
					<div className="profile-content">이름 : 홍길동</div>
					<div className="profile-content">프로필 내용 ㄱ</div>
					<div className="profile-content">프로필 내용 ㄱ</div>
					<div className="profile-content">프로필 내용 ㄱ</div>
				</div>
			</div>

			{/* <Fade bottom>
				<h1>Hello</h1>
			</Fade> */}
		</div>
	);
};

export default MainPage;

// https://www.react-reveal.com/examples/
