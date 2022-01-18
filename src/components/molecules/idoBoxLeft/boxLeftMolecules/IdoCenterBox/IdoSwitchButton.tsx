import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';
import StyledSNYlogo from '../../../../atoms/logotypes/StyledSNYlogo';
import { StyledParagraph } from '../../../../atoms/texts/StyledParagraph';

const StyledIDOswitchBtn = styled.div`
	width: 5rem;
	height: 1.875rem;
	border-radius: 3px;
	background-color: #34303b;
	margin: 0 10px 0 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.5rem;
`;

const IdoSwitchButton: React.FC = () => {
	return (
		<StyledIDOswitchBtn>
			<StyledSNYlogo />
			<StyledParagraph lineHeight='0' size='1rem'>
				SNY
			</StyledParagraph>
			<FaChevronDown
				style={{
					fontSize: '0.625rem',
				}}
			/>
		</StyledIDOswitchBtn>
	);
};

export default IdoSwitchButton;
