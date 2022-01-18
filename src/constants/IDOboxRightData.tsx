import React from 'react';
import { BsClock } from 'react-icons/bs';
import StyledDollarlogo from '../components/atoms/logotypes/StyledDollarLogo';
import StyledSNYlogo from '../components/atoms/logotypes/StyledSNYlogo';
import { StyledLogoWrapper } from '../components/atoms/logotypes/StyledLogoWrapper';
import invarianLogo from '../assets/logo/LogoShort.svg';

export const items = [
	{
		label: 'Sale period ends in',
		info: '15:30:33',
		component: <BsClock />,
	},
	{
		label: 'Grace period ends in',
		info: '32:29:27',
		component: <BsClock />,
	},
	{
		label: 'SOL Contributed',
		info: '122 124 846',
		component: <StyledSNYlogo />,
	},
	{
		label: 'Estimated token price',
		info: '218.839',
		component: <StyledDollarlogo />,
	},
	{
		label: 'INVARIANT for sale',
		info: '20 000 000',
		component: (
			<StyledLogoWrapper
				logoImage={invarianLogo}
				width='1.25rem'
				height='1.25rem'
			/>
		),
	},
];
