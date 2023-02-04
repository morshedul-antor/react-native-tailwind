import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView className={styles.container}>
      <Text className={styles.text}>React Native with Tailwind CSS!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: "h-full flex justify-center",
  text: "w-3/4 bg-black mx-auto p-3.5 rounded text-white text-center",
});
