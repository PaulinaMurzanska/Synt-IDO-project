import React from 'react';
import { Meta } from '@storybook/react';
import StyledDollarLogo from './StyledDollarLogo';

const meta: Meta = {
	title: 'Atoms/Logotypes',
	component: StyledDollarLogo,
};

export default meta;

export const Dollar = () => (
	<div
		style={{
			backgroundColor: '#010514',
			width: '100vw',
			height: '100vh',
			padding: '80px',
		}}
	>
		<StyledDollarLogo />
	</div>
);
