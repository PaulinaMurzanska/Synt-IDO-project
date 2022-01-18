import React from 'react';
import { storiesOf } from '@storybook/react';
import IDOboxRightItem from './IDOboxRightItem';
import { items } from '../../../constants/IDOboxRightData';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Molecules/IdoBoxRight', module)
	.addDecorator(withKnobs)
	.add('BoxItem', () => (
		<div
			style={{
				backgroundColor: '#010514',
				width: '100vw',
				padding: '80px',
				height: '100vh',
			}}
		>
			<div style={{ width: '16.26rem', height: '22,5rem' }}>
				<IDOboxRightItem
					label={items[2].label}
					info={items[2].info}
					component={items[2].component}
				/>
			</div>
		</div>
	));
