import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavCtx } from '../../../context/NavContext';
import { theme } from '../../../themes/MainTheme';

interface Props {
	handleClick?: () => void;
	storybookVisible?: boolean;
}

type Storybook = {
	storybookVisible?: boolean;
};

const StyledBars = styled.div<Storybook>`
	width: 2.5rem;
	height: 1.56rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	display: ${({ storybookVisible }) => (storybookVisible ? 'flex' : 'none')};
	cursor: pointer;
	@media (max-width: 770px) {
		display: flex;
	}
`;
const StyledBar = styled.div`
	width: 1.875rem;
	height: 2px;
	background-color: ${theme.fontColorSecondary};
`;
const HamburgerButton: React.FC<Props> = ({ storybookVisible }) => {
	const { handleOpenMenu } = useContext(NavCtx);

	return (
		<StyledBars
			onClick={handleOpenMenu}
			storybookVisible={storybookVisible}
		>
			<StyledBar />
			<StyledBar />
			<StyledBar />
		</StyledBars>
	);
};

export default HamburgerButton;
