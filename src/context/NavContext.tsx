import React, { useState, FC, createContext } from 'react';

type NavContextState = {
	isResponsiveMenuOpen?: boolean;
	handleOpenMenu: () => void;
	handleCloseMenu: () => void;
};

const contextDefaultValues: NavContextState = {
	isResponsiveMenuOpen: false,
	handleOpenMenu: () => {},
	handleCloseMenu: () => {},
};

export const NavCtx = createContext<NavContextState>(contextDefaultValues);

const NavContext: FC = ({ children }) => {
	const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(
		contextDefaultValues.isResponsiveMenuOpen,
	);
	const handleOpenMenu = () => {
		setIsResponsiveMenuOpen(true);
	};
	const handleCloseMenu = () => {
		setIsResponsiveMenuOpen(false);
	};

	return (
		<NavCtx.Provider
			value={{
				isResponsiveMenuOpen,
				handleOpenMenu,
				handleCloseMenu,
			}}
		>
			{children}
		</NavCtx.Provider>
	);
};
export default NavContext;
