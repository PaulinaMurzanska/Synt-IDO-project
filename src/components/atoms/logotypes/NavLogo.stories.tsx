import React from 'react';
import { Meta } from '@storybook/react';
import NavLoogo from './NavLogo';

const meta: Meta = {
	title: 'Atoms/Logotypes',
	component: NavLoogo,
};

export default meta;

export const Invariant = () => (
	<div
		style={{
			backgroundColor: '#010514',
			width: '100vw',
			height: '100vh',
			padding: '80px',
		}}
	>
		<NavLoogo />
	</div>
);
