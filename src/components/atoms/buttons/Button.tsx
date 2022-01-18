import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from '../../../themes/MainTheme';

interface Btn {
	width?: string;
	height?: string;
	bgrColor?: string;
	fontColor?: string;
	radius?: string;
	fontSize?: string;
	margin?: string;
	weight?: string;
	primary?: string;
	customedBtn?: boolean;
}

interface Props {
	label?: string;
	button?: Btn;
	customClass?: string;
	customedBtn?: boolean;
}

export const StyledBtn = styled.button<Btn>`
	width: 22.5rem;
	height: 2.75rem;
	background-color: ${theme.themeColorPrimary};
	border-radius: 5px;
	color: ${theme.fontColorPrimary};
	font-size: 1rem;
	font-weight: normal;
	outline: none;
	border: none;
	font-family: 'Mukta';
	cursor: pointer;
	margin: 0;
	line-height: 1rem;

	${({ customedBtn }) =>
		customedBtn &&
		css<Btn>`
			width: ${({ width }) => width};
			height: ${({ height }) => height};
			background-color: ${({ bgrColor }) => bgrColor};
			border-radius: ${({ radius }) => radius};
			color: ${({ fontColor }) => fontColor};
			font-size: ${({ fontSize }) => fontSize};
			font-weight: ${({ weight }) => weight};
			margin: ${({ margin }) => margin};
		`}
`;

const Button: React.FC<Props> = ({
	label,
	button,
	customClass,
	customedBtn,
}) => {
	return (
		<StyledBtn
			width={button?.width}
			height={button?.height}
			bgrColor={button?.bgrColor}
			radius={button?.radius}
			fontColor={button?.fontColor}
			fontSize={button?.fontSize}
			margin={button?.margin}
			weight={button?.weight}
			className={customClass}
			customedBtn={customedBtn}
		>
			{label}
		</StyledBtn>
	);
};

export default Button;
