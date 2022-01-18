import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../themes/MainTheme';
import Button from '../../../../atoms/buttons/Button';
import IdoSNYvalueWrapper from './IdoSNYvalueWrapper';

const StyledIDObalanceBtnBlackBar = styled.div`
	width: 100%;
	height: 3.75rem;
	border-radius: 5px;
	background-color: #1c1b1e;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid #34303b;
	padding: 0 1rem;
`;
const StyledMaxBtnWrapper = styled.div`
	width: 30%;
	text-align: right;
`;

const IDObalanceBox: React.FC = () => {
	return (
		<StyledIDObalanceBtnBlackBar>
			<IdoSNYvalueWrapper />
			<StyledMaxBtnWrapper>
				<Button
					customedBtn
					label='Max'
					button={{
						width: '2.8rem',
						height: '1.875rem',
						radius: '3px',
						fontColor: '#1C1B1E',
						bgrColor: `${theme.themeColorSecondary}`,
						fontSize: '1rem',
					}}
				/>
			</StyledMaxBtnWrapper>
		</StyledIDObalanceBtnBlackBar>
	);
};

export default IDObalanceBox;
