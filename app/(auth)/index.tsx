// app/(auth)/index.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export default function AuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    const checkRole = async () => {
      try {
        const savedRole = await AsyncStorage.getItem("userRole");
        if (savedRole === "tourist") {
          router.replace("/tourist/dashboard");
        } else if (savedRole === "business") {
          router.replace("/business/dashboard");
        } else {
          // No role saved → go to login
          router.replace("/login");
        }
      } catch (error) {
        console.error("Error reading role:", error);
        router.replace("/login");
      }
    };

    checkRole();
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
