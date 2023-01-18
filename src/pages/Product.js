import React from 'react';
import { Link, useParams } from 'react-router-dom';
const data={
	item1:{
		title: '아이폰',
		price: '1,500,000',
		desc: '비싸고 예뻐요.'
	},
	item2:{
		title: '갤럭시',
		price: '300,000',
		desc: '싸고 예뻐요.'
	}
}

const Product = () => {
	const params= useParams(); // useParams를 하면 객체가 생성
	// 그 객체의 key 이름은 App.js의 path의 /:이하에 지정되어있다.
	// 그 객체의 value는 Home.js의 Link to="주소/이하"에 지정되었다.
 //data["item1"]
	console.log(params.name);
	const {name}= useParams();
	const product= data[name];
	console.log(data[params.name]);
	return (
		<div>
			<h2>제품 페이지</h2>
			<p>제품 페이지 입니다.</p>
			{product?
				<div>
					<h3>{product.title}</h3>
					<p>{product.desc}</p>
					<p>{product.price}</p>
				</div>
			:
				<p>존재하지 않는 페이지입니다.</p>
			}
			
			<Link to="/">홈 가기</Link>
		</div>
	);
};

export default Product;