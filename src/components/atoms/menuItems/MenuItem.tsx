import React, { useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../../../themes/MainTheme';
import { StyledParagraph } from '../texts/StyledParagraph';
import { NavCtx } from '../../../context/NavContext';

type Props = {
	name: string;
	path?: string;
	id?: number;
	to?: URL;
};

const StyledMenuItem = styled.li`
	height: 100%;
	width: calc(100% / 5);
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 2px;
	border-radius: 10px;
	cursor: pointer;
	&:first-of-type {
		margin-left: 0;
	}
	&:last-of-type {
		margin-right: 0;
	}
	&:hover {
		background-color: ${theme.backgroundDarkFaded};
		transition: 0.3s;
		p {
			color: #fff;
		}
	}
	@media (max-width: 770px) {
		width: 100%;
		p {
			font-weight: 600;
			color: ${theme.fontColorSecondary};
		}
	}
`;
const StyledLink = styled.a``;

const MenuItem: React.FC<Props> = ({ name, path }) => {
	const { handleCloseMenu } = useContext(NavCtx);
	const myUrl = `${path}`;
	return (
		<StyledMenuItem className='active' onClick={handleCloseMenu}>
			<StyledLink href={myUrl} className='active'>
				<StyledParagraph
					size='1rem'
					color={theme.fontColorTertiary}
					lineHeight='1.25rem'
				>
					{name}
				</StyledParagraph>
			</StyledLink>
		</StyledMenuItem>
	);
};

export default MenuItem;
