import React from 'react';
import { Meta } from '@storybook/react';
import HamburgerButton from './HamburgerButton';

const meta: Meta = {
	title: 'Atoms/Buttons',
	component: HamburgerButton,
};

export default meta;

export const Hamburger = () => (
	<div
		style={{
			backgroundColor: '#010514',
			width: '100vw',
			height: '100vh',
			padding: '80px',
		}}
	>
		<HamburgerButton storybookVisible />
	</div>
);
