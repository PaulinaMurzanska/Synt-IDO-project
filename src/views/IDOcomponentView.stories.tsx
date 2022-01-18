import React from 'react';
import { Meta } from '@storybook/react';
import IDOcomponentView from './IDOcomponentView';

const meta: Meta = {
	title: 'App/app',
	component: IDOcomponentView,
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
		<IDOcomponentView />
	</div>
);
