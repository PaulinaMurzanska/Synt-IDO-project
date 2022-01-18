import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../themes/MainTheme';
import IDOboxRightItem from './IDOboxRightItem';
import { items } from '../../../constants/IDOboxRightData';

const StyledIDOboxRight = styled.div`
	width: 40%;
	height: 100%;
	border-radius: 10px;
	background-color: ${theme.backgroundDarkFaded};
	@media (max-width: 600px) {
		width: 100%;
		margin-bottom: 1.5rem;
	}
`;

const IDOBoxRight: React.FC = () => {
	return (
		<StyledIDOboxRight>
			{items.map((item, index) => (
				<IDOboxRightItem
					label={item.label}
					info={item.info}
					component={item.component}
					key={index}
				/>
			))}
		</StyledIDOboxRight>
	);
};

export default IDOBoxRight;
