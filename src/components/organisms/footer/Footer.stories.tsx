import React from 'react';
import { Meta } from '@storybook/react';
import Footer from './Footer';

const meta: Meta = {
	title: 'Organisms/Footer',
	component: Footer,
};

export default meta;

export const Default = () => (
	<div
		style={{
			backgroundColor: '#010514',
			width: '100vw',
			height: '100vh',
		}}
	>
		<Footer />
	</div>
);
