import styled from 'styled-components';
import ItemCard from '../ItemCard';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { AlignTextCenter } from '../Theme';
import { useState, useEffect } from 'react';
const CatgoryWrapper = styled.div`
	width: 1280px;
	padding: 0px;
	overflow: hidden;
	border: 1px solid blue;
`;
const CategoryColumn = styled.div`
	padding: 0 8px;
	display: grid;
	grid-gap: 16px;
	grid-template-columns: ${(props) => `repeat(${props.children.length}, 1fr)`};
`;
const CategorySlideBlock = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 80px;
`;
const Button = styled.button`
	font-size: 36px;
	border: none;
	background-color: transparent;
	&:focus {
		outline: none;
	}
	cursor: pointer;
`;
const ButtonLeft = styled(Button)``;
const ButtonRight = styled(Button)``;
const LoadingWapper = styled(AlignTextCenter)`
	width: 1280px;
	height: 384px;
`;
function CategorySlide({ children }) {
	const transitionDefault = 'all .5s';
	const panelWidth = 308 + 16;
	const gridGap = 16;
	const panelCount = 8;
	const WrapperWidth = 1280;
	const childrenData = [...children, ...children, ...children];
	const [x, setX] = useState(-panelWidth * 8 - 8);
	const [moving, setMoving] = useState(false);
	const [trasitionValue, setTransitionValue] = useState(transitionDefault);
	//direction * panelWidth * panelCount + gridGap*3
	const onMove = (direction) => {
		if (moving) return;
		setX((prevX) => prevX + direction * WrapperWidth + 16 * direction);
		setMoving(true);
	};
	const onTransitionEnd = () => {
		setMoving(false);

		console.log(-panelWidth * (panelCount + 1));
		if (x === -panelWidth * (panelCount + 1)) {
			setTransitionValue('none');
			setX(-panelWidth);
		} else if (x === -8) {
			setTransitionValue('none');
			setX(-panelWidth * 8 - 8);
		}
	};
	useEffect(() => {
		if (trasitionValue === 'none') setTransitionValue(transitionDefault);
	}, [x]);

	const ulStyles = {
		transform: `translate3d(${x}px, 0, 0)`,
		transition: trasitionValue,
	};
	return (
		<CategorySlideBlock>
			<ButtonLeft onClick={onMove.bind(undefined, +1)}>
				<VscChevronLeft />
			</ButtonLeft>
			<CatgoryWrapper>
				<CategoryColumn style={ulStyles} onTransitionEnd={onTransitionEnd}>
					{childrenData}
				</CategoryColumn>
			</CatgoryWrapper>
			<ButtonRight onClick={onMove.bind(undefined, -1)}>
				<VscChevronRight />
			</ButtonRight>
		</CategorySlideBlock>
	);
}
export default CategorySlide;
