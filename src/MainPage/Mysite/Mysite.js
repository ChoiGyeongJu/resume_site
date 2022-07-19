/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect, Conponent } from 'react';
import Fade from 'react-reveal/Fade';
import './Mysite.scss';

const Mysite = () => {
	return (
		<div className="mysite">
			<Fade top>
				<div className="title">My Site</div>
			</Fade>
		</div>
	);
};

export default Mysite;
