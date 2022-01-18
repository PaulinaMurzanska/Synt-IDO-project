import React from 'react';
import GlobalStyles from '../themes/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../themes/MainTheme';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	min-height: 100vh;
	padding: 120px 0;
	position: relative;
`;

const MainTemplate: React.FC = ({ children }) => {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<StyledWrapper>{children}</StyledWrapper>
			</ThemeProvider>
		</>
	);
};

export default MainTemplate;
