import { View, Image, StyleSheet } from 'react-native';

const CommitersGraph = () => {
  return (
    <View style={styles.view}>
      <Image
      	style={styles.view.image}
      	src={{ source: 'https://github-readme-activity-graph.vercel.app/graph?username=nanaelie' }}
      />
    </View>
  );
}
export default CommitersGraph;

const styles = StyleSheet.create({
	view: {
		width: '100%',
		maxHeight: '300px',
		image: {
			width: '100%',
		},
	},
});
