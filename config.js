// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: '42Willow',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to sleep!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '4553865ce66b5a0a8e72b406e9f861a8', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-37.732760',
	defaultLongitude: '145.091250',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'GitHub',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://outlook.office.com/mail/',
		},
		{
			id: '3',
			name: 'Monkeytype',
			icon: 'keyboard',
			link: 'https://github.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Element',
			icon: 'message-circle',
			link: 'https://app.element.io',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	// secondButtonsContainer: [
	// 	{
	// 		id: '1',
	// 		name: 'Music',
	// 		icon: 'headphones',
	// 		link: 'https://open.spotify.com',
	// 	},
	// 	{
	// 		id: '2',
	// 		name: 'twitter',
	// 		icon: 'twitter',
	// 		link: 'https://twitter.com/',
	// 	},
	// 	{
	// 		id: '3',
	// 		name: 'bot',
	// 		icon: 'bot',
	// 		link: 'https://discord.com/app',
	// 	},
	// 	{
	// 		id: '4',
	// 		name: 'Amazon',
	// 		icon: 'shopping-bag',
	// 		link: 'https://amazon.com/',
	// 	},
	// 	{
	// 		id: '5',
	// 		name: 'Hashnode',
	// 		icon: 'pen-tool',
	// 		link: 'https://hashnode.com/',
	// 	},
	// 	{
	// 		id: '6',
	// 		name: 'Figma',
	// 		icon: 'figma',
	// 		link: 'https://figma.com/',
	// 	},
	// ],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'sgnos llihC',
					link: 'spotify:playlist:6NsxPA4ObziLPiYwVlQgto',
				},
				{
					name: 'Hopefully™️',
					link: 'spotify:playlist:01SnLwTKI8Js7uKrTbkiQg',
				},
				{
					name: '0b101010',
					link: 'spotify:playlist:423AlDp9TTHMWSleodxb0f',
				},
				{
					name: 'Lofi Playlist',
					link: 'spotify:playlist:7mBY1r0b9ZtCOLN9QJNO44',
				},
				{
					name: 'Background Music',
					link: 'spotify:playlist:7mBY1r0b9ZtCOLN9QJNO44',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'r/unixporn',
					link: 'https://www.reddit.com/r/unixporn/',
				},
				{
					name: 'Discord',
					link: 'https://discord.com/app',
				},
				{
					name: 'GitHub Notifications',
					link: 'https://github.com/notifications',
				},
				{
					name: 'GitHub Repos',
					link: 'https://github.com/42Willow?tab=repositories',
				},
			],
		},
	],

	// Second Links Container
	// secondListsContainer: [
	// 	{
	// 		icon: 'binary',
	// 		id: '1',
	// 		links: [
	// 			{
	// 				name: 'Spotify',
	// 				link: 'https://www.spotify.com',
	// 			},
	// 			{
	// 				name: 'Reddit',
	// 				link: 'https://www.reddit.com',
	// 			},
	// 			{
	// 				name: 'Hashnode',
	// 				link: 'https://www.hashnode.com',
	// 			},
	// 			{
	// 				name: 'Pocket',
	// 				link: 'https://www.pocket.com',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		icon: 'github',
	// 		id: '2',
	// 		links: [
	// 			{
	// 				name: 'Front',
	// 				link: 'https://www.reddit.com/r/Frontend/',
	// 			},
	// 			{
	// 				name: 'Rust',
	// 				link: 'https://www.reddit.com/r/rust/',
	// 			},
	// 			{
	// 				name: 'Go',
	// 				link: 'https://www.reddit.com/r/golang/',
	// 			},
	// 			{
	// 				name: 'Repos',
	// 				link: 'https://github.com/migueravila',
	// 			},
	// 		],
	// 	},
	// ],
};
