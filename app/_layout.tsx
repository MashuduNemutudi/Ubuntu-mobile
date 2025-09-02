// app/_layout.tsx
import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

// Fake auth (replace with real auth or AsyncStorage)
const useAuth = () => {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    // simulate loading saved session
    setTimeout(() => {
      setSignedIn(false); // 👈 change to true if already logged in
      setLoading(false);
    }, 1000);
  }, []);

  return { loading, signedIn };
};

export default function RootLayout() {
  const { loading, signedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!signedIn) {
        router.replace("/(auth)/landing"); // go to auth landing if not signed in
      } else {
        router.replace("/(tabs)/home"); // go to home if signed in
      }
    }
  }, [loading, signedIn]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="(auth)/landing" />
      <Stack.Screen name="(auth)/login" />
      <Stack.Screen name="(auth)/signup" />

      {/* Protected App Screens */}
      <Stack.Screen name="(app)/(tabs)/home" />
      <Stack.Screen name="(app)/(tabs)/explore" />
      <Stack.Screen name="(app)/(tabs)/map" />
      <Stack.Screen name="(app)/(tabs)/sellers" />
      <Stack.Screen name="(app)/(tabs)/profile" />
    </Stack>
  );
}
