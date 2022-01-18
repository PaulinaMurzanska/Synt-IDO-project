import React from 'react';
import styled from 'styled-components';
import { StyledLogoWrapper } from './StyledLogoWrapper';
import logoInvariantShort from '../../../assets//logo/LogoShort.svg';
import logoInvariant from '../../../assets/logo/Logo.svg';

const StyledLogos = styled.div`
	margin-right: 1.375rem;
`;

const StyledLogolong = styled.div`
	display: block;
	@media (max-width: 960px) {
		display: none;
	}
`;
const StyledLogoShort = styled.div`
	display: none;
	@media (max-width: 960px) {
		display: block;
	}
`;

const NavLogo = () => {
	return (
		<StyledLogos className='nav'>
			<StyledLogolong>
				<StyledLogoWrapper logoImage={logoInvariant} />
			</StyledLogolong>
			<StyledLogoShort>
				<StyledLogoWrapper
					logoImage={logoInvariantShort}
					width='2.18rem'
					height='1.25rem'
				/>
			</StyledLogoShort>
		</StyledLogos>
	);
};

export default NavLogo;
