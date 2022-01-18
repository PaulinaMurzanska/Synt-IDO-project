import React from 'react';
import { Meta } from '@storybook/react';
import StyledSNYlogo from './StyledSNYlogo';

const meta: Meta = {
	title: 'Atoms/Logotypes',
	component: StyledSNYlogo,
};

export default meta;

export const SNY = () => (
	<div
		style={{
			backgroundColor: '#010514',
			width: '100vw',
			height: '100vh',
			padding: '80px',
		}}
	>
		<StyledSNYlogo />
	</div>
);
