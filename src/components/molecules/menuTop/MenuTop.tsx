import React, { useContext } from 'react';
import styled from 'styled-components';
import { mainMenuList } from '../../../constants/menuData';
import { NavCtx } from '../../../context/NavContext';
import { theme } from '../../../themes/MainTheme';
import HamburgerButton from '../../atoms/buttons/HamburgerButton';
import MenuItem from '../../atoms/menuItems/MenuItem';

const MenuWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const StyledWrapper = styled.ul`
	width: 23.43rem;
	height: 2.5rem;
	background-color: ${theme.backgroundNavDarkColor};
	display: flex;
	list-style-type: none;
	align-items: center;
	justify-content: space-around;
	padding: 4px;
	border-radius: 14px;
	a {
		text-decoration: none;
	}
	@media (max-width: 1280px) {
		margin-right: 1.375rem;
	}
	@media (max-width: 770px) {
		flex-direction: column;
		width: 10rem;
		height: 15.625rem;
		position: absolute;
		top: 7rem;
		right: 2rem;

		background-color: ${theme.backgroundDarkFaded};
		display: none;
		&.open {
			display: flex;
		}
	}
`;

const MenuTop: React.FC = () => {
	const { isResponsiveMenuOpen } = useContext(NavCtx);

	return (
		<MenuWrapper className='nav'>
			<StyledWrapper className={isResponsiveMenuOpen ? 'open' : ''}>
				{mainMenuList.map((item) => (
					<MenuItem name={item.name} path={item.path} key={item.id} />
				))}
			</StyledWrapper>
			<HamburgerButton />
		</MenuWrapper>
	);
};

export default MenuTop;
