import React from 'react';
import { Meta } from '@storybook/react';
import NavigationTop from './NavigationTop';

const meta: Meta = {
	title: 'Organisms/Navigation',
	component: NavigationTop,
};

export default meta;

export const Default = () => (
	<div
		style={{
			backgroundColor: '#010514',
			width: '100%',
			height: '100vh',
			position: 'relative',
		}}
	>
		<NavigationTop />
	</div>
);
