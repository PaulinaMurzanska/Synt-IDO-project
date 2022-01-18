import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import {
	FaTelegramPlane,
	FaTwitter,
	FaDiscord,
	FaMediumM,
} from 'react-icons/fa';

export const socials = [
	{
		icon: <VscGithub />,
		url: 'https://github.com/',
	},
	{
		icon: <FaTelegramPlane />,
		url: 'https://telegram.org/',
	},
	{
		icon: <FaTwitter />,
		url: 'https://twitter.com/?lang=pl',
	},

	{
		icon: <FaDiscord />,
		url: 'https://discord.com/',
	},
	{
		icon: <FaMediumM />,
		url: 'https://medium.com/',
	},
];
