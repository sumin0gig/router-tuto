import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Subpages from './Subpages';


const Subpage = () => {
	const{id}=useParams();
	useNavigate()
	return (
		<div>
			<h2>서브페이지 {id}</h2>
		</div>
	);
};

export default Subpage;