import styled from 'styled-components';
import { Title } from '../Theme';
import CategorySlide from './CategorySlide';
import useFetch from '../useFetch';
import ItemCard from '../ItemCard';

const TitleWrapper = styled.div`
	margin: 0 40px;
`;
const loadingData = { img: './load.jpg' };
const testData = {
	detail_hash: 'HFFF9',
	image:
		'http://public.codesquad.kr/jk/storeapp/data/2416b58044d49f0d3a24256f8e76163b.jpg',
	alt: '[마더앤찬] 명란감자국  630ml',
	delivery_type: ['새벽배송', '전국택배'],
	title: '[마더앤찬] 명란감자국 630ml',
	description: '간간한 저염명란과 고소한 감자가 조화로운 국이에요',
	n_price: '7,000',
	s_price: '6,300원',
	badge: ['론칭특가'],
};
function CategoryList({ title, num }) {
	// const [initData, loadingState] = useFetch(process.env.REACT_APP_API_URL + url)
	// let data = loadingState ? loadingData : initData.body
	const data = new Array(num).fill(testData).map((v, idx) => {
		return { ...testData, s_price: `${idx + 1}번` };
	});
	const ItemCards = (data) => {
		let category;
		if (Array.isArray(data)) {
			// data.push(data[0]);
			// data.unshift(data[data.length - 1]);
			category = data.map((data, idx) => (
				<ItemCard key={idx} data={data} size={'S'} />
			));
		}
		return category;
	};
	return (
		<>
			<TitleWrapper>
				<Title>{title}</Title>
			</TitleWrapper>
			<CategorySlide width={1280} count={4}>
				{data.map((data, idx) => (
					<ItemCard key={idx} data={data} size={'S'} />
				))}
			</CategorySlide>
		</>
	);
}
export default CategoryList;
