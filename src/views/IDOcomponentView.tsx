import React, { useContext } from 'react';
import Footer from '../components/organisms/footer/Footer';
import IDOcomponent from '../components/organisms/IDOelements/IDOcomponent';
import NavigationTop from '../components/organisms/navigationTop/NavigationTop';
import { NavCtx } from '../context/NavContext';
import Container from '../templates/Container';
import MainTemplate from '../templates/MainTemplate';
import styled from 'styled-components';

const StyledOverlay = styled.div`
	width: 100vw;
	height: 100%;
	backdrop-filter: blur(10px);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9;
	display: none;
	@media (max-width: 770px) {
		&.open {
			display: block;
		}
	}
`;

const IDOcomponentView: React.FC = () => {
	const { isResponsiveMenuOpen, handleCloseMenu } = useContext(NavCtx);

	return (
		<MainTemplate>
			<NavigationTop />
			<Container>
				<IDOcomponent />
			</Container>
			<Footer />
			<StyledOverlay
				className={isResponsiveMenuOpen ? 'open' : ''}
				onClick={handleCloseMenu}
			/>
		</MainTemplate>
	);
};

export default IDOcomponentView;
