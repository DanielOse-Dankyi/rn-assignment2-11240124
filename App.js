import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My name is<Text style={{ fontWeight: "bold" }}> Daniel</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffba20',
    color: '#ffffff',
    alignItems: 'center',
    fontSize: 24,
    justifyContent: 'center',
  },
});
