import React from 'react';
import { Meta } from '@storybook/react';
import Button from './Button';
import { theme } from '../../../themes/MainTheme';

const meta: Meta = {
	title: 'Atoms/Buttons',
	component: Button,
};

export default meta;

export const Default = () => (
	<div
		style={{
			backgroundColor: '#010514',
			width: '100vw',
			height: '100vh',
			padding: '5rem',
		}}
	>
		<Button label='Connect a wallet' />
	</div>
);

export const Secondary = () => (
	<div
		style={{
			backgroundColor: '#010514',
			width: '100vw',
			height: '100vh',
			padding: '5rem',
		}}
	>
		<Button
			customedBtn
			label='custimized btn'
			button={{
				width: '7.5rem',
				height: '2.5rem',
				bgrColor: theme.themeColorSecondary,
				fontSize: '0.75rem',
				fontColor: theme.fontColorTertiary,
			}}
		/>
	</div>
);
