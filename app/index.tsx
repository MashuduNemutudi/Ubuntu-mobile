// app/index.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    const redirectUser = async () => {
      try {
        const savedRole = await AsyncStorage.getItem("userRole");

        if (savedRole === "tourist") {
          router.replace("/tourist/dashboard");
        } else if (savedRole === "business") {
          router.replace("/business/dashboard");
        } else {
          router.replace("/(auth)/login");
        }
      } catch (error) {
        console.error("Error checking role:", error);
        router.replace("/(auth)/login");
      }
    };

    redirectUser();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FF914D" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
