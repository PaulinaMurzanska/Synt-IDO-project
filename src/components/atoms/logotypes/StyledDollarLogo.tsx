import React from 'react';
import styled from 'styled-components';
import { StyledLogoWrapper } from './StyledLogoWrapper';
import logo from '../../../assets/logo/xusd-coin.svg';
import { theme } from '../../../themes/MainTheme';

const StyledLogo = styled.div`
	width: 0.875rem;
	height: 0.875rem;
	border-radius: 50%;
	border: 2px solid ${theme.themeColorSecondary};
	background-color: ${theme.themeColorPrimary};
	box-shadow: 0px 0px 2px rgba(156, 231, 90, 0.5);
	position: relative;
`;
const StyledDollarlogo: React.FC = () => {
	return (
		<StyledLogo>
			<StyledLogoWrapper
				logoImage={logo}
				width='0.875rem'
				height='0.875rem'
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			/>
		</StyledLogo>
	);
};

export default StyledDollarlogo;
