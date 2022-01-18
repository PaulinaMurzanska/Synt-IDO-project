import React from 'react';
import { storiesOf } from '@storybook/react';
import IDOBoxRight from './IDOBoxRight';
import { withKnobs } from '@storybook/addon-knobs';

storiesOf('Molecules/IdoBoxRight', module)
	.addDecorator(withKnobs)
	.add('BoxRight', () => (
		<div
			style={{
				backgroundColor: '#010514',
				width: '100%',
				padding: '80px',
				height: '100vh',
			}}
		>
			<div
				style={{
					width: '42rem',
					height: '22.5rem',
				}}
			>
				<IDOBoxRight />
			</div>
		</div>
	));
