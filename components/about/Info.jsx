// eslint-disable-next-line no-unused-vars
import React from 'react';

const Info = () => {
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<i className='bx bxs-graduation about__icon'></i>

				<h3 className='about__title'>Learning Journey</h3>
				<span className='about__subtitle'>B.Tech Student</span>
			</div>

			<div className='about__box'>
				<i className='bx bxs-folder-open about__icon'></i>

				<h3 className='about__title'>Projects Built</h3>
				<span className='about__subtitle'>4+ Projects</span>
			</div>

			<div className='about__box'>
				<i className='bx bxs-rocket about__icon'></i>

				<h3 className='about__title'>Growth Mindset</h3>
				<span className='about__subtitle'>Always Learning</span>
			</div>
		</div>
	);
};

export default Info;
