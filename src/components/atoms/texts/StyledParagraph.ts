import styled from 'styled-components';

type Props = {
	size?: string;
	color?: string;
	weight?: string;
	lineHeight?: string;
};

export const StyledParagraph = styled.p<Props>`
	font-size: ${({ size }) => (size ? size : '1rem')};
	color: ${({ color }) => (color ? color : '#ffffff')};
	font-weight: ${({ weight }) => (weight ? weight : 'normal')};
	line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '1.25rem')};
	font-family: 'Mukta';
`;
