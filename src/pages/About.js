import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
	const location=useLocation();
	const [searchParams, setSearchParams]=useSearchParams();
	const name= searchParams.get("name");
	const age= searchParams.get("age");
	console.log(name);
	return (
		<div>
			<h2>소개페이지</h2>
			<p>소개페이지입니다.</p>
			<p>{location.search}</p>
			<p>{name}이다</p>
			<p>{age}입니다</p>
		</div>
	);
};

export default About;