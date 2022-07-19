/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, Conponent } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './About.scss';

const About = () => {
	return (
		<div className="about">
			<Fade top>
				<div className="title">About</div>
			</Fade>
		</div>
	);
};

export default About;
