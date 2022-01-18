import React, { useContext } from 'react';
import styled from 'styled-components';
import MenuTop from '../../molecules/menuTop/MenuTop';
import NavLogo from '../../atoms/logotypes/NavLogo';
import MenuTopButtons from '../../molecules/menuTop/MenuTopButtons';
import { NavCtx } from '../../../context/NavContext';

const StyledWrapperOuter = styled.div`
	width: 100%;
	height: 70px;
	position: absolute;
	top: 0;
	left: 0;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	padding: 0 150px;
	z-index: 10;
	&.open {
		top: -5rem;
	}

	@media (max-width: 1280px) {
		padding: 0 8%;
	}
	@media (max-width: 960px) {
		padding: 0 4%;
		.nav {
			&:nth-child(2) {
				order: 3;
			}
			&:nth-child(3) {
				order: 2;
				margin-right: 1.375rem;
			}
		}
	}
	@media (max-width: 770px) {
		display: flex;
		justify-content: space-between;
	}
`;

const NavigationTop: React.FC = () => {
	const { isResponsiveMenuOpen } = useContext(NavCtx);

	return (
		<StyledWrapperOuter className={isResponsiveMenuOpen ? 'open' : ''}>
			<NavLogo />
			<MenuTop />
			<MenuTopButtons />
		</StyledWrapperOuter>
	);
};

export default NavigationTop;
