import React from 'react';
import { Meta } from '@storybook/react';
import IDOcomponent from './IDOcomponent';

const meta: Meta = {
	title: 'Organisms/IDOComponent',
	component: IDOcomponent,
};

export default meta;

export const Default = () => (
	<div
		style={{
			backgroundColor: '#010514',
			padding: '40px',
			width: '100vw',
			height: '100vh',
		}}
	>
		<div style={{ width: '664px', height: '390px' }}>
			<IDOcomponent />
		</div>
	</div>
);
