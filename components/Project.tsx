import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Svg, { Circle, Rect, G, Tspan, Text as T, Path } from 'react-native-svg';
import { useTheme } from '@/contexts/ThemeContext';
import { useFonts } from 'expo-font';

interface ProjectProps {
	name: string;
	description: string;
	language: string;
	forks: number;
	open_issues: number;
	watchers: number;
	stargazers_count: number;
	html_url: string;
	license: string;
}

const Project: React.FC<ProjectProps> = ({ name,description,
	language,forks,open_issues,watchers,stargazers_count,
	html_url,license }) => {
	const languagesColors = {"Python": "#306998", "JavaScript": "#F7DF1E",
							 "TypeScript": "#3178C6", "HTML": "#E34F26",
						     "CSS": "#1572B6", "Java": "#b07219", "C": "#555555",
							 "C++": "#00599C", "C#": "#68217A", "PHP": "#777BB4",
							 "Ruby": "#CC342D", "Go": "#00ADD8", "Rust": "#DEA584",
							 "Swift": "#FA7343", "Kotlin": "#7F52FF", "Dart": "#00B4AB",
							 "Shell": "#89E051", "SQL": "#e38c00", "Scala": "#DC322F"
	};
	
	const other = '#ff4500';
	
	const [fontsLoaded] = useFonts({
    	'PPAgrandir-Thin': require('@/assets/fonts/PPAgrandir-Thin.ttf'),
  	});

    return (
		<View style={styles.card}>
			<View style={styles.headers}>
				<Svg style={styles.svg} ariaHidden="true" height={18} viewBox="0 0 16 16" version="1.1" width={18} dataviewcomponent="true" >
					<Path style={styles.svg.path} d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
				</Svg>
				<Text style={styles.reponame}>{name}</Text>
				<TouchableOpacity 
					style={styles.viewRepo}
					onPress={() => Linking.openURL(`${html_url}`)}
				>
					<Svg style={styles.svg} xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" viewBox="0 0 16 16">
						<Path style={styles.svg.path} fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
						<Path style={styles.svg.path} fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
					</Svg>
				</TouchableOpacity>
			</View>
			
			<View style={styles.desc_view}>
				<Text style={styles.desc_view.desc_text}>{description}</Text>
			</View>
			
			<View style={styles.stats}>
				<View style={styles.stats.view}>
					<Svg style={styles.svg} xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" viewBox="0 0 16 16">
						<Path style={styles.svg.path} d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
					</Svg>
					<Text style={styles.text}>{stargazers_count}</Text>
				</View>
				
				<View style={styles.stats.view}>
					<Svg style={styles.svg} ariaHidden="true" height={18} viewBox="0 0 16 16" version="1.1" width={18} dataviewcomponent="true">
						<Path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
					</Svg>
					<Text style={styles.text}>{forks}</Text>
				</View>
				
				<View style={styles.stats.view}>
					<Svg style={styles.svg} ariaHidden="true" height={18} viewBox="0 0 16 16" version="1.1" width={18} dataviewcomponent="true">
						<Path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z" />
					</Svg>
					<Text style={styles.text}>{watchers}</Text>
				</View>
				
				<View style={styles.stats.view}>
					<Svg style={styles.svg} ariaHidden="true" height={18} viewBox="0 0 16 16" version="1.1" width={18} dataviewcomponent="true">
						<Path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
						<Path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
					</Svg>
					<Text x="50" y="55" fontSize={12} textAnchor="middle" style={styles.text}>{open_issues}</Text>
				</View>
				
				<View style={styles.stats.view}>
					<Svg style={styles.svg} ariaHidden="true" height={18} width={18} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					  <Circle cx="50" cy="50" r="40" stroke="black" strokeWidth="2" fill={`${languagesColors[language]?? other}`} />
					</Svg>
				  <Text x="50" y="55" fontSize={12} textAnchor="middle" style={styles.text} >{language?? 'Other'}</Text>
				</View>
				
				<View style={styles.stats.view}>
					<Svg style={styles.svg} ariaHidden="true" height={18} viewBox="0 0 16 16" version="1.1" width={18} dataviewcomponent="true" >
						<Path d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z" />
					</Svg>
					<Text style={styles.text}>{license}</Text>
				</View>
			</View>
		</View>
	);
}

export default Project;

const styles = StyleSheet.create({
	card: {
		minHeight: 100,
		backgroundColor: '#181818',
		width: '100%',
		borderRadius: 10,
		padding: 7,
		marginVertical: 4,
		borderWidth: 1,
		borderColor: '#2D2D2D',
		/*
		boxSizing: 'border-box',
		display: 'flex',
		flexDirection: 'column',
		*/
	},
	headers: {
		width: '100%',
		display: 'flex',
		margin: 0,
		marginBottom: 2,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'left',
		gap: 8,
	},
	reponame: {
		fontWeight: '900',
		fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		color: '#ffffff',
		fontSize: 15,
	},
	svg: {
		fill: '#424242',
		path: {
			fill: '#424242',
		},
	},
	stats: {
		display: 'flex',
		margin: 0,
		marginBlock: 8,
		padding: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		view: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			marginInline: 3,
			gap: 6,
		}
	},
	desc_view: {
		marginBlock: 10,
		desc_text: {
			color: '#999999',
			fontSize: 14,
			fontFamily: "PPAgrandir-Thin",
		},
	},
	text: {
		color: '#999999',
		fontSize: 12,
	},
	viewRepo: {
		position: 'absolute',
		right: 0,
		top: 0,
		cursor: 'pointer',
	},
});

