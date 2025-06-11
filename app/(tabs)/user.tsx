import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useTheme } from '@/contexts/ThemeContext';
import cover from '@/assets/images/cover.jpg';
import avatar from '@/assets/images/avatar.jpg';

const ProfileScreen = () => {
	const [remaining, setRemaining] = useState<number>(0);
	const { colors } = useTheme();

	  useEffect(() => {
		fetch("https://api.github.com/rate_limit")
		  .then((response) => response.json())
		  .then((data) => setRemaining(data.rate.remaining))
		  .catch((error) => console.error("Erreur:", error));
	  }, []);

	return (
		<ScrollView contentContainerStyle={[styles.container,{backgroundColor: colors.background}]}>
			<View style={styles.coverContainer}>
				<Image source={cover} style={styles.coverImage} />
				<Image source={avatar} style={styles.avatar} />
			</View>
			<Text style={styles.name}>{"Nana Elie"}</Text>
			<Text style={styles.location}>{"Burkina Faso / Bobo Dioulasso"}</Text>
			<Text style={styles.description}>Passionné par les technologies modernes, Nana Elie développe des projets innovants en alliant rigueur, curiosité et créativité. 🌟</Text>
			<Text style={styles.description}>Développeur indépendant avec plus de 3 ans d'expérience en C/C++, Python, JavaScript, React Native, HTML et CSS.</Text>			
			<Text style={styles.description}>Je crée des sites web dynamiques et réactifs, en intégrant des fonctionnalités interactives, une mise en page responsive, et une expérience utilisateur optimale. J'optimise aussi les performances pour garantir la fluidité des sites. Je maîtrise aussi l'administration des systèmes comme Windows, Ubuntu, et Kali Linux, et je propose des solutions techniques adaptées aux besoins de mes clients.</Text>
		
			<View style={styles.remaining}>
				<Text style={styles.remaining.remaining}>{`Remainig ${remaining} ${remaining > 1 ? 'calls' : 'call'}`}</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		backgroundColor: "#f2f2f2",
		width: '100%',
		minHeight: '100%',
	},
	loadingContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#f2f2f2",
	},
	coverContainer: {
		width: "100%",
		height: 180,
		backgroundColor: "#ccc",
		position: "relative",
		marginBottom: 60,
	},
	coverImage: {
		width: "100%",
		height: "100%",
	},
	avatar: {
		width: 120,
		height: 120,
		borderRadius: 60,
		borderWidth: 3,
		borderColor: "#fff",
		position: "absolute",
		bottom: -60,
		alignSelf: "center",
		backgroundColor: "#fff",
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#333",
		marginTop: 15,
		textAlign: "center",
		fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	},
	location: {
		fontSize: 16,
		color: "#555",
		marginTop: 0,
		textAlign: "center",
		fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	},
	description: {
		fontSize: 14.5,
		marginTop: 12,
		marginHorizontal: 20,
		textAlign: "center",
		color: '#ffffff',
		fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	},
	remaining: {
		marginVertical: 20,
		remaining: {
			color: '#424242',
			fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
			fontSize: 17,
			fontWeight: 'bold',
		},
	},
});
	
export default ProfileScreen;
