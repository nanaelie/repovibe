import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import Project from '@/components/Project';
import CommitersGraph from '@/components/Graph';
import { useTheme } from '@/contexts/ThemeContext';
import { useFonts } from 'expo-font';

interface Repos {
	id: number;
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

const Dashboard = () => {
		const [repos, setRepos] = useState<Repos[]>([]);
		const [loading, setLoading] = useState(false);
		const [error, setError] = useState(false);
		const { colors } = useTheme();
		const watchersList = [];
		
		const [fontsLoaded] = useFonts({
			'PPAgrandir-Thin': require('@/assets/fonts/PPAgrandir-Thin.ttf'),
		});
		useEffect(() => {
	const fetchRepos = async () => {
		try {
			const response = await fetch('https://api.github.com/users/nanaelie/repos');
			const data = await response.json();

			if (!Array.isArray(data)) throw new Error('Invalid response');

			const cleanedData = await Promise.all(
				data.map(async (repo: any) => {
					let realWatchers = 0;
					try {
						const subResp = await fetch(repo.subscribers_url);
						const subscribers = await subResp.json();
						realWatchers = Array.isArray(subscribers) ? subscribers.length : 0;
					} catch (e) {
						console.warn(`Erreur lors de la récupération des watchers pour ${repo.name}`);
					}

					return {
						id: repo.id,
						name: repo.name,
						description: repo.description,
						language: repo.language,
						forks: repo.forks,
						open_issues: repo.open_issues,
						watchers: realWatchers,
						stargazers_count: repo.stargazers_count,
						html_url: repo.html_url,
						license: repo.license?.name?.length > 8 ? repo.license?.spdx_id : repo.license?.name
					};
				})
			);

			setRepos(cleanedData);
			setLoading(false);
			setError(false);
		} catch (error) {
			console.error('Erreur:', error);
			setError(true);
			setLoading(false);
		}
	};

	fetchRepos();
}, []);


		if (loading) {
			return (
				<View style={styles.centered}>
					<ActivityIndicator size="large" color={'#ffffff'} />
					<Text style={{ color: '#ffffff', marginTop: 10 }}>Chargement des projets...</Text>
				</View>
			);
		}

		if (error) {
			return (
				<View style={styles.centered}>
					<Text style={{ color: 'red' }}>Une erreur est survenue. Veuillez réessayer plus tard.</Text>
				</View>
			);
		}

		return (
		<ScrollView contentContainerStyle={styles.dashboard}>
			<Text style={styles.text}>My GitHub Repositories</Text>
			<CommitersGraph />
			<View style={styles.container}>
			{repos.map((repo, _) => (
				<Project
					key={repo.id}
					name={repo.name}
					description={repo.description}
					language={repo.language}
					forks={repo.forks}
					open_issues={repo.open_issues}
					watchers={repo.watchers}
					stargazers_count={repo.stargazers_count}
					html_url={repo.html_url}
					license={repo.license}
				/>
			))}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	dashboard: {
		width: '100%',
		margin: 0,
		minHeight: '100%',
		backgroundColor: '#0A0A0A',
		padding: 0,
		display: 'flex',
		justifyContent: 'flex-start',
	},
	container: {
		padding: 7,
		margin: 0,
		width: '100%',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		color: '#ffffff',
		backgroundColor: '#0A0A0A',
	},
	text: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 26,
		marginBlock: 40,
		textAlign: 'center',
		fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	},
});

export default Dashboard;
