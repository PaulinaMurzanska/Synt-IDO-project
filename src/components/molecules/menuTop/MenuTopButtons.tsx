import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import { theme } from '.././../../themes/MainTheme';
import Button from '../../atoms/buttons/Button';

const StyledBtnsWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	.nav-btn {
		&:last-of-type {
			&:hover {
				background: linear-gradient(
					180deg,
					rgba(239, 132, 245, 0.8) 0%,
					rgba(156, 62, 189, 0.8) 100%
				);
			}
		}
	}
	@media (max-width: 770px) {
		justify-content: space-between;
		width: 80%;
		.nav-btn {
			width: 50%;
			@media (max-width: 450px) {
				font-size: 0.875rem;
			}
		}
	}
`;
const StyledBtnChevron = styled.div`
	width: 8.125rem;
	height: 2.5rem;
	border-radius: 10px;
	background-color: #3a466b;
	color: #fff;
	margin: 0 10px 0 0;
	font-size: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const MenuTopButtons: React.FC = () => {
	return (
		<StyledBtnsWrapper className='nav'>
			<StyledBtnChevron className='nav-btn'>
				Mainnet
				<FaChevronDown
					style={{
						fontSize: '0.625rem',
						marginLeft: '5px',
					}}
				/>
			</StyledBtnChevron>
			<Button
				label='Connect wallet'
				customClass='nav-btn'
				customedBtn
				button={{
					width: '8.125rem',
					height: '2.5rem',
					radius: '10px',
					bgrColor: theme.themeColorPrimary,
					fontColor: '#fff',
					fontSize: '1rem',
				}}
			/>
		</StyledBtnsWrapper>
	);
};

export default MenuTopButtons;
